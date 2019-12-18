document.querySelectorAll(".button-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.querySelector(btn.getAttribute("data-target"));
    modal.classList.add("is-active");
    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
    modal.querySelector(".modal-background").addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });
});
