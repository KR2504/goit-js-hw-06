const refOnInput = document.querySelector('input[data-length="6"]')

refOnInput.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    refOnInput.classList.add('invalid');
    if (event.currentTarget.value.length === Number(refOnInput.dataset.length)) {

        refOnInput.classList.replace('invalid', 'valid')
    } else refOnInput.classList.replace('valid', 'invalid')
}


// event.currentTarget.value.length !== Number(refOnInput.dataset.length) ? refOnInput.classList.add('invalid') : refOnInput.classList.replace('invalid', 'valid');