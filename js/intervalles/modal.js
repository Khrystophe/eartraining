function openModal() {
  var modal = document.getElementById("modalContainer");
  modal.style.display = "flex";
  modal.style.alignItems = "center";
}

function closeModal() {
  var modal = document.getElementById("modalContainer");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var settingsButton = document.getElementById("settingsButton");
  settingsButton.addEventListener("click", openModal);

  var closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    var modal = document.getElementById("modalContainer");
    if (event.target === modal) {
      closeModal();
    }
  });
});
