function toggleMode() {
    const html = document.documentElement
     html.classList.toggle(`light`)
    
         /*pegar a tag img*/
         const img = document.querySelector("#profile img")
        
        
         /*substituir a imagem*/
     if (html.classList.contains(`light`)){
        /*se estiver light mode, adicionar a imagem light*/
         img.setAttribute(`src`, "./assets/light.png")
     } else{
        /*se estiver sem light mode, manter a imagem normal*/
        img.setAttribute(`src`, "./assets/normal.png")  
     }

     if (html.classList.contains('light')) {
      img.setAttribute(`alt`, "Enzo com roupas pretas")
   } else {
      img.setAttribute(`alt`, "Enzo com roupas claras")
   }
}







