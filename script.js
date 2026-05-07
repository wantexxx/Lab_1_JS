const titleElement = document.querySelector('h1');

function showStudentWarning(name) {
    console.warn("Студент: " + name);
}

const btn = document.querySelector('#action-button');

btn.onmousemove = function() {
    showStudentWarning("Кирило"); 
};