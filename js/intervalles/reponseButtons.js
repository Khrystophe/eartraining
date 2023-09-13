// Gestionnaire d'événements pour les boutons de réponse
var reponseButtons = document.querySelectorAll(".reponse");
reponseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var distance = parseInt(button.getAttribute("data-distance"));
    interval = getIntervalName(distance);
    checkAnswer(interval);
  });
});