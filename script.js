let score = 0;
let circle = document.getElementById('circle');
let scoreDisplay = document.getElementById('score-display');

function getRandomPosition() {
    let x = Math.floor(Math.random()* 250);
    let y= Math.floor(Math.random()* 250)
    return { x,y };
}

function moveCircle() {
 let position = getRandomPosition();
 circle.style.top = position.y + 'px';
 circle.style.left = posiyion.x + 'px';
 circle.style.display = 'block';

}

circle.addEventListener('click', function () {
 alert('You Won!');
 score++;
 scoreDisplay.textContent = 'Score:' + score;
circle.style.display = 'none';

});

setInterval(moveCircle, 1000);