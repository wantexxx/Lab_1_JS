
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]; // порівняння "менше" [cite: 29]
        if (arr[i] > max) max = arr[i]; // порівняння "більше" [cite: 29]
    }
    return { min, max };
}
console.log("Мін/Макс:", findMinMax([10, 2, 55, 1, 8]));

const obj1 = { price: 100 };
const obj2 = { price: 200 };
console.log("Чи obj1 дорожчий за obj2?", obj1.price > obj2.price);


function isInRange(num, min, max) {
    // Оператор && (І) поєднує дві умови 
    return num >= min && num <= max;
}
console.log("Чи 15 в діапазоні 10-20?", isInRange(15, 10, 20));

let isLightOn = true;
isLightOn = !isLightOn; // перетворили на false [cite: 31]
console.log("Світло увімкнено?", isLightOn);

function getGrade(score) {
    if (score >= 90) return "Відмінно";
    else if (score >= 75) return "Добре";
    else if (score >= 60) return "Задовільно";
    else return "Незадовільно";
}
console.log("Оцінка 85:", getGrade(85));

function getSeasonIf(month) {
    if (month === 12 || month <= 2) return "Зима";
    if (month >= 3 && month <= 5) return "Весна";
    if (month >= 6 && month <= 8) return "Літо";
    return "Осінь";
}

const month = 5;
const season = (month === 12 || month <= 2) ? "Зима" :
               (month >= 3 && month <= 5) ? "Весна" :
               (month >= 6 && month <= 8) ? "Літо" : "Осінь";

console.log("Зараз сезон:", season);