const $header = document.getElementById('topSection')
const $footer = document.getElementById('footer')

const plantillaFooter = (backURL,  carpetaURL_2, carpetaURL_1) =>{
  return `<div class="footer-div">
            <div class="grid-footer pt-3">

              <div class="logo-footer d-none d-md-block">
                <img class="d-none d-md-block" src="${backURL}src/img/logo de cit.png" alt="">
              </div>

              <div class="grid-footer-list">

                <!-- Links -->
                <h6 class="">Proyectos</h6>
                <hr>
                <ul>
                  <li>
                    <i class="fas fa-database"></i>
                    <a href="${carpetaURL_2}proyectos.html#sipi">SIPI</a>
                  </li>
                  <li>
                    <i class="fas fa-project-diagram"></i>
                    <a href="${carpetaURL_2}proyectos.html#fedeindustrias">FedeIndustrias</a>
                  </li>
                  <li>
                    <i class="fas fa-sitemap"></i>
                    <a href="${carpetaURL_2}proyectos.html#zayco"">Zayco</a>
                  </li>
                  <li>
                    <i class="fas fa-project-diagram"></i>
                    <a href="${carpetaURL_2}proyectos.html#valery">Valery</a>
                  </li>
                </ul>
              </div>

              <div class="grid-footer-list">

                <h6 class="">Contacto</h6>
                <hr>

                <ul>
                  <li>
                    <i class="fas fa-home"></i>
                    <span>Guacara, UNITEC</span>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <span>ommv.17@gmail.com</span>
                  </li>
                  <li>
                    <i class="fas fa-phone"></i>
                    <span>+58-414-413-2836</span>
                  </li>
                </ul>
              </div>

            </div>

            <!-- Copyright -->
            <div class="footer-copyright pl-4 py-3 unique-color-dark">
              <span>© 2020 Copyright:</span>
              <a href="#!"> cit-unitec.com</a>
            </div>
            <!-- Copyright -->
          </div>`
}
const plantillaNavBar = (backURL,  carpetaURL_2, carpetaURL_1) =>{
  return `<div>
            <nav id="navBar" class="navbar fixed-top navbar-expand-md navbar-dark scrolling-navbar transparente trans">
              <!-- Brand -->
              <a class="navbar-brand" href="${backURL}index.html">
                <img class="" width="80" src="${backURL}src/img/logo de cit.png" alt="logo de cit">
              </a>
              <div class="nav-elements">
                <!-- Left -->
                <ul class="navbar-nav" style="margin-bottom: -10px;">
                  
                  <li class="nav-item dropdown">
                    <a class="mx-sm-2 nav-item colorgris dropdown-toggle" href="#?">
                      <i class="fas fa-users bluetech"></i><span>Nosotros</span></a>
                    
                    <div class="dropdown-menu dropdown-primary">
                      <a class="dropdown-item" href="${carpetaURL_1}equipo.html">Lideres</a>
                      <a class="dropdown-item" href="${carpetaURL_1}programacion.html">Programacion</a>
                      <a class="dropdown-item" href="${carpetaURL_1}diseño.html">Diseño</a>
                      <a class="dropdown-item" href="${carpetaURL_1}automatizacion.html">Automatismo</a>
                      <a class="dropdown-item" href="${carpetaURL_1}documentacion.html">Documentación</a>
                      <a class="dropdown-item" href="${carpetaURL_1}galerias.html">Galeria</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="mx-sm-2 nav-item colorgris dropdown-toggle" href="#?">
                    <i class="fas fa-project-diagram bluetech"></i><span>Proyectos</span></a>
                    
                    <div class="dropdown-menu dropdown-primary">
                      <a class="dropdown-item" href="${carpetaURL_2}proyectos.html#sipi">SIPI</a>
                      <a class="dropdown-item" href="${carpetaURL_2}proyectos.html#fedeindustrias">FedeIndustrias</a>
                      <a class="dropdown-item" href="${carpetaURL_2}proyectos.html#zayco">Zayco</a>
                      <a class="dropdown-item" href="${carpetaURL_2}proyectos.html#valery">Valery</a>
                    </div>
                  </li>
                  <li>
                    <a class="mx-sm-2 nav-item colorgris" href="${backURL}servicios.html"><i class="fas fa-handshake bluetech"></i><span>Servicios</span></a>
                  </li>
                  <li>
                    <a class="mx-sm-2 nav-item colorgris" href="${backURL}contacto.html"><i class="fas fa-phone bluetech"></i><span>Contacto</span></a>
                  </li>
              
                </ul>
                
                <!-- Redes Sociales, No se Colapsa  -->
                <ul class="navbar-nav" style="margin-bottom: -10px;">
                  <li>
                    <a href="https://www.instagram.com/citunitec/" target="_blank" class="mx-md-3"><i class="fab fa-instagram colorgris bluetech"></i></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/CitUnitec2015" target="_blank" class="mx-md-3"><i class="fab fa-twitter colorgris bluetech"></i></a>
                  </li>
                </ul>
              </div>  
            </nav>

            <div id="cover" class="container-fluid">
              
              <div class="cover-container">
                <div>
                  <img src="${backURL}src/img/logo de cit.png" class="img-fluid" alt="logocit">
                </div>
              </div>

              <div id="particles-js"></div>
            </div>
          </div> `
}

function elegirAsignar (header, plantilla){
  let carpetaURL_1
  let carpetaURL_2
  let backURL

  if (header.classList == 'index') {
    carpetaURL_1 = "nosotros/"
    carpetaURL_2 = "proyectos/"
    backURL= ""

  } else if (header.classList == 'Nosotros') {
    carpetaURL_1 = ""
    carpetaURL_2 = "../proyectos/"
    backURL= "../"

  } else if (header.classList == 'Proyectos') {
    carpetaURL_1 = "../nosotros/"
    carpetaURL_2 = ""
    backURL= "../"

  }
  
  return plantilla(backURL,  carpetaURL_2, carpetaURL_1)
}

const crearNavBar = (header, footer) => {

  let html = document.implementation.createHTMLDocument()

  html.body.innerHTML = elegirAsignar(header, plantillaNavBar)
  header.append(html.body.children[0])

  html.body.innerHTML = elegirAsignar(header, plantillaFooter)
  footer.append(html.body.children[0])
}
crearNavBar($header, $footer)

