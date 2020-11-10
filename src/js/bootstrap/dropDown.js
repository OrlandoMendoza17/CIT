const $dropdowns = document.querySelectorAll('.dropdown')
const $main = document.getElementById('main')

const abrirCerrarDropDown = (dropdown) =>{

  if (dropdown.style.display == "") {
    dropdown.style.display = "block"

  } else if(dropdown.style.display == "none"){
    dropdown.style.display = "block"

  }else if(dropdown.style.display == "block"){
    dropdown.style.display = "none"

  }
  return dropdown

}
const botonesDropDown = () =>{
  for (let i = 0; i < $dropdowns.length; i++) {
  
    let $drop = $dropdowns[i].children[1];
    
    $dropdowns[i].children[0].addEventListener('click', () =>{
      
      abrirCerrarDropDown($drop)

      //Es si ciclo cierra el dropdown que está abierto cuando se abre otro
      for (let i2 = 0; i2 < $dropdowns.length; i2++) {

        if ($dropdowns[i2].children[1].style.display == "block" && i2 != i){
          $dropdowns[i2].children[1].style.display = "none";
        }
      }

    })
    
  }
  // se cierra el dropdown que está abierto cuando se toca la pantalla
  $main.addEventListener('click', () =>{
    
    for (let i = 0; i < $dropdowns.length; i++) {
      
      let $drop = $dropdowns[i].children[1];

      if($drop.style.display == "block"){
        $drop.style.display = "none"
  
      } else {
        
      }
    }
  })
}
botonesDropDown()



