const refs = {
    btn: document.querySelector('.change-color'),
    span: document.querySelector('.color'),
    body: document.querySelector('body', )
}


refs.btn.addEventListener('click', onChangeColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.span.textContent = getRandomHexColor();
}