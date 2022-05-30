const navbarMenu = document.querySelector(".navbar ul");
const navbarLink = document.querySelectorAll(".navbar a");

navbarLink.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

//window.scrollTo
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  window.scrollTo({
    top: targetId === "#" ? 0 : targetElement.offsetTop,
    behavior: "smooth",
  });
}

//window.scrollIntoView
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

//window.requestAnimationFrame
function smoothScroll(event){
  
}
