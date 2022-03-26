const categories = document.querySelectorAll('.item');


console.log(`Number of categories: ${categories.length}`)

categories.forEach(category => {
    const categoryEl = category.querySelectorAll('li')

    console.log(`Category: ${category.firstElementChild.textContent}\nElements: ${categoryEl.length}`)
})