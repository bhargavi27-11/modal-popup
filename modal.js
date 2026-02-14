const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

openBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOverlay.style.display = "none";
  }
});