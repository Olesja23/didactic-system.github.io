const buttonEl = document.querySelector('.button');
const blockEl = document.querySelector('.visible');
const close__popap = document.querySelector('.close__modal')

buttonEl.addEventListener('click', function (e) {
    blockEl.classList.toggle('visible');
});

close__popap.addEventListener('click', function (e) {
    blockEl.classList.toggle('visible');
})