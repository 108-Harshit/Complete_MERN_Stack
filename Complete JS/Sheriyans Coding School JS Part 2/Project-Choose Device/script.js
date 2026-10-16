let select = document.querySelector("select");
let device = document.querySelector("#device");

select.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} Device Selected`
})