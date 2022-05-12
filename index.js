const allRonds = document.querySelectorAll(".rond");
const allBoxes = document.querySelectorAll(".box");

const home = document.querySelector("#home");
const skills = document.querySelector("#skills");
// const projects = document.querySelector("#skills");
// const contact = document.querySelector("#skills");
const allNavs = document.querySelectorAll("header a");

const controller = new ScrollMagic.Controller();

allBoxes.forEach((box) => {
  for (i = 0; i < allRonds.length; i++) {
    if (
      allRonds[i].getAttribute("data-anim") === box.getAttribute("data-anim")
    ) {
      let tween = gsap.from(box, {
        scale: 0.6,
        y: -50,
        opacity: 0,
        duration: 0.5,
      });

      let scene = new ScrollMagic.Scene({
        triggerElement: allRonds[i],
        reverse: false,
      })
        .setTween(tween)
        .addTo(controller);
    }
  }
});
new ScrollMagic.Scene({
  triggerElement: home,
  reverse: true,
  duration: home.clientHeight,
})
  .setClassToggle("#n1", "active")
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: skills,
  reverse: true,
  duration: skills.clientHeight,
})
  .setClassToggle("#n2", "active")
  .addIndicators()
  .addTo(controller);
