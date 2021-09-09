const tl = gsap.timeline();

tl.from('.navbar', { opacity: 0, translateY: '-20px', duration: 0.5 })
  .from('.left', { opacity: 0, translateX: '-100px' })
  .from('.right', { opacity: 0, translateX: '100px' })