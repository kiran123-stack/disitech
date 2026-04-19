
if (typeof gsap !== "undefined") {

  const tl = gsap.timeline();

  tl.from(".title", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
  .from(".subtitle", {
    y: 50,
    opacity: 0,
    duration: 1
  }, "-=0.5")
  

} else {
  console.error("GSAP not loaded");
}

const menu = document.getElementById('mobile-menu');
const navOverlay = document.getElementById('nav-overlay'); 

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navOverlay.classList.toggle('active'); 
});