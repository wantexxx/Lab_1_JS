/**
 * ЛАБОРАТОРНА РОБОТА №4
 * Тема: Робота з примітивними типами даних. Масиви. Об'єкти.
 */

function task1() {
    let fruits = ["яблуко", "банан", "апельсин", "груша", "вишня"];
    console.log("Завдання 1: Початковий масив", fruits);

    fruits.pop();
    console.log("1.1. Після видалення останнього:", fruits);

    fruits.unshift("ананас");

    fruits.sort().reverse();
    console.log("1.3. Зворотне сортування:", fruits);

    const appleIndex = fruits.indexOf("яблуко");
    console.log("1.4. Індекс 'яблуко':", appleIndex);
}

function task2() {
    let colors = ["червоний", "синій", "зелений", "світло-синій", "жовтий", "темно-синій"];

    let shortest = colors.reduce((a, b) => a.length <= b.length ? a : b);
    let longest = colors.reduce((a, b) => a.length >= b.length ? a : b);
    console.log(`Завдання 2.2: Найкоротший - ${shortest}, Найдовший - ${longest}`);

    colors = colors.filter(color => color.includes("синій"));

    const result = colors.join(", ");
    console.log("Завдання 2.5: Рядок із синіми кольорами:", result);
}

function task3() {
    let employees = [
        { name: "Олександр", age: 25, position: "розробник" },
        { name: "Марія", age: 30, position: "дизайнер" },
        { name: "Андрій", age: 22, position: "розробник" }
    ];

    employees.sort((a, b) => a.name.localeCompare(b.name));

    const devs = employees.filter(emp => emp.position === "розробник");
    console.log("Завдання 3.3: Розробники:", devs);

    employees = employees.filter(emp => emp.age <= 28);

    employees.push({ name: "Ірина", age: 27, position: "тестувальник" });
    console.log("Завдання 3.5: Оновлений список працівників:", employees);
}

function task4() {
    let students = [
        { name: "Олексій", age: 19, course: 2 },
        { name: "Дмитро", age: 21, course: 3 },
        { name: "Олена", age: 20, course: 2 }
    ];

    students = students.filter(s => s.name !== "Олексій");

    students.push({ name: "Максим", age: 22, course: 4 });

    students.sort((a, b) => b.age - a.age);

    const thirdYear = students.find(s => s.course === 3);
    console.log("Завдання 4.5: Студент 3-го курсу:", thirdYear);
}

function task5() {
    let numbers = [1, 2, 3, 4, 5, 6];

    const squares = numbers.map(n => n ** 2);
    console.log("Завдання 5.1: Квадрати:", squares);

    const evens = numbers.filter(n => n % 2 === 0);
    console.log("Завдання 5.2: Парні:", evens);

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("Завдання 5.3: Сума:", sum);


    const extra = [10, 20, 30, 40, 50];
    numbers = numbers.concat(extra);

    numbers.splice(0, 3);
    console.log("Завдання 5.5: Після splice(0,3):", numbers);
}

function libraryManagement() {
    // 1. Початковий масив книг [cite: 48, 49]
    let books = [
        { title: "Тіні забутих предків", author: "Коцюбинський", genre: "Повість", pages: 150, isAvailable: true }
    ];

    function addBook(title, author, genre, pages) {
        books.push({ title, author, genre, pages, isAvailable: true });
    }

    function removeBook(title) {
        books = books.filter(b => b.title !== title);
    }

    function findBooksByAuthor(author) {
        return books.filter(b => b.author === author);
    }

    function toggleBookAvailability(title, isBorrowed) {
        const book = books.find(b => b.title === title);
        if (book) book.isAvailable = !isBorrowed;
    }

    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
    }

    function getBooksStatistics() {
        const total = books.length;
        const available = books.filter(b => b.isAvailable).length;
        const borrowed = total - available;
        const avgPages = total ? books.reduce((s, b) => s + b.pages, 0) / total : 0;
        return { total, available, borrowed, avgPages };
    }

    addBook("Кобзар", "Шевченко", "Поезія", 400);
    addBook("Захар Беркут", "Франко", "Повість", 250);
    toggleBookAvailability("Кобзар", true);
    sortBooksByPages();
    
    console.log("Завдання 6: Статистика бібліотеки:", getBooksStatistics());
}

function task7() {
    let student = {
        name: "Кирило",
        age: 19,
        course: 2
    };

    student.subjects = ["Математика", "JS", "Англійська"];

    delete student.age;

    console.log("Завдання 7: Об'єкт студента:", student);
}

task1();
task2();
task3();
task4();
task5();
libraryManagement();
task7();