gsap.from(".box",{
   x:500,
   y:30,
   duration:2,
   delay:1,
   // rotate:360
   opacity:0
})
gsap.from(".box1",{
   y:30,
   x:0,
   duration:1,
   delay:1,
   opacity:0
   
})
gsap.from(".box2",{
   y:30,
   // x:0,
   duration:1,
   delay:1,
   opacity:0,
   stagger:1
})
gsap.to("#box3",{
   x:1200,
   duration:2,
   delay:1.5,
   rotate:360,
   backgroundColor:"blue",
   borderRadius:"100%",
   // repeat:-1,
   yoyo:true
})
gsap.to(".box4",{
   x:1500,
   duration:2.5,
   delay:1,
   rotate:360,
   backgroundColor:"yellow",
   borderRadius:"100%",
   
})
