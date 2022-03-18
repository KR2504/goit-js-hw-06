const refOnInput = document.querySelector('input[data-length="6"]')

refOnInput.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    return event.currentTarget.value.length > refOnInput.dataset.length ? refOnInput.classList.add('valid') : refOnInput.classList.add('invalid');
}