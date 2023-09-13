// Gestion des curseurs de tessiture
var tessitureSlider = document.getElementById("tessiture");
var tessitureValue = document.getElementById("tessitureValue");

var tessitureSlider2 = document.getElementById("tessiture2");
var tessitureValue2 = document.getElementById("tessitureValue2");

// Mise à jour de la tessiture de départ
tessitureSlider.addEventListener("input", function () {
  var startTessiture = parseInt(tessitureSlider.value);
  tessitureValue.textContent = gammeChromatique[startTessiture];

  // Mettre à jour la valeur minimale du deuxième curseur
  tessitureSlider2.min = startTessiture;
});

// Mise à jour de la tessiture de fin
tessitureSlider2.addEventListener("input", function () {
  var endTessiture = parseInt(tessitureSlider2.value);
  tessitureValue2.textContent = gammeChromatique[endTessiture];
});