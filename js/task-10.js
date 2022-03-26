function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    input: document.querySelector('input'),
    btnCreate: document.querySelector('[data-create]'),
    btnDestroy: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
}

refs.boxes.style.display = 'flex';
refs.boxes.style.flexWrap = 'wrap';

function createBoxes() {
    const array = [];
    for (let i = 1; i <= Number(refs.input.value); i += 1) {
        array.push(`<div style = "background-color:${getRandomHexColor()}; width:${20 + i * 10}px; height:${20 + i * 10}px"></div>`)
    }
    refs.boxes.insertAdjacentHTML('afterbegin', array.join(''));
}

refs.btnCreate.addEventListener("click", () => {
    createBoxes(refs.input.value);
    refs.btnCreate.disabled = true;
    refs.input.value = '';
});

refs.btnDestroy.addEventListener("click", () => {
    refs.boxes.textContent = '';
    refs.btnCreate.disabled = false;
});