const modalTriggerButton = document.querySelector("button");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");

modalTriggerButton.addEventListener("click", (event) => {
  toggleModal();
});

modalCloseBtn.addEventListener("click", (event) => {
  toggleModal();
});

modal.addEventListener("click", (event) => {
  if (event.target.classList.contain("modal")) {
    toggleModal();
  }
});

function toggleModal() {
  if (getComputedStyle(modal).display === "flex") {
    modal.style.display = "none";
    document.body.style.overflow = "initial";
  } else {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
