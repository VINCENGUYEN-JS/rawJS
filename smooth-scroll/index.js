const navbarMenu = document.querySelector(".navbar ul");
const navbarLink = document.querySelectorAll(".navbar a");

navbarLink.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  console.log({ targetElement });
  window.scrollTo({
    top: 100,
    behavior: "smooth",
  });
}
