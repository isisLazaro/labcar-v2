const btnRegistrate = document.getElementById("btn-registrate");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-close");
const modalBackground = document.querySelector(".modal-background");

const toogleModal = () => {
  modal.classList.add("is-active");
  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
  modalBackground.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
};
btnRegistrate.addEventListener("click", toogleModal);
// closeButton.addEventListener("click", toggleModal);
