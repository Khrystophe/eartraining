function responseText() {
  // Création de la div pour la réponse de succès ou d'échec
  var responsetext = document.createElement("h5");
  responsetext.classList.add("responseText-h5");
  document.getElementById("response").appendChild(responsetext);

  var messagePrefix = answerRevealed
    ? "Persévérez ! La réponse était :"
    : "Bien joué ! La réponse est :";

  var octaveText =
    octave >= 1 && interval != "Unisson"
      ? octave + " oct. + "
      : octave >= 1
      ? octave + " oct. + "
      : "";
  var intervalText = interval != "Unisson" ? interval + " " : " Unisson ";

  // Affichage de la réponse
  responsetext.textContent =
    messagePrefix + "\n" + octaveText + intervalText + currentMode;
}
