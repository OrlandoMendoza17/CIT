// GetToTopBtn
$(function() {
  
  var $btn = $('#btnTop');
  var $home = $('#topSection');
  var startpoint = $home.scrollTop() + $home.height();
  
  $(window).on('scroll', function() {
    if($(window).scrollTop() > startpoint) {
      $btn.show();
    } else {
      $btn.hide();
    }
  });
});
// GetToTopBtn

// js scrolling animation initialize
$( document ).ready(function() {
  new WOW().init();
});
// js scrolling animation initialize

// Tooltips Initialization
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//MY OWN JAVASCRIPT CODE

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
              <div class="container-fluid">

                <!-- Brand -->
                <a class="navbar-brand" href="${backURL}index.html">
                  <img class="img-fluid" width="80" src="${backURL}img/logo de cit.png" alt="logo de cit">
                </a>

                <!-- Links -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                  <!-- Left -->
                  <ul class="navbar-nav" style="margin-bottom: -10px;">
                    
                      <li class="nav-item dropdown">
                        <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" href="#">
                          <i class="fas fa-users bluetech"></i> Nosotros</a>
                        
                        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink-333">
                          <a class="dropdown-item" href="${carpetaURL_1}equipo.html">Lideres</a>
                          <a class="dropdown-item" href="${carpetaURL_1}programacion.html">Programacion</a>
                          <a class="dropdown-item" href="${carpetaURL_1}diseño.html">Diseño</a>
                          <a class="dropdown-item" href="${carpetaURL_1}automatizacion.html">Automatismo</a>
                          <a class="dropdown-item" href="${carpetaURL_1}documentacion.html">Documentación</a>
                          <a class="dropdown-item" href="${carpetaURL_1}galerias.html">Galeria</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" href="#">
                        <i class="fas fa-project-diagram bluetech"></i> Proyectos</a>
                        
                        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink-333">
                          <a class="dropdown-item" href="${carpetaURL_2}sipi.html">SIPI</a>
                          <a class="dropdown-item" href="${carpetaURL_2}fedeindustrias.html">FedeIndustrias</a>
                          <a class="dropdown-item" href="${carpetaURL_2}zayco.html">Zayco</a>
                          <a class="dropdown-item" href="${carpetaURL_2}valery.html">Valery</a>
                        </div>
                      </li>
                      <li>
                        <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris" href="#?"><i class="fas fa-handshake bluetech"></i> Servicios</a>
                      </li>
                      <li>
                        <a class="mx-sm-2 mx-md-2 mx-lg-4 nav-item colorgris" href="#?"><i class="fas fa-phone bluetech"></i> Contacto</a>
                      </li>
                
                  </ul>

                </div>
                
                <!-- Redes Sociales, No se Colapsa  -->
                <div class=" nav-flex-icons col">
                  <ul class="navbar-nav  d-flex flex-row justify-content-center" style="margin-bottom: -10px;">
                    <li>
                      <a href="#?" class="mx-2 mx-sm-2 mx-md-3"><i class="fab fa-facebook-f colorgris bluetech"></i></a>
                    </li>
                    <li>
                      <a href="#?" class="mx-2 mx-sm-2 mx-md-3"><i class="fab fa-twitter colorgris bluetech"></i></a>
                    </li>
                  </ul>
                </div>

                <!-- Collapse -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>

            <div id="cover" class="container-fluid d-flex align-items-center justify-content-center">
              
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
  //  console.log(html.body.innerHTML)
  header.append(html.body.children[0])
  console.log(header.innerHTML)
 }
 crearNavBar($header)
