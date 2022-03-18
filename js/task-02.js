const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const getListIngredients = document.querySelector('#ingredients');

const setListIngredients = ingredients.map(ingredient => {
    const addIngredientsEl = document.createElement('li');
    addIngredientsEl.textContent = ingredient;
    addIngredientsEl.classList.add('item');
    return addIngredientsEl;
})
console.log(setListIngredients);

getListIngredients.append(...setListIngredients);