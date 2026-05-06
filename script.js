// А. Виводимо "Hello world!" у заголовок h1 [cite: 10, 11]
// Використовуємо метод querySelector 
const title = document.querySelector('#myTitle');
title.textContent = "Hello world!";

// Б. Знаходимо кнопку за допомогою querySelector [cite: 7, 13]
const btn = document.querySelector('#myBtn');

// В. Створюємо функцію, яка виводить твоє ім'я як попередження (warn) 
function showWarning() {
    console.warn("Твоє Ім'я"); // Тут напиши своє ім'я
}

// Г. Призначаємо івент onmousemove (коли мишка рухається над кнопкою) [cite: 8, 13]
btn.onmousemove = showWarning;