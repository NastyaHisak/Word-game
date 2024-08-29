// Таймер
const start = document.getElementById('start');
start.addEventListener("click", () => {
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
        }

    }, 1000);
});

// Клик по букве
function clickWord(){
    const words = document.querySelectorAll('.word');

    words.forEach(word => {
        word.addEventListener('click', () => {
            word.classList.add('disabled');
        });
    });
}


// Генератор рандомных слов
const themes = ["Города Беларуси", "Город мира", "Реки", "Озера", "Страны",
    "Футбольные клубы", "Марки машин", "Одежда", "Бренды", "Фрукты и овощи",
    "Марки еды", "Породы собак/котов", "Животные", "Профессии", "Актёры", "Певцы"];

let currentWord = "";

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
}

function displayRandomWord() {
    currentWord = getRandomWord();
    document.getElementById("random-word").innerText = currentWord;
}

document.getElementById("generate-button").addEventListener("click", displayRandomWord);

// document.getElementById("replace-button").addEventListener("click", () => {
//     if (currentWord) {
//         let newWord;
//         do {
//             newWord = getRandomWord();
//         } while (newWord === currentWord); // Убедитесь, что новое слово отличается от текущего
//         currentWord = newWord;
//         document.getElementById("random-word").innerText = currentWord;
//     } else {
//         alert("Сначала сгенерируйте слово!");
//     }
// });
