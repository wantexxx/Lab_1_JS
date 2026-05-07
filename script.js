const btn = document.getElementById('myBtn');

btn.addEventListener('click', () => {
    console.clear(); 
    console.log("%c--- ВИКОНАННЯ ЗАВДАНЬ (ВАРІАНТ 16) ---", "color: green; font-weight: bold;");

    task1();
    task2();
    task3(3); // Приклад: Середа
    task4(["яблуко", "кіт", "авто", "дім"]);
    task5([10, 20, 30]);
    task6(15, 5);
});

function task1() {
    let a = 0, b = 1, sum = 0, count = 0;
    while (count < 10) {
        sum += a;
        let next = a + b;
        a = b;
        b = next;
        count++;
    }
    console.log("Завдання 1 (Сума Фібоначчі):", sum);
}

function task2() {
    let totalSum = 0;
    for (let i = 2; i <= 1000; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) totalSum += i;
    }
    console.log("Завдання 2 (Сума простих чисел):", totalSum);
}

function task3(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1: dayName = "Понеділок"; break;
        case 2: dayName = "Вівторок"; break;
        case 3: dayName = "Середа"; break;
        case 4: dayName = "Четвер"; break;
        case 5: dayName = "П'ятниця"; break;
        case 6: dayName = "Субота"; break;
        case 7: dayName = "Неділя"; break;
        default: dayName = "Некоректний номер";
    }
    console.log("Завдання 3 (День тижня):", dayName);
}

function task4(arr) {
    const result = arr.filter(str => str.length % 2 !== 0);
    console.log("Завдання 4 (Непарні довжини):", result);
}

const task5 = (numbers) => {
    const result = numbers.map(n => n + 1);
    console.log("Завдання 5 (Збільшено на 1):", result);
};

function task6(a, b) {
    const result = (a + b === 10 || Math.abs(a - b) === 10);
    console.log("Завдання 6 (Сума/різниця 10):", result);
}