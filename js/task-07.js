const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}
refs.span.style.fontSize = refs.input.value + 'px';

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    return refs.span.style.fontSize = event.currentTarget.value + 'px';
}