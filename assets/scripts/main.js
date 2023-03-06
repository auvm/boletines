// console.log("Hello, world!");


// let table = document.querySelector(".table");

// console.log(table);

// let links = document.querySelectorAll("a");

// console.log(links);

// links.forEach(function(link){
//     console.log(link.href);
// });


let celda = document.querySelectorAll("td");

celda.forEach(function(td){
    td.addEventListener("click", function(){
        console.log(this);
    })
})