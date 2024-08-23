document.getElementById('start-game').addEventListener('click', function() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.character-select').style.display = 'flex';
});

function selectCharacter(character) {
    const username = document.getElementById('username').value;
    if (username) {
        alert('You selected: ' + character + ' with name: ' + username);
        document.querySelector('.character-select').style.display = 'none';
        document.querySelector('.game-screen').style.display = 'block';
        document.getElementById('pet-name').textContent = character.charAt(0).toUpperCase() + character.slice(1);
    } else {
        alert('Please enter your name.');
    }
}

let health = 100;
let thirst = 100;
let feed = 100;
let sleep = 100;

function decreaseStats() {
    health = Math.max(0, health - 1);
    thirst = Math.max(0, thirst - 2);
    feed = Math.max(0, feed - 1.5);
    sleep = Math.max(0, sleep - 1);

    updateBars();

    if (health <= 0) {
        alert("Your pet has died...");
        clearInterval(gameInterval);
    }
}

function updateBars() {
    document.getElementById('health-bar').style.width = health + '%';
    document.getElementById('thirst-bar').style.width = thirst + '%';
    document.getElementById('feed-bar').style.width = feed + '%';
    document.getElementById('sleep-bar').style.width = sleep + '%';
}

function feedPet() {
    feed = Math.min(100, feed + 20);
    health = Math.min(100, health + 5); // Health barını artır
    updateBars();
}

function giveDrink() {
    thirst = Math.min(100, thirst + 20);
    health = Math.min(100, health + 5); // Health barını artır
    updateBars();
}

function putToSleep() {
    sleep = Math.min(100, sleep + 20);
    health = Math.min(100, health + 5); // Health barını artır
    updateBars();
}

const gameInterval = setInterval(decreaseStats, 1000);
