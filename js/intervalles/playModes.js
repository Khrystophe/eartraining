// Fonction pour jouer les notes en mode "ascendant"
function playAscending(newNote1, newNote2) {
    var note1Index = gammeChromatique.indexOf(newNote1);
    var note2Index = gammeChromatique.indexOf(newNote2);
  
    if (note1Index < note2Index) {
      playSound(newNote1);
      setTimeout(function () {
        playSound(newNote2);
      }, 1000); // Jouer la deuxième note après 1 seconde
    } else {
      playSound(newNote2);
      setTimeout(function () {
        playSound(newNote1);
      }, 1000); // Jouer la première note après 1 seconde
    }
  }
  
  // Fonction pour jouer les notes en mode "descendant"
  function playDescending(newNote1, newNote2) {
    var note1Index = gammeChromatique.indexOf(newNote1);
    var note2Index = gammeChromatique.indexOf(newNote2);
  
    if (note1Index > note2Index) {
      playSound(newNote1);
      setTimeout(function () {
        playSound(newNote2);
      }, 1000); // Jouer la deuxième note après 1 seconde
    } else {
      playSound(newNote2);
      setTimeout(function () {
        playSound(newNote1);
      }, 1000); // Jouer la première note après 1 seconde
    }
  }
  
  // Fonction pour jouer les notes en mode "simultané"
  function playSimultaneous(newNote1, newNote2) {
    playSound(newNote1);
    playSound(newNote2);
  }