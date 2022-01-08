
const main = document.querySelector('main')
const menuButton = document.querySelector('#menu')
const siteNav = document.querySelector('#site-navigation')

console.log(main)
console.log(siteNav)

const handleMenuButton = () => {
  main.classList.add('menu-open')
  siteNav.classList.add('menu-open')
}

document.addEventListener('click', handleMenuButton)