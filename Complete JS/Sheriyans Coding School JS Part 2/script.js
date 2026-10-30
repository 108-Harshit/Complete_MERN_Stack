// let h1 = document.querySelector("h1");
// h1.addEventListener("click" , function(){
//     h1.style.color="green";
// })

// h1.addEventListener("dblclick" , function(){
//     h1.style.color="yellow";
// })

// let input = document.querySelector("input");
// input.addEventListener("input" , function(dets){
//     if(dets.data !== null)
//         console.log(dets.data);
// })

// let main = document.querySelector(".main");

//  main.addEventListener("mouseover", function(){
//     main.style.backgroundColor = "yellow";
// })

// main.addEventListener("mouseout", function(){
//     main.style.backgroundColor = "orange";
// })

//  window.addEventListener("mousemove", function(dets){
//      main.style.top = dets.clientY + "px";
//      main.style.left = dets.clientX + "px";
//  })

// document.querySelector(".nav").addEventListener("click", function(dets){
//     alert("Clicked");
// })

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dets){
//     dets.target.style.textDecoration = "line-through";
// })
let form = document.querySelector("form");
let nam = document.querySelector(".nam");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    if(nam.value.length <= 2){
        document.querySelector(".hide").style.display = "initial";
    }else{
        document.querySelector(".hide").style.display = "none";
    }
})