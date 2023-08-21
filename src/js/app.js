const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  text.classList.toggle('active');
});
