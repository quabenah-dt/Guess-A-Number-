document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.js-button');
    const board = document.querySelector('.board');
    const logoContainer = document.querySelector('.logo-container');

    if (button) {
        button.addEventListener('click', () => {
            board.classList.remove('hidden');
            logoContainer.classList.add('hidden');
            console.log('button clicked');
        });
    } else {
        console.log('button not found');
    }
});
