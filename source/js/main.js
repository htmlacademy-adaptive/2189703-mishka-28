let headerNav = document.querySelector(`.header-nav`)
let headerToggle = document.querySelector(`.header-nav__toogle`)

headerNav.classList.remove(`header-nav--nojs`)
headerNav.classList.add(`header-nav--closed`)
headerNav.classList.remove(`header-nav--opened`)

headerToggle.addEventListener(`click`, () => {
  headerNav.classList.toggle(`header-nav--closed`)
  headerNav.classList.toggle(`header-nav--opened`)
})
