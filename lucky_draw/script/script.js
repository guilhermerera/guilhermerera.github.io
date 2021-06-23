let input = document.getElementById("roll")
let bD = document.getElementById("btnDraw")
let d = document.getElementById("d")

function raffle(){
    return Math.ceil(Math.random() * input.value)
}

function printinscreen(){
    d.innerHTML = raffle()
}

bD.addEventListener('click', function(){
    if (input.value ==""){
        alert("Insira Um Número")
    } else {
        bD.innerHTML = "Re Roll"
        printinscreen()
    }
})