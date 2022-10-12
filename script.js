var tl = gsap.timeline();
tl.from(".l1",{
    top:"-100%",
    duration: 3,
    ease:"Expo.easeInOut",
    opacity:0
})

.from(".l2",{
    bottom:"-100%",
    duration: 2,
    ease:"Expo.easeInOut",
    opacity:0
    
},"-=3")

.to(".loder",{
    height:"0",
    duration:1
})
 tl.from(".navbar h1",{
     y: 100,
     opacity:"0",
     Stagger: "2",
     duration: 0.2
    })
.from(".navbar h2",{
    y: 100,
    opacity:"0",
    Stagger: "2",
    duration: 0.2
    })
.from(".navbar i",{
    y: 100,
    opacity:"0",
    Stagger: "2",
    duration: 0.2
    })
.from(".center h1",{
    x: "-100",
    opacity: "0",
    Stagger: "2",
    duration: 0.2
})
.from(".center h2",{
    y: 100,
    opacity:"0",
    Stagger: "2",
    duration: 0.2
   })
.from(".center h3",{
    x: "-100",
    opacity: "0",
    Stagger: "2",
    duration: 0.2
})
.from(".center p",{
    x: "-100",
    opacity: "0",
    Stagger: "2",
    duration: 1
})
.from(".center button",{
    x: "-100",
    opacity: "0",
    Stagger: "2",
    duration: 1
})
.from(".bottom",{
    scale: "0",
    stagger:"2",
    duration: 0.5
})
.from(".right",{
    scale: "0",
    stagger:"2",
    duration: 1})