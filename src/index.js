import './style.css';

const pictures = document.querySelectorAll('.pic');

const toggleOpen = (e) => {
  e.target.parentElement.classList.toggle('open');
};

pictures.forEach((picture) => picture.addEventListener('click', toggleOpen));