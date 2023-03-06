// console.log("Hello, world!");


// let table = document.querySelector(".table");

// console.log(table);

// let links = document.querySelectorAll("a");

// console.log(links);

// links.forEach(function(link){
//     console.log(link.href);
// });


// let celda = document.querySelectorAll("td");

// celda.forEach(function(td){
//     td.addEventListener("click", function(){
//         console.log(this);
//     })
// })



//Obtener elementos del dom
let links = document.querySelectorAll(".close");

//Recorrer los elementos

links.forEach(function(link){
    link.addEventListener("click", function(ev){
        //previene el comportamiento por defecto
        ev.preventDefault();

        //quitar animaciones de entrada
        let content = document.querySelector(".content");

        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");

        //agregar animaciones de salida
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        //agrega un timer de 600ms para mostrar las animaciones
        //luego redirecciona con js a raiz
        setTimeout(() => {
           location.href = "/boletines";
        }, 600);
    });
});

let links_more = document.querySelectorAll(".link_more");
links_more.forEach(function(link){
    link.addEventListener("click", function(ev){

        ev.preventDefault();

        //quitar animaciones de entrada
        let content = document.querySelector(".content");

        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");

        //agregar animaciones de salida
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        //agrega un timer de 600ms para mostrar las animaciones
        //luego redirecciona con js a raiz
        setTimeout(() => {
            location.href = link.href;
        }, 600);
    });
});
