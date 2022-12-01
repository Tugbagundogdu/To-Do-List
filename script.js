let add = document.getElementById("ekleToDo");
let eklencekParagraf = document.getElementById("eklenecekler");
let Text = document.getElementById("textToDo");
let clear = document.getElementById("silToDo");
add.addEventListener("click", function(){

    let paragraf = document.createElement("p");
    paragraf.classList.add("paragrafStili");
    eklencekParagraf.appendChild(paragraf);
    paragraf.innerHTML = Text.value;
    Text.value = "";

    paragraf.addEventListener("click", function(){
        paragraf.style.textDecoration = "line-through";

    });

    paragraf.addEventListener("dblclick", function(){
        eklencekParagraf.removeChild(paragraf);
    })  ;

    clear.addEventListener("click", function(){

        paragraf.remove();
    
    });
    


})

