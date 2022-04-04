const geo = document.getElementById("geo");
const avto = document.getElementById("avto");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (geo.classList != "jump") {
        geo.classList.add("jump")
    }
    setTimeout( function(){
        geo.classList.remove("jump")
    }, 1100)
    geo.classList.add("jump")
}

let isAlive = setInterval ( function() {
   let geoTop = parseInt(window.getComputedStyle(geo).getPropertyValue("top"));
   let avtoLeft = parseInt(window.getComputedStyle(avto).getPropertyValue("left"));

   if(avtoLeft < 260 && avtoLeft > -30 && geoTop <= 280) {
       alert("GAME OVER - ТЫ НЕ ВЫЖИЛ НА АЭРОДРОМЕ")
   }
}, 10);
