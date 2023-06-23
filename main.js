console.clear();
console.log('sup');

const formDOM = document.querySelector('form');
const inputDOM = document.querySelector('input');
let winDOM = document.querySelector('div');

formDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    let string = inputDOM.value.toLocaleLowerCase();
    game(string);
});

function game(string) {
    let winornot = '';
    let skaicius = Math.floor(Math.random() * 3) + 1;
    //console.log(skaicius);

    if (string === 'zirkles') {
        if (skaicius === 1) {
            winornot = 'Tie';
        } else if (skaicius === 2) {
            winornot = 'Computer win';
        } else {
            winornot = 'You win';
        }
    } else if (string === 'akmuo') {
        if (skaicius === 2) {
            winornot = 'Tie';
        } else if (skaicius === 3) {
            winornot = 'Computer win';
        } else {
            winornot = 'You win';
        }
    } else if (string === 'popierius') {
        if (skaicius === 3) {
            winornot = 'Tie';
        } else if (skaicius === 1) {
            winornot = 'Computer win';
        } else {
            winornot = 'You win';
        }
    } else {
        winornot = 'Invalid input';
    }

    winDOM.innerHTML = winornot;
}

game();
