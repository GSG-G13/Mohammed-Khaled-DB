const container = document.querySelector('.container')
const createElement = (element, className) => {
  const ele = document.createElement(element)
  ele.className = className
  return ele
}
// eslint-disable-next-line no-unused-vars
const createDom = (response) => {
  response.forEach((element) => {
    const createProductDiv = createElement('div', 'product')
    const createProductImg = createElement('img', 'product-img')
    createProductImg.src = element.image
    const createProductName = createElement('h2', 'product-name')
    createProductName.textContent = element.name
    const createProductCategory = createElement('span', 'product-category')
    createProductCategory.textContent = element.category
    const createProductPrice = createElement('p', 'product-price')
    createProductPrice.textContent = `$${element.price}`
    const createProductDescription = createElement('p', 'product-description')
    createProductDescription.textContent = element.description
    createProductDiv.append(createProductImg, createProductName, createProductCategory, createProductPrice, createProductDescription)
    container.append(createProductDiv)
  })
}
