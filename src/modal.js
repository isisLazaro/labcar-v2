document.querySelectorAll(".button-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.querySelector(btn.getAttribute("data-target"));
    const html = document.querySelector("html");

    modal.classList.add("is-active");
    html.classList.add("is-clipped");
    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.classList.remove("is-active");
      html.classList.remove("is-clipped");
    });
    modal.querySelector(".modal-background").addEventListener("click", () => {
      modal.classList.remove("is-active");
      html.classList.remove("is-clipped");
    });
  });
});
