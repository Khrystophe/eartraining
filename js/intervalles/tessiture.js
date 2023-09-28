var noteIndex1 = 0;
var noteIndex2 = 0;

var rangeOne = document.querySelector('input[name="rangeOne"]');
var rangeTwo = document.querySelector('input[name="rangeTwo"]');
var outputOne = document.querySelector(".outputOne");
var outputTwo = document.querySelector(".outputTwo");
var inclRange = document.querySelector(".incl-range");

var isOutputOneDragging = false;
var isOutputTwoDragging = false;

var updateView = function () {
  if (this.getAttribute("name") === "rangeOne") {
    noteIndex1 = parseInt(this.value);
    console.log(noteIndex1);

    var displayName = gammeChromatique[noteIndex1];
    if (displayName.includes("-")) {
      var parts = displayName.split("-");
      outputOne.innerHTML = parts[1] + "/" + parts[0];
    } else {
      outputOne.innerHTML = displayName;
    }

    outputOne.style.left =
      (noteIndex1 / (this.getAttribute("max") - this.getAttribute("min"))) *
        100 +
      "%";
  } else {
    noteIndex2 = parseInt(this.value);
    console.log(noteIndex2);
    outputTwo.style.left =
      (noteIndex2 / (this.getAttribute("max") - this.getAttribute("min"))) *
        100 +
      "%";

    var displayName = gammeChromatique[noteIndex2];
    if (displayName.includes("-")) {
      var parts = displayName.split("-");
      outputTwo.innerHTML = parts[1] + "/" + parts[0];
    } else {
      outputTwo.innerHTML = displayName;
    }
  }

  if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
    inclRange.style.width =
      ((rangeOne.value - rangeTwo.value) /
        (rangeOne.getAttribute("max") - rangeOne.getAttribute("min"))) *
        100 +
      "%";
    inclRange.style.left =
      (rangeTwo.value /
        (rangeOne.getAttribute("max") - rangeOne.getAttribute("min"))) *
        100 +
      "%";
  } else {
    inclRange.style.width =
      ((rangeTwo.value - rangeOne.value) /
        (rangeOne.getAttribute("max") - rangeOne.getAttribute("min"))) *
        100 +
      "%";
    inclRange.style.left =
      (rangeOne.value /
        (rangeOne.getAttribute("max") - rangeOne.getAttribute("min"))) *
        100 +
      "%";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  updateView.call(rangeOne);
  updateView.call(rangeTwo);

  var rangeInputs = document.querySelectorAll('input[type="range"]');

  rangeInputs.forEach(function (input) {
    input.addEventListener("mouseup", function () {
      this.blur();
    });

    input.addEventListener("mousedown", function () {
      input.addEventListener("input", function () {
        updateView.call(this);
      });
    });

    // Gestionnaire d'événement de toucher pour les écrans tactiles
    input.addEventListener("touchstart", function () {
      input.addEventListener("input", function () {
        updateView.call(this);
      });
    });
  });

  // Gestionnaire d'événement de clic pour outputOne
  outputOne.addEventListener("mousedown", function () {
    isOutputOneDragging = true;
  });

  // Gestionnaire d'événement de clic pour outputTwo
  outputTwo.addEventListener("mousedown", function () {
    isOutputTwoDragging = true;
  });

  // Gestionnaire d'événement de toucher pour les écrans tactiles pour outputOne
  outputOne.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Empêche le défilement lors du toucher
    isOutputOneDragging = true;
  });

  // Gestionnaire d'événement de toucher pour les écrans tactiles pour outputTwo
  outputTwo.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Empêche le défilement lors du toucher
    isOutputTwoDragging = true;
  });

  document.addEventListener("mousemove", function (event) {
    // var rect1 = outputOne.getBoundingClientRect();
    // var rect2 = outputTwo.getBoundingClientRect();

    // var center1X = rect1.left + rect1.width / 2;
    // var center2X = rect2.left + rect2.width / 2;

    // var distance = Math.abs(center1X - center2X);
    if (isOutputOneDragging) {
      var rect = rangeOne.getBoundingClientRect();
      var clickX = event.clientX - rect.left;
      var percent = (clickX / rect.width) * 100;
      var newValue = Math.round(
        (percent / 100) *
          (rangeOne.getAttribute("max") - rangeOne.getAttribute("min"))
      );
      rangeOne.value = newValue;
      updateView.call(rangeOne);

      // if (distance < 70) {
      //   // La distance est inférieure à 70px, donc nous définissons bottom à -115%
      //   // pour l'élément que vous déplacez
      //   outputOne.style.bottom = "-115%";
      // } else {
      //   // La distance est supérieure à 70px, nous réinitialisons bottom à 75%
      //   outputOne.style.bottom = "75%";
      // }
    }

    if (isOutputTwoDragging) {
      var rect = rangeTwo.getBoundingClientRect();
      var clickX = event.clientX - rect.left;
      var percent = (clickX / rect.width) * 100;
      var newValue = Math.round(
        (percent / 100) *
          (rangeTwo.getAttribute("max") - rangeTwo.getAttribute("min"))
      );
      rangeTwo.value = newValue;
      updateView.call(rangeTwo);
      // if (distance < 70) {
      //   // La distance est inférieure à 70px, donc nous définissons bottom à -115%
      //   // pour l'élément que vous déplacez

      //   outputTwo.style.bottom = "-115%";
      // } else {
      //   // La distance est supérieure à 70px, nous réinitialisons bottom à 75%

      //   outputTwo.style.bottom = "75%";
      // }
    }
  });

  // Gestionnaire d'événement de touchmove pour les écrans tactiles
  document.addEventListener("touchmove", function (event) {
    if (isOutputOneDragging) {
      var rect = rangeOne.getBoundingClientRect();
      var touchX = event.touches[0].clientX - rect.left;
      var percent = (touchX / rect.width) * 100;
      var newValue = Math.round(
        (percent / 100) *
          (rangeOne.getAttribute("max") - rangeOne.getAttribute("min"))
      );
      rangeOne.value = newValue;
      updateView.call(rangeOne);
    }

    if (isOutputTwoDragging) {
      var rect = rangeTwo.getBoundingClientRect();
      var touchX = event.touches[0].clientX - rect.left;
      var percent = (touchX / rect.width) * 100;
      var newValue = Math.round(
        (percent / 100) *
          (rangeTwo.getAttribute("max") - rangeTwo.getAttribute("min"))
      );
      rangeTwo.value = newValue;
      updateView.call(rangeTwo);
    }
  });

  document.addEventListener("mouseup", function () {
    isOutputOneDragging = false;
    isOutputTwoDragging = false;
  });

  // Gestionnaire d'événement de touchend pour les écrans tactiles
  document.addEventListener("touchend", function () {
    isOutputOneDragging = false;
    isOutputTwoDragging = false;
  });
});
