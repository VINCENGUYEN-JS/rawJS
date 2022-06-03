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
  if (event.target.classList.contains("modal")) {
    toggleModal();
  }
});

function toggleModal() {
  if (getComputedStyle(modal).display === "flex") {
    modal.classList.add("modal-hide");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("modal-show", "modal-hide");
      document.body.style.overflow = "initial";
    }, 200);
  } else {
    modal.style.display = "flex";
    modal.classList.add("modal-show");
    document.body.style.overflow = "hidden";
  }
}
