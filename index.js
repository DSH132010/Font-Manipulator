const tl = gsap.timeline();

tl.from('.navbar', { opacity: 0, translateY: '-20px', duration: 0.5 })
   .from('.left', { opacity: 0, translateX: '-100px' })
   .from('.right', { opacity: 0, translateY: '50px' })
   .from('.profile-pic', { opacity: 0, translateX: '-10px', stagger: .1 })
   .from('.line', { opacity: 0, scaleX: 0, stagger: .2, ease: "elastic.out(1, 0.48)", duration: 1 })