const allRonds = document.querySelectorAll(".rond");
const allBoxes = document.querySelectorAll(".box");
const imgs = document.querySelectorAll(".parallax-container img");
var scene = document.getElementById("parallax-container");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  hoverOnly: true,
});

const home = document.querySelector("#home");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

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
        .triggerHook(0.7)
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
  .triggerHook(0.7)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: skills,
  reverse: true,
  duration: skills.clientHeight,
})
  .setClassToggle("#n2", "active")
  .triggerHook(0.7)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: projects,
  reverse: true,
  duration: projects.clientHeight,
})
  .setClassToggle("#n3", "active")
  .triggerHook(0.7)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: contact,
  reverse: true,
  duration: contact.clientHeight,
})
  .setClassToggle("#n4", "active")
  .triggerHook(0.7)
  .addTo(controller);
