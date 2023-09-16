// Variable globale pour stocker le mode actuel
var mode = "ascendante"; // Initialisez-le avec le mode par défaut

// Récupérez les boutons par leur ID
var randomModeButton = document.getElementById("random-mode-button");
var ascendingModeButton = document.getElementById("ascending-mode-button");
var descendingModeButton = document.getElementById("descending-mode-button");
var harmonicModeButton = document.getElementById("harmonic-mode-button");

// Fonction pour mettre à jour les classes des boutons
function updateButtonClasses(selectedButton) {
  // Supprimez la classe "selected-mode" de tous les boutons
  randomModeButton.classList.remove("selected-mode");
  ascendingModeButton.classList.remove("selected-mode");
  descendingModeButton.classList.remove("selected-mode");
  harmonicModeButton.classList.remove("selected-mode");

  // Ajoutez la classe "selected-mode" uniquement au bouton sélectionné
  selectedButton.classList.add("selected-mode");
}

// Ajoutez des écouteurs d'événements pour chaque bouton de mode
randomModeButton.addEventListener("click", function () {
  mode = "random";
  updateButtonClasses(randomModeButton);
});

ascendingModeButton.addEventListener("click", function () {
  mode = "ascendante";
  updateButtonClasses(ascendingModeButton);
});

descendingModeButton.addEventListener("click", function () {
  mode = "descendante";
  updateButtonClasses(descendingModeButton);
});

harmonicModeButton.addEventListener("click", function () {
  mode = "harmonique";
  updateButtonClasses(harmonicModeButton);
});
