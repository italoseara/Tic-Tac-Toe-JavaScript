var activePlayer = Math.floor(Math.random() * 2);
var boxes = document.querySelectorAll('.playable');

for (var i = 0; i < boxes.length; i++){ boxes[i].classList.add('player-' + activePlayer + '-turn'); };

document.querySelector('.board').addEventListener('click', () => {
    var currentBox = document.querySelector('.box:hover');
    if (!currentBox.className.includes('playable')) return

    if (currentBox.className.includes('player-1-turn')) currentBox.textContent = '〇';
    else if (currentBox.className.includes('player-0-turn')) currentBox.textContent = '✖';
    currentBox.classList.add('player-' + activePlayer);
    
    currentBox.classList.remove('playable')

    for (var i = 0; i < boxes.length; i++){ boxes[i].classList.remove('player-' + activePlayer + '-turn'); };

    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;

    for (var i = 0; i < boxes.length; i++){ boxes[i].classList.add('player-' + activePlayer + '-turn'); };
});