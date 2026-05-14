let products = [];
let currentFilter = null;

// --- ЧИСТІ ФУНКЦІЇ (Pure Functions) ---
const addProduct = (list, item) => [...list, { ...item, id: Date.now() }];
const deleteProduct = (list, id) => list.filter(p => p.id !== id);
const updateProduct = (list, id, data) => list.map(p => p.id === id ? { ...p, ...data } : p);
const calculateTotal = (list) => list.reduce((sum, p) => sum + Number(p.price), 0);

// --- ЛОГІКА ВІДОБРАЖЕННЯ (DOM) ---
const render = () => {
    const listElement = document.getElementById('product-list');
    const totalElement = document.getElementById('total-price');

    // Фільтрація
    const displayedProducts = currentFilter 
        ? products.filter(p => p.category === currentFilter) 
        : products;

    if (products.length === 0) {
        listElement.innerHTML = `<p class="empty-msg">Наразі список товарів пустий. Додайте новий товар.</p>`;
    } else {
        listElement.innerHTML = displayedProducts.map(p => `
            <li class="product-card" id="item-${p.id}">
                <img src="${p.image}" alt="${p.name}">
                <div class="card-info">
                    <small>ID: ${p.id}</small>
                    <h3>${p.name}</h3>
                    <p>Ціна: <strong>${p.price} грн</strong></p>
                    <p>Категорія: ${p.category}</p>
                    <div class="card-btns">
                        <button class="edit-btn" onclick="openEdit(${p.id})">Редагувати</button>
                        <button class="del-btn" onclick="handleDelete(${p.id})">Видалити</button>
                    </div>
                </div>
            </li>
        `).join('');
    }
    totalElement.textContent = calculateTotal(products);
};

// --- ОБРОБНИКИ ПОДІЙ ---
const handleSave = (e) => {
    e.preventDefault();
    const id = document.getElementById('edit-id').value;
    const data = {
        name: document.getElementById('p-name').value,
        price: document.getElementById('p-price').value,
        category: document.getElementById('p-category').value,
        image: document.getElementById('p-image').value
    };

    if (id) {
        products = updateProduct(products, Number(id), data);
        showSnackbar(`Оновлено: ID ${id} - ${data.name}`);
    } else {
        products = addProduct(products, data);
    }

    closeModal();
    render();
};

const handleDelete = (id) => {
    products = deleteProduct(products, id);
    render();
    showSnackbar("Товар успішно видалено зі списку");
};

const openEdit = (id) => {
    const p = products.find(item => item.id === id);
    document.getElementById('edit-id').value = p.id;
    document.getElementById('p-name').value = p.name;
    document.getElementById('p-price').value = p.price;
    document.getElementById('p-category').value = p.category;
    document.getElementById('p-image').value = p.image;
    document.getElementById('modal-title').textContent = "Редагування товару";
    toggleModal(true);
};

const setFilter = (cat) => {
    currentFilter = cat;
    render();
};

// --- ДОПОМІЖНІ ФУНКЦІЇ ---
const toggleModal = (show) => document.getElementById('modal').classList.toggle('hidden', !show);
const closeModal = () => {
    toggleModal(false);
    document.getElementById('product-form').reset();
    document.getElementById('edit-id').value = '';
    document.getElementById('modal-title').textContent = "Інформація про товар";
};

const showSnackbar = (msg) => {
    const container = document.getElementById('snackbar-container');
    const snack = document.createElement('div');
    snack.className = 'snackbar';
    snack.textContent = msg;
    container.appendChild(snack);
    setTimeout(() => snack.remove(), 3000);
};

// Ініціалізація
document.getElementById('product-form').onsubmit = handleSave;
document.getElementById('open-modal-btn').onclick = () => toggleModal(true);
document.getElementById('close-modal-btn').onclick = closeModal;

render();