import './style.css';

const pictures = document.querySelectorAll('.pic');
const quotes = document.querySelectorAll('p');

const toggleOpen = (e) => {
  e.target.classList.toggle('open');
};
const toggleActive = (e) => {
  if (e.propertyName === 'flex-grow') {
    e.target.parentElement.classList.toggle('open-active');
  }
};

pictures.forEach((picture) => picture.addEventListener('click', toggleOpen));
quotes.forEach((quote) => quote.addEventListener('transitionend', toggleActive));