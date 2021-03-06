const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};


refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.span.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        refs.span.textContent = 'Anonymous'
    }
}

// function onInputChange(event) {
//     event.currentTarget.value === '' ? refs.span.textContent = 'Anonymous' : refs.span.textContent = event.currentTarget.value;
// }