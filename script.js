// test
var bikePos = 98;
var bike = document.getElementById("biker")
var biketurn = false
setInterval(() => {
if(bike.style.left == "1vw"){
    biketurn = true
    bike.classList.add('bikeflipped')
    bike.classList.remove('bike')
}
if(bike.style.left == "98vw"){
    biketurn = false
    bike.classList.remove('bikeflipped')
    bike.classList.add('bike')
}
if(biketurn==true){bikePos = bikePos + 0.05}
else{bikePos = bikePos - 0.05}

bike.style.left = bikePos + "vw"
}, 0.5);


function keycheck(event){
let key = event.key
if(key == 'e' || key == 'E'){
     var pht = document.getElementById('pht')

     pht.classList.remove('placeholdertext')
     pht.classList.add('none')
}
}
console.log("Press E to remove placeholder text")