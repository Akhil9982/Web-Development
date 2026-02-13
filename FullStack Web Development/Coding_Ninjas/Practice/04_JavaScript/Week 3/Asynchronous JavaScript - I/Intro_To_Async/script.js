// console.log('Message Before Alert');

// alert('blocking JS');

// console.log('Message After Alert');

const buttonElement = document.querySelector('.button');

const textElement = document.querySelector('#text');

buttonElement.addEventListener('click', () => {
    textElement.textContent = 'Button is pressed';

    setTimeout(() => {
        textElement.textContent = '';
    },1000)
});