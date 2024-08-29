// Таймер
const start = document.getElementById('start');
const reStart = document.getElementById('re-start');
start.addEventListener("click", () => {
    start.classList.add('start-hidden');
    reStart.classList.remove('start-hidden');
    const timerElement = document.getElementById('timer');
    let seconds = 60;
    let interval = setInterval(function () {
        seconds--;
        timerElement.innerText = seconds;
        clickWord();
        if (seconds === 0) {
            clearInterval(interval);
            alert('Game over!');
            location.reload();
            start.classList.remove('start-hidden');
            reStart.classList.add('start-hidden');

        }

    }, 1000);
});

// Рестарт
reStart.addEventListener('click', () => {
    location.reload();
});


// Клик по букве
function clickWord() {
    const words = document.querySelectorAll('.word');

    words.forEach(word => {
        word.addEventListener('click', () => {
            word.classList.add('disabled');
        });
    });
}


//
const themes = ["Города Беларуси", "Город мира", "Реки", "Озера", "Страны",
    "Футбольные клубы", "Марки машин", "Одежда", "Бренды", "Фрукты и овощи",
    "Марки еды", "Породы собак/котов", "Животные", "Профессии", "Актёры", "Певцы"];


// Генератор рандомных слов
let currentWord = "";
let generateButton = document.getElementById("generate-button");
let randomWord = document.getElementById("random-word");

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
}

function displayRandomWord() {
    currentWord = getRandomWord();
    randomWord.innerText = currentWord;
}

generateButton.addEventListener("click", displayRandomWord);

// Выбрать тему
let select = document.getElementById('select-button');

function createSelectBrands(themes) {
    let html = '<option>Выбрать тему</option>';
    themes.forEach(theme => {
        html += `<option value="${theme}">${theme}</option>`;
    });
    select.innerHTML = html;
    return select;
}

createSelectBrands(themes);

//
select.addEventListener('change', () => {
    let selectedValue = select.value;
    if (selectedValue) {
        randomWord.innerText = selectedValue;
    }
})

