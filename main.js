

const button = document.querySelector('.js-button');
const board = document.querySelector('.board');
const logoContainer = document.querySelector('.logo-container');

button.addEventListener('click', () => {
    logoContainer.classList.add('hidden'); // Hide the logo container
    board.classList.remove('hidden'); // Show the board
    console.log('Play Game button clicked');
});
