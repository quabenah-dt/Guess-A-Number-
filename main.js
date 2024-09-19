const button = document.querySelector('.js-button');

if (button) {
    button.addEventListener('click', () => {
        prompt('Button clicked');
    });
} else {
    console.error('Button with class .js-button not found');
}

// document.querySelector('.js-button').addEventListener('click', () => {
//     console.log('button clicked');
// });