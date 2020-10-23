var activePlayer = Math.floor(Math.random() * 2);
var boxes = document.querySelectorAll('.playable');
var msg = document.querySelector('.msg');
var gameState = true;
var plays = 0;
var currentBox, winner;

activePlayer === 1 ? msg.innerHTML = '<span style="color: #3a7bcf;">〇</span> Turn' : msg.innerHTML = '<span style="color: #EB4D4D;">✖</span> Turn';

for (var i = 0; i < boxes.length; i++){ boxes[i].classList.add('player-' + activePlayer + '-turn'); };

document.querySelector('.board').addEventListener('click', () => {
    currentBox = document.querySelector('.box:hover');
    if (!currentBox.className.includes('playable') || !gameState) return;

    play(currentBox);
});

function play(box) {

    if (box.className.includes('player-1-turn')) box.textContent = '〇';
    else if (box.className.includes('player-0-turn')) box.textContent = '✖';
    
    box.classList.add('player-' + activePlayer);
    box.classList.remove('playable');

    for (var i = 0; i < boxes.length; i++){ boxes[i].classList.remove('player-' + activePlayer + '-turn'); };
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    for (var i = 0; i < boxes.length; i++){ boxes[i].classList.add('player-' + activePlayer + '-turn'); };

    activePlayer === 1 ? msg.innerHTML = '<span style="color: #3a7bcf;">〇</span> Turn' : msg.innerHTML = '<span style="color: #EB4D4D;">✖</span> Turn';

    plays += 1;
    checkWin();
};

function checkWin() {

    var box = document.querySelectorAll('.box');
    var line = document.querySelector('#line').style;

    if (areEqual(box[0].textContent, box[1].textContent, box[2].textContent)) {
        winner = box[0].textContent;
        line.top = '35%';
    } else if (areEqual(box[3].textContent, box[4].textContent, box[5].textContent)) {
        winner = box[3].textContent;
    } else if (areEqual(box[6].textContent, box[7].textContent, box[8].textContent)) {
        winner = box[6].textContent;
        line.top = '65%';
        
    } else if (areEqual(box[0].textContent, box[3].textContent, box[6].textContent)) {
        winner = box[0].textContent;
        line.transform = 'translate(-50%, 0%) rotate(90deg)'; line.left = '42%';
    } else if (areEqual(box[1].textContent, box[4].textContent, box[7].textContent)) {
        winner = box[1].textContent;
        line.transform = 'translate(-50%, 0%) rotate(90deg)';
    } else if (areEqual(box[2].textContent, box[5].textContent, box[8].textContent)) {
        winner = box[2].textContent;
        line.transform = 'translate(-50%, 0%) rotate(90deg)'; line.left = '57.9%'; 
 
    } else if (areEqual(box[0].textContent, box[4].textContent, box[8].textContent)) {
        winner = box[0].textContent;
        line.transform = 'translate(-50%, -50%) rotate(45deg)'; line.width = '60vh';
    } else if (areEqual(box[2].textContent, box[4].textContent, box[6].textContent)) {
        winner = box[2].textContent;
        line.transform = 'translate(-50%, -50%) rotate(-45deg)'; line.width = '60vh';
    } else if (plays >= 9) {
        winner = 'Draw';
    } else return;
    
    gameState = false;

    line.display = 'block';
    
    winner === 'Draw' ? msg.innerHTML = 'Draw!' : winner === '〇' ? msg.innerHTML = '<span style="color: #3a7bcf;">〇</span> Won!' : msg.innerHTML = '<span style="color: #EB4D4D;">✖</span> Won!';
    
    for (var i = 0; i < boxes.length; i++){ boxes[i].classList.remove('playable'); };
};

function areEqual() {

    var len = arguments.length;
    for (var i = 1; i< len; i++){
       if (arguments[i] === '' || arguments[i] === null || arguments[i] !== arguments[i-1])
          return false;
    };
    return true;
};