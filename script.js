// --- 1. MEMORY CHALLENGE LOGIC ---
const symbols = ['🚀', '🎨', '💻', '🍕', '🌈', '🔥', '🚀', '🎨', '💻', '🍕', '🌈', '🔥'];
let chosenCards = [];
let matchedCount = 0;
let moves = 0;

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

function initMemory() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    moves = 0; matchedCount = 0;
    document.getElementById('moves').innerText = moves;
    
    shuffle(symbols).forEach(symbol => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <div class="back">?</div>
            <div class="front">${symbol}</div>
        `;
        card.onclick = () => flipCard(card);
        board.appendChild(card);
    });
}

function flipCard(card) {
    if (chosenCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        chosenCards.push(card);
        
        if (chosenCards.length === 2) {
            moves++;
            document.getElementById('moves').innerText = moves;
            setTimeout(checkMatch, 600);
        }
    }
}

function checkMatch() {
    const [c1, c2] = chosenCards;
    const isMatch = c1.querySelector('.front').innerText === c2.querySelector('.front').innerText;
    
    if (isMatch) {
        matchedCount += 2;
        if (matchedCount === symbols.length) alert('Геніально! Ви виграли!');
    } else {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
    }
    chosenCards = [];
}

// --- 2. SLIDER LOGIC ---
let currentSlide = 0;
const track = document.getElementById('slide-track');
const slideCount = document.querySelectorAll('.slide').length;

function updateSlider(n) {
    currentSlide = (currentSlide + n + slideCount) % slideCount;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById('nextBtn').onclick = () => updateSlider(1);
document.getElementById('prevBtn').onclick = () => updateSlider(-1);

// Auto-play with pause on hover
let slideInterval = setInterval(() => updateSlider(1), 4000);
document.getElementById('slider').onmouseenter = () => clearInterval(slideInterval);
document.getElementById('slider').onmouseleave = () => slideInterval = setInterval(() => updateSlider(1), 4000);

// --- 3. KANBAN LOGIC (Drag & Drop) ---
document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.id);
        card.style.opacity = '0.5';
    });
    card.addEventListener('dragend', () => card.style.opacity = '1');
});

document.querySelectorAll('.kanban-col').forEach(col => {
    col.addEventListener('dragover', (e) => e.preventDefault());
    col.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        col.querySelector('.items-area').appendChild(draggableElement);
    });
});

// --- 4. EDIT GRID LOGIC ---
const techs = ['React', 'Vue', 'Angular', 'Node.js', 'Docker', 'AWS'];
const grid = document.getElementById('card-grid');

function renderGrid() {
    grid.innerHTML = techs.map(t => `
        <div class="grid-item">
            <div class="del-badge" onclick="this.parentElement.remove()">×</div>
            <strong>${t}</strong>
        </div>
    `).join('');
}

document.getElementById('edit-mode-toggle').onclick = function() {
    const isEditing = grid.classList.toggle('editing');
    this.innerText = isEditing ? 'Готово' : 'Редагувати';
};

// Start Everything
document.getElementById('start-game').onclick = initMemory;
renderGrid();
initMemory();