const navbarMenu = document.querySelector(".navbar ul");
const navbarLink = document.querySelectorAll(".navbar a");

navbarLink.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

//window.scrollTo
// function smoothScroll(event) {
//   event.preventDefault();
//   const targetId = event.currentTarget.getAttribute("href");
//   const targetElement = document.querySelector(targetId);
//   window.scrollTo({
//     top: targetId === "#" ? 0 : targetElement.offsetTop,
//     behavior: "smooth",
//   });
// }

//window.scrollIntoView
// function smoothScroll(event) {
//   event.preventDefault();
//   const targetId = event.currentTarget.getAttribute("href");
//   const targetElement = document.querySelector(targetId);
//   targetElement.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// }

//window.requestAnimationFrame
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const offsetTop = document.querySelector(targetId).offsetTop;
  const pageYOffset = window.pageYOffset;
  const distance = offsetTop - pageYOffset;
  const duration = 1000;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timeStamp) {
    if (!start) start = timeStamp;
    const progress = timeStamp - start;
    window.scrollTo(0, distance * (progress / duration) + pageYOffset);
    if (progress < duration) window.requestAnimationFrame(step);
  }
}
