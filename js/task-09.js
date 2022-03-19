const refs = {
    btn: document.querySelector('.change-color'),
    span: document.querySelector('.color'),
    body: document.querySelector('body', )
}
refs.btn.addEventListener('click', getRandomHexColor);
refs.btn.addEventListener('click', onChangeSpanText);

function getRandomHexColor() {
    return refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
      .padStart(6, 0)}`;
}

function onChangeSpanText() {
    return refs.span.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function getRandomHexColor() {
//     let changeColor = refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//       .padStart(6, 0)}`;
//     refs.span.textContent = changeColor

//     return changeColor;
// }