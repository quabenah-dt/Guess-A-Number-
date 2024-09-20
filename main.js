const button = document.querySelector('.js-button');
const board = document.querySelector('.board');
const details = document.querySelector('.details');
const guess = document.querySelector('.guess');
const detailsButton = document.querySelector('.details-button');
const guessButton = document.querySelector('.guess-button');
const detailsInput = document.querySelector('.details-input');
const guessInput = document.querySelector('.guess-input');
const logoContainer = document.querySelector('.logo-container');



if (button) {
    button.addEventListener('click', () => {
        board.classList.remove('hidden');
        logoContainer.classList.add('hidden');
        console.log('button clicked');
    });
} else {
    console.log('not hidden');
}

