let x = document.querySelector(".divLi1")
let y = document.querySelector(".divLi2")
let u = document.querySelector(".divLi3")
let o = document.querySelector(".divLi4")
let q = document.querySelector(".divLi5")
let w = document.querySelector(".divLi6")
let l = document.querySelector(".divLi7")
let k = document.querySelector(".divLi8")

x.addEventListener("click" , function(){
    x.classList.add("p")
    y.classList.remove("p")
    u.classList.remove("p")
    o.classList.remove("p")
    q.classList.remove("p")
    w.classList.remove("p")
    l.classList.remove("p")
    k.classList.remove("p")
})
y.addEventListener("click" , function(){
    x.classList.remove("p")
    y.classList.add("p")
    u.classList.remove("p")
    o.classList.remove("p")
    q.classList.remove("p")
    w.classList.remove("p")
    l.classList.remove("p")
    k.classList.remove("p")
})
u.addEventListener("click" , function(){
    x.classList.remove("p")
    y.classList.remove("p")
    u.classList.add("p")
    o.classList.remove("p")
    q.classList.remove("p")
    w.classList.remove("p")
    l.classList.remove("p")
    k.classList.remove("p")
})
o.addEventListener("click" , function(){
    x.classList.remove("p")
    y.classList.remove("p")
    u.classList.remove("p")
    o.classList.add("p")
    q.classList.remove("p")
    w.classList.remove("p")
    l.classList.remove("p")
    k.classList.remove("p")
})
q.addEventListener("click" , function(){
    x.classList.remove("p")
    y.classList.remove("p")
    u.classList.remove("p")
    o.classList.remove("p")
    q.classList.add("p")
    w.classList.remove("p")
    l.classList.remove("p")
    k.classList.remove("p")
})
w.addEventListener("click" , function(){
    x.classList.remove("p")
    y.classList.remove("p")
    u.classList.remove("p")
    o.classList.remove("p")
    q.classList.remove("p")
    w.classList.add("p")
    l.classList.remove("p")
    k.classList.remove("p")
})
l.addEventListener("click" , function(){
    x.classList.remove("p")
    y.classList.remove("p")
    u.classList.remove("p")
    o.classList.remove("p")
    q.classList.remove("p")
    w.classList.remove("p")
    l.classList.add("p")
    k.classList.remove("p")
})
k.addEventListener("click" , function(){
    x.classList.remove("p")
    y.classList.remove("p")
    u.classList.remove("p")
    o.classList.remove("p")
    q.classList.remove("p")
    w.classList.remove("p")
    l.classList.remove("p")
    k.classList.add("p")
})

let d = document.querySelector(".but1")
let g = document.querySelector(".but2")
d.addEventListener("click" , function(){
    d.classList.add("p")
    g.classList.remove("p")
})
g.addEventListener("click" , function(){
    d.classList.remove("p")
    g.classList.add("p")
})

let a = document.querySelector(".button3")
let j = document.querySelector(".button4")
a.addEventListener("click" , function(){
    a.classList.add("t")
    j.classList.remove("t")
})
j.addEventListener("click" , function(){
    a.classList.remove("t")
    j.classList.add("t")
})