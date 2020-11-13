const navBar = document.getElementById('navBar')
window.addEventListener('scroll', () => {
  if(window.pageYOffset === 0){
    // console.log('Estás en el Top')
    navBar.classList.remove('top-nav-collapse')
  }else{
    // console.log('No estás en el Top')
    navBar.classList.add('top-nav-collapse')
  }
})