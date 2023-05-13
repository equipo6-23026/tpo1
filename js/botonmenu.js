function menuAbreCierra() {
    var menu=document.getElementById("contenedor-enlaces");
    if ((menu.style.display == "none") || (!menu.style.display)){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function menu2AbreCierra(){
    var menu=document.getElementById("contenedor-enlaces");
    if((menu.style.display == "none") || (!menu.style.display)){
        menu.style.display = "block";
        


        document.getElementsByClassName("bar1")[0].setAttribute("transform","translateX(-40px)");

        console.log(document.getElementsByClassName("bar1")[0].getAttribute("transform"));

        document.getElementsByClassName("bar1")[0].setAttribute("background-color","transparent");
        document.getElementsByClassName("bar2")[0].setAttribute("transform","rotate(45deg)");
        document.getElementsByClassName("bar3")[0].setAttribute("transform","translateX(40px)");
        document.getElementsByClassName("bar3")[0].setAttribute("background-color","transparent");
        

    } else {
        menu.style.display = "none";
    }
}