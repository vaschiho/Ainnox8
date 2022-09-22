

 
document.getElementById('category_menu').addEventListener("click", toggleMenu);
let options = document.getElementsByClassName("options");

let arrowIcon = document.getElementById("arrowIcon");

let body = document.querySelectorAll("body")


 
for (option of options) {
   
    option.onclick = function(){
        subMenu.classList.toggle('open_menu')
        
        arrowIcon.classList.toggle('rotate')
    }
}

const subMenu = document.getElementById('subMenu');

      function toggleMenu(){
          subMenu.classList.toggle('open_menu')
          arrowIcon.classList.toggle('rotate')
}


 

