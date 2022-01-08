
const main = document.querySelector('main')
const menuButton = document.querySelector('#menu')
const siteNav = document.querySelector('#site-navigation')

console.log(main)
console.log(siteNav)

const handleMenuButton = () => {
  main.classList.toggle('menu-open')
  siteNav.classList.toggle('menu-open')
  siteNav.classList.toggle('open')
  if(siteNav.classList.contains('open')){
    menuButton.innerHTML = 'Close'
  } else {
    menuButton.innerHTML = 'Menu'
  }
  
}


document.addEventListener('click', handleMenuButton)