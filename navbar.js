function menuShow() {
  let mobileMenu = document.querySelector('.mobile-menu')
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open')
    document.querySelector('.icon').src = "img/open-menu.svg" 
  } else {
    mobileMenu.classList.add('open')
  document.querySelector('.icon').src = "img/close-menu.svg" 
  }
}
 