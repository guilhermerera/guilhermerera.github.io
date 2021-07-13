let btn1 = document.getElementsByClassName("btn")[0]
let btn2 = document.getElementsByClassName("btn")[1]
let btn3 = document.getElementsByClassName("btn")[2]

btn1.addEventListener("mouseover", function(){
    btn1.setAttribute("style", "background-color: rgba(0, 0, 0, 0); color: hsl(0, 0%, 95%)")
})

btn2.addEventListener("mouseover", function(){
    btn2.setAttribute("style", "background-color: rgba(0, 0, 0, 0); color: hsl(0, 0%, 95%)")
})

btn3.addEventListener("mouseover", function(){
    btn3.setAttribute("style", "background-color: rgba(0, 0, 0, 0); color: hsl(0, 0%, 95%)")
})

btn1.addEventListener("mouseout", function(){
    btn1.setAttribute("style", "background-color: hsl(0, 0%, 95%); color: hsl(31, 77%, 52%)")
})

btn2.addEventListener("mouseout", function(){
    btn2.setAttribute("style", "background-color: hsl(0, 0%, 95%); color: hsl(184, 100%, 22%)")
})

btn3.addEventListener("mouseout", function(){
    btn3.setAttribute("style", "background-color: hsl(0, 0%, 95%); color: hsl(179, 100%, 13%)")
})