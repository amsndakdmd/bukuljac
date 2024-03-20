const hamburgerMenu = document.getElementById('hamburgerMenu')
const closeMenu = document.getElementById('closeMenu')
const sideBar = document.getElementById('sideBar')
const overlay = document.getElementById('overlay')
const sideBarLinks = document.querySelectorAll('.sidebar__link')

const openingMenu = () => {
  sideBar.classList.remove('close')
  document.body.classList.add('noscroll')
  sideBar.classList.add('open')
  overlay.classList.remove('invisible')
  overlay.classList.add('visible')
}

const closingMenu = () => {
  sideBar.classList.remove('open')
  document.body.classList.remove('noscroll')
  sideBar.classList.add('close')
  overlay.classList.remove('visible')
  overlay.classList.add('invisible')
}

document.getElementById('year').innerHTML = new Date().getFullYear()

hamburgerMenu.addEventListener('click', openingMenu)
closeMenu.addEventListener('click', closingMenu)
overlay.addEventListener('click', closingMenu)
sideBarLinks.forEach((sideBarLink) => {
  sideBarLink.addEventListener('click', closingMenu)
})

var swiper = new Swiper('.mySwiper', {
  grabCursor: true,
  loop: true,
  spaceBetween: 16,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})
