
const siteNavigation = document.querySelector('#site-navigation')
const menuButton = document.querySelector('#menu')

const handleWindowWidth = () => {
  console.log('width', window.innerWidth)
  siteNavigation.classList.remove('mobile')
  if(window.innerWidth < 600){
    siteNavigation.classList.add('mobile')
    menuButton.style.display = 'block'
  }
}

handleWindowWidth()

window.addEventListener('resize', handleWindowWidth)