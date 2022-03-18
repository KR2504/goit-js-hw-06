const categories = document.querySelector('#categories');

const getCategoriesChildren = categories.children;
console.log(`Number of categories: ${getCategoriesChildren.length}`)

// Animals
const getTitleAnimals = document.querySelector('h2')
console.log(`Category: ${getTitleAnimals.textContent}`)

const getListAnimals = getTitleAnimals.nextElementSibling;

const getAnimalsEl = getListAnimals.children;
console.log(`Elements: ${getAnimalsEl.length}`)

// Products
const getTitleProducts = getCategoriesChildren[1].firstElementChild;
console.log(`Category: ${getTitleProducts.textContent}`)

const getListProducts = getTitleProducts.nextElementSibling;

const getProductsEl = getListProducts.children;
console.log(`Elements: ${getProductsEl.length}`)

// Technologies

const getLastItemOfCategory = categories.lastElementChild;

const getTitleTechnologies = getLastItemOfCategory.firstElementChild;
console.log(`Category: ${getTitleTechnologies.textContent}`)

const getListTechnologies = getTitleTechnologies.nextElementSibling;

const getTechnologiesEl = getListTechnologies.children;
console.log(`Elements: ${getTechnologiesEl.length}`)