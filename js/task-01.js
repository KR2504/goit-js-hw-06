const categories = document.querySelector('#categories');

const itemCategories = categories.children;
console.log(`Number of categories: ${itemCategories.length}`)

// Animals
const titleAnimals = document.querySelector('h2')
console.log(`Category: ${titleAnimals.textContent}`)

const listAnimals = titleAnimals.nextElementSibling;

const itemAnimals = listAnimals.children;
console.log(`Elements: ${itemAnimals.length}`)

// Products
const titleProducts = itemCategories[1].firstElementChild;
console.log(`Category: ${titleProducts.textContent}`)

const listProducts = titleProducts.nextElementSibling;

const itemProducts = listProducts.children;
console.log(`Elements: ${itemProducts.length}`)

// Technologies

const lastCategoryItem = categories.lastElementChild;

const titleTechnologies = lastCategoryItem.firstElementChild;
console.log(`Category: ${titleTechnologies.textContent}`)

const listTechnologies = titleTechnologies.nextElementSibling;

const itemTechnologies = listTechnologies.children;
console.log(`Elements: ${itemTechnologies.length}`)