// Fonction pour générer de nouvelles notes et les mettre à jour dans le HTML
function generateNewNotes() {
    clearStaves();
  
    if (isScoreDisplayed) {
      var note1 = gammeChromatique.indexOf(initialNote1);
      var note2 = gammeChromatique.indexOf(initialNote2);
      var distance = Math.abs(note2 - note1);
  
      // Afficher à l'utilisateur
      octave = Math.floor(distance / 12);
      interval = getIntervalName(distance);
  
      displayNotesOnStave(initialNote1, initialNote2);
    }
    var startTessiture = parseInt(tessitureSlider.value);
    var endTessiture = parseInt(tessitureSlider2.value);
  
    var indice1 =
      Math.floor(Math.random() * (endTessiture - startTessiture + 1)) +
      startTessiture;
    var indice2 =
      Math.floor(Math.random() * (endTessiture - startTessiture + 1)) +
      startTessiture;
  
    var newNote1 = gammeChromatique[indice1];
    var newNote2 = gammeChromatique[indice2];
    initialNote1 = newNote1;
    initialNote2 = newNote2;
    console.log("notes " + newNote1, newNote2);
    
  
    return [newNote1, newNote2];
  }
  