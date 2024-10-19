console.log("a")
let sum_cnt = 0
let cnt =0;
function plus(){
    cnt = cnt + 1
    sum_cnt = sum_cnt + 1
    console.log(cnt)
    console.log(sum_cnt)
    document.getElementById("cnt").innerHTML=cnt
    document.getElementById("sum_cnt").innerHTML=sum_cnt
}


window.addEventListener("load",function(){
    const plusbutton = document.getElementById("plusbutton")
console.log(plusbutton)
plusbutton.addEventListener("click",plus)
})

let minus_cnt = 0
function minus(){
    minus_cnt = minus_cnt - 1
    console.log(minus_cnt)
    sum_cnt = sum_cnt - 1
    console.log(sum_cnt)
    document.getElementById("minus_cnt").innerHTML=minus_cnt
    document.getElementById("sum_cnt").innerHTML=sum_cnt
}


window.addEventListener("load",function(){
    const minus_button = document.getElementById("minus_button")
console.log(minus_button)
minus_button.addEventListener("click",minus)
})