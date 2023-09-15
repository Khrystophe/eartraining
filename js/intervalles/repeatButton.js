// Gestionnaire d'événements pour le bouton "Répéter l'interval"
document.getElementById("repeatButton").addEventListener("click", function () {
    var indice1 = gammeChromatique.indexOf(initialNote1);
    var indice2 = gammeChromatique.indexOf(initialNote2);
  
    if (currentMode === "ascendante") {
      if (indice1 < indice2) {
        playSound(initialNote1);
        setTimeout(function () {
          playSound(initialNote2);
        }, 1000); // Jouer la deuxième note après 1 seconde
      } else {
        playSound(initialNote2);
        setTimeout(function () {
          playSound(initialNote1);
        }, 1000); // Jouer la première note après 1 seconde
      }
    } else if (currentMode === "descendante") {
      if (indice1 > indice2) {
        playSound(initialNote1);
        setTimeout(function () {
          playSound(initialNote2);
        }, 1000); // Jouer la deuxième note après 1 seconde
      } else {
        playSound(initialNote2);
        setTimeout(function () {
          playSound(initialNote1);
        }, 1000); // Jouer la première note après 1 seconde
      }
    } else if (currentMode === "harmonique" || currentMode === "repété") {
      playSound(initialNote1);
      playSound(initialNote2);
    }
  });