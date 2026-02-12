// test
var bikePos = 99;
var bike = document.getElementById("biker")
setInterval(() => {
bikePos = bikePos - 0.01
bike.style.left = bikePos + "vw"
}, 1);