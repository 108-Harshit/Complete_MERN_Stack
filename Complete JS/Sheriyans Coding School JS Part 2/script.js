let h1 = document.querySelector("h1");
h1.addEventListener("click" , function(){
    h1.style.color="green";
})

h1.addEventListener("dblclick" , function(){
    h1.style.color="yellow";
})

let input = document.querySelector("input");
input.addEventListener("input" , function(dets){
    if(dets.data !== null)
        console.log(dets.data);
})