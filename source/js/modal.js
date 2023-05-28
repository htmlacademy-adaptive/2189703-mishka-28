const modal = document.querySelector(`.modal`)
const productButton = document.querySelector(`.product__button`)
const buyButtons = document.querySelectorAll(`.buy__button`)

if (productButton) {
  productButton.addEventListener(`click`, (event) => {
    event.preventDefault()
    modal.showModal()
  })
}

if (buyButtons) {
  buyButtons.forEach((element) => {
    element.addEventListener(`click`, (event) => {
      event.preventDefault()
      modal.showModal()
    })
  })
}

modal.addEventListener(`pointerdown`, (event) => {
  event.preventDefault()
  const modalDimensions = modal.getBoundingClientRect()
  if (
    event.clientX < modalDimensions.left ||
    event.clientX > modalDimensions.right ||
    event.clientY < modalDimensions.top ||
    event.clientY > modalDimensions.bottom
  ) {
    modal.close()
  }
})
