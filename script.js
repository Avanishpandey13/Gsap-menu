
let a =  document.querySelector(".ri-menu-3-line")
let b = document.querySelector(".ri-close-line")

let tl = gsap.timeline()




a.addEventListener("click",() =>{
    console.log("avanish")
    a.style.opacity = 0

tl.to(".menu",{
    transform:"translateX(0%)"
})

 
tl.to("h4",{
    transform:"translateX(0%)",
    stagger:0.3 
})
})

b.addEventListener("click", () =>{
    console.log("avanish")
    tl.to("h4",{
        transform:"translateX(110%)",
        stagger:0.3 
    })
    tl.to(".menu",{
        transform:"translateX(100%)"
    })
    tl.to(".ri-menu-3-line",{
        opacity:1
    })
    
})

// gsap.to(".menu",{
//     transform:"translateX(0%)"
// })

// gsap.to("h4",{
//     transform:"translateX(0%)",
//     stagger:0.3 
// })


