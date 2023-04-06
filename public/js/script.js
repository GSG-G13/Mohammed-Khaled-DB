fetch('/products-data')
  .then(result => result.json())
  // eslint-disable-next-line no-undef
  .then(result => createDom(result))
