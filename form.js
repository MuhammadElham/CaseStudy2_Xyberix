const menuToggleClose = document.querySelector("#menu-toggle-close"),
  menu = document.querySelector(".projectForm--box"),
  tl = gsap.timeline({ paused: !0 });
tl.to(".projectForm--box", { x: 0, duration: 1, ease: "Circ.easeInOut" }),
  tl.from(".projectForm .form-item", {
    y: 25,
    opacity: 0,
    duration: 0.4,
    ease: "Circ.easeOut",
    stagger: 0.1,
  });
const boxes = document.querySelectorAll(".menu-open");
boxes.forEach((e) => {
  e.addEventListener("click", function e(o) {
    console.log("box clicked", o), tl.play();
  });
}),
  menuToggleClose.addEventListener("click", () => {
    tl.reverse();
  });
console.log("Elham Waheed");
