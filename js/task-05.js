const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    return event.currentTarget.value != '' ? refs.span.textContent = event.currentTarget.value : refs.span.textContent = 'Anonymous';
}