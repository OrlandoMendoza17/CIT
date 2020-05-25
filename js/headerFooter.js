const $header = document.getElementById('topSection')

function navBar (header){
var carpetaURL_1
var carpetaURL_2
var imgURL

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
return `
        <div>
          <nav class="navbar fixed-top navbar-expand-md navbar-dark scrolling-navbar transparente trans">
            <!-- Brand -->
            <a class="navbar-brand" href="${backURL}index.html">
              <img class="" width="80" src="${backURL}img/logo de cit.png" alt="logo de cit">
            </a>
            <div class="nav-elements">
              <!-- Left -->
              <ul class="navbar-nav" style="margin-bottom: -10px;">
                
                <li class="nav-item dropdown">
                  <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris dropdown-toggle" href="#?">
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
                  <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris dropdown-toggle" href="#?">
                  <i class="fas fa-project-diagram bluetech"></i><span>Proyectos</span></a>
                  
                  <div class="dropdown-menu dropdown-primary">
                    <a class="dropdown-item" href="${carpetaURL_2}sipi.html">SIPI</a>
                    <a class="dropdown-item" href="${carpetaURL_2}fedeindustrias.html">FedeIndustrias</a>
                    <a class="dropdown-item" href="${carpetaURL_2}zayco.html">Zayco</a>
                    <a class="dropdown-item" href="${carpetaURL_2}valery.html">Valery</a>
                  </div>
                </li>
                <li>
                  <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris" href="#?"><i class="fas fa-handshake bluetech"></i><span>Servicios</span></a>
                </li>
                <li>
                  <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris" href="#?"><i class="fas fa-phone bluetech"></i><span>Contacto</span></a>
                </li>
            
              </ul>
              
              <!-- Redes Sociales, No se Colapsa  -->
              <ul class="navbar-nav" style="margin-bottom: -10px;">
                <li>
                  <a href="#?" class="mx-md-3"><i class="fab fa-facebook-f colorgris bluetech"></i></a>
                </li>
                <li>
                  <a href="#?" class="mx-md-3"><i class="fab fa-twitter colorgris bluetech"></i></a>
                </li>
              </ul>
            </div>  
          </nav>

          <div id="cover" class="container-fluid">
            
            <div class="cover-container">
              <div>
                <img src="${backURL}img/logo de cit.png" class="img-fluid" alt="logocit">
              </div>
            </div>

            <div id="particles-js"></div>
          </div>
        </div> `
}
function crearNavBar (header){

const html = document.implementation.createHTMLDocument()

html.body.innerHTML = navBar(header)
header.append(html.body.children[0])

}
crearNavBar($header)

