var noteIndex1 = 0;
var noteIndex2 = 0;

var rangeOne = document.querySelector('input[name="rangeOne"]');
var rangeTwo = document.querySelector('input[name="rangeTwo"]');
var outputOne = document.querySelector(".outputOne");
var outputTwo = document.querySelector(".outputTwo");
var inclRange = document.querySelector(".incl-range");

var updateView = function () {
  if (this.getAttribute("name") === "rangeOne") {
    noteIndex1 = parseInt(this.value);
    console.log(noteIndex1);
    outputOne.innerHTML = gammeChromatique[noteIndex1];
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
    outputTwo.innerHTML = gammeChromatique[noteIndex2];
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
  });

  // Gestionnaire d'événement de clic pour outputOne
  outputOne.addEventListener("mousedown", function () {
    isOutputOneDragging = true;
  });

  // Gestionnaire d'événement de clic pour outputTwo
  outputTwo.addEventListener("mousedown", function () {
    isOutputTwoDragging = true;
  });

  document.addEventListener("mousemove", function (event) {
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
    }
  });

  document.addEventListener("mouseup", function () {
    isOutputOneDragging = false;
    isOutputTwoDragging = false;
  });
});