const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseBtns = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    toggleModal(event.target.getAttribute("data-modal-target"));
  })
);

modalCloseBtns.forEach((btnClose) => {
  btnClose.addEventListener("click", (event) => {
    const modal = event.target.closest(".modal");
    const modalId = modal.getAttribute("id");
    toggleModal(modalId);
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    console.log({ currentTarget: event.target });
    if (event.target.classList.contains("modal")) {
      toggleModal(event.target.id);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(id) {
  const modal = document.querySelector(`#${id}`);
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
