const hamburger = document.querySelector('.hamburger')
const lineTop = document.querySelector('.lineTop')
const lineMiddle = document.querySelector('.lineMiddle')
const lineBottom = document.querySelector('.lineBottom')

const lines = [lineTop, lineMiddle, lineBottom]

const tl = new TimelineMax({})

const toggleMenu = new TimelineMax({
  paused: true,
  reversed: true
})

hamburger.addEventListener('mouseenter', _ => {
  if (hamburger.classList.contains('js-cross')) {
    return;
  }
  tl.staggerTo(lines, 0.25, { scaleX: 1.2, repeat: 1, yoyo: true, ease: Power2.easeInOut }, 0.125);

})
toggleMenu
  .to(lineMiddle, 0.125, { scaleX: 0 })
  .to(lineTop, 0.125, { rotation: 45, transformOrigin: "35% 50%", y: 25, ease: Power2.easeInOut }, "cross")
  .to(lineBottom, 0.125, { rotation: -45, transformOrigin: "35% 50%", y: -25, ease: Power2.easeInOut }, "cross")
 
hamburger.addEventListener('click', _ => {
  hamburger.classList.toggle('js-cross');
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})

// transformOrigin set to 50% 50% if all elements are centered in their container