var gammeChromatique = [
  "A0", "Bb0-A#0", "B0", "C1", "Db1-C#1", "D1", "Eb1-D#1", "E1", "F1", "Gb1-F#1", "G1", "Ab1-G#1",
  "A1", "Bb1-A#1", "B1", "C2", "Db2-C#2", "D2", "Eb2-D#2", "E2", "F2", "Gb2-F#2", "G2", "Ab2-G#2",
  "A2", "Bb2-A#2", "B2", "C3", "Db3-C#3", "D3", "Eb3-D#3", "E3", "F3", "Gb3-F#3", "G3", "Ab3-G#3",
  "A3", "Bb3-A#3", "B3", "C4", "Db4-C#4", "D4", "Eb4-D#4", "E4", "F4", "Gb4-F#4", "G4", "Ab4-G#4",
  "A4", "Bb4-A#4", "B4", "C5", "Db5-C#5", "D5", "Eb5-D#5", "E5", "F5", "Gb5-F#5", "G5", "Ab5-G#5",
  "A5", "Bb5-A#5", "B5", "C6", "Db6-C#6", "D6", "Eb6-D#6", "E6", "F6", "Gb6-F#6", "G6", "Ab6-G#6",
  "A6", "Bb6-A#6", "B6", "C7", "Db7-C#7", "D7", "Eb7-D#7", "E7", "F7", "Gb7-F#7", "G7", "Ab7-G#7",
  "A7", "Bb7-A#7", "B7", "C8"
];

var enharmonicMap = {
  Bb: "A#",
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
};

// Pour pouvoir rejouer l'intervale
var initialNote1 = "";
var initialNote2 = "";

// pour afficher message
var interval = "";
var octave = 0;

// Affichage de la portée
var isScoreDisplayed = false;

// Variable pour suivre le mode de lecture actuel
var currentMode = "";

// Affichage des notes sur la portée et de leur nom
function displayNotesOnStave(note1, note2) {
  var responsetext = document.createElement("h5");
  document.getElementById("response").appendChild(responsetext);
  if (octave >= 1) {
    responsetext.textContent =
      "Réponse à la question précédente :\n" +
      octave +
      " oct. + " +
      interval +
      " " +
      currentMode;
  } else {
    responsetext.textContent =
      "Réponse à la question précédente :\n" + interval + " " + currentMode;
  }

  // Création des divs pour les portées et le nom des notes
  var abcDiv1 = document.createElement("div");
  document.getElementById("music-score1").appendChild(abcDiv1);

  var abcDiv2 = document.createElement("div");
  document.getElementById("music-score2").appendChild(abcDiv2);

  var textNote1 = document.createElement("div");
  document.getElementById("note1").appendChild(textNote1);

  var textNote2 = document.createElement("div");
  document.getElementById("note2").appendChild(textNote2);

  // Fonction pour traiter la note
  function processNote(note) {
    console.log(note);

    // Séparez la note et l'octave
    var matches = note.match(/([A-G#b]+)([0-9]+)/);
    if (matches) {

      // Note de base sans bémol ou dièse
      var baseNote = matches[1];

      // Octave
      var octave = parseInt(matches[2]);

      // Vérifiez si la note est enharmonique et remplacez-la si nécessaire en utilisant l'objet enharmonicMap
      if (enharmonicMap[baseNote]) {
        baseNote += " " + enharmonicMap[baseNote];
        var parts = baseNote.split(" ");
        if (parts[0].includes("b")) {
          {
            parts[0] = "_" + parts[0].replace("b", "");
          }
          if (parts[1].includes("#")) {
            {
              parts[1] = "^" + parts[1].replace("#", "");
            }
          }
          baseNote = parts.join(" | ");
          console.log(baseNote);
        }
      }

      // Transposez l'octave si nécessaire
      var octaveAdjustment = octave - 4;
      // Calculez le visualTranspose en fonction de l'octave
      return {
        baseNote: baseNote,
        visualTranspose: octaveAdjustment * 12, // Chaque octave = 12 demi-tons
      };
    }
    return { baseNote: note, visualTranspose: 0 }; // Si la note ne correspond pas au format attendu, retournez-la telle quelle
  }


  // Pour calculer l'odre d'affcihage des portées
  var indice1 = gammeChromatique.indexOf(note1);
  var indice2 = gammeChromatique.indexOf(note2);
  // Pour déterminer quelle clé utiliser
  var keyIndice1 = "";
  var keyIndice2 = "";

  // Dictionnaires pour le traitement des notes à affciher sur la portée
  var processedNote1 = {};
  var processedNote2 = {};

  // Pour afficher le noms des notes correspondantes à la portée suivant le mode et afficher clé de sol ou fa
  if (currentMode === "ascendante") {
    if (indice1 < indice2) {
      processedNote1 = processNote(note1);
      keyIndice1 = indice1;
      textNote1.textContent = note1;
      processedNote2 = processNote(note2);
      keyIndice2 = indice2;
      textNote2.textContent = note2;
    } else {
      processedNote1 = processNote(note2);
      keyIndice1 = indice2;
      textNote1.textContent = note2;
      processedNote2 = processNote(note1);
      keyIndice2 = indice1;
      textNote2.textContent = note1;
    }
  } else if (currentMode === "descendante") {
    if (indice1 > indice2) {
      processedNote1 = processNote(note1);
      keyIndice1 = indice1;
      textNote1.textContent = note1;
      processedNote2 = processNote(note2);
      keyIndice2 = indice2;
      textNote2.textContent = note2;
    } else {
      processedNote1 = processNote(note2);
      keyIndice1 = indice2;
      textNote1.textContent = note2;
      processedNote2 = processNote(note1);
      keyIndice2 = indice1;
      textNote2.textContent = note1;
    }
  } else if (currentMode === "harmonique") {
    processedNote1 = processNote(note1);
    keyIndice1 = indice1;
    textNote1.textContent = note1;
    processedNote2 = processNote(note2);
    keyIndice2 = indice2;
    textNote2.textContent = note2;
  }

  // Créez la notation ABC avec les bons visualTranspose pour chaque voix
  if (keyIndice1 >= 39) {
    var abcNotation1 = `X:1
  L:1/4
  K:C 
  %%staves {(PianoRightHand) (PianoLeftHand)}
  V:PianoRightHand clef=treble
  V:PianoLeftHand clef=bass
  [V:PianoRightHand]|${processedNote1.baseNote}|`;

    // Affichez la notation ABC à l'aide d'ABCjs
    ABCJS.renderAbc(abcDiv1, abcNotation1, {
      visualTranspose: processedNote1.visualTranspose,
    });
  } else {
    var abcNotation1 = `X:1
  L:1/4
  K:C 
  %%staves {(PianoRightHand) (PianoLeftHand)}
  V:PianoRightHand clef=treble
  V:PianoLeftHand clef=bass
  [V:PianoLeftHand]|${processedNote1.baseNote}|`;

    ABCJS.renderAbc(abcDiv1, abcNotation1, {
      visualTranspose: processedNote1.visualTranspose,
    });
  }

  if (keyIndice2 >= 39) {
    var abcNotation2 = `X:1
    L:1/4
    K:C 
    %%staves {(PianoRightHand) (PianoLeftHand)}
    V:PianoRightHand clef=treble
    V:PianoLeftHand clef=bass
    [V:PianoRightHand]|${processedNote2.baseNote}|`;

    ABCJS.renderAbc(abcDiv2, abcNotation2, {
      visualTranspose: processedNote2.visualTranspose,
    });
  } else {
    var abcNotation2 = `X:1
    L:1/4
    K:C 
    %%staves {(PianoRightHand) (PianoLeftHand)}
    V:PianoRightHand clef=treble
    V:PianoLeftHand clef=bass
    [V:PianoLeftHand]|${processedNote2.baseNote}|`;

    ABCJS.renderAbc(abcDiv2, abcNotation2, {
      visualTranspose: processedNote2.visualTranspose,
    });
  }
}

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

// Fonction pour jouer un son
function playSound(note) {
  // Vérifier si la note contient un nom enharmonique (par exemple, "A#0")
  if (note.includes("-")) {
    // Diviser la note en bémol et en dièse
    var parts = note.split("-");
    // Utiliser la partie en bémol pour jouer le fichier MP3
    var noteToPlay = parts[0];
  } else {
    // Si la note n'a pas de nom enharmonique, utilisez simplement la note telle quelle
    var noteToPlay = note;
  }

  var audio = new Audio("../assets/notes/" + noteToPlay + ".mp3");
  audio.play();
}

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

// Fonction pour supprimer les portées existantes
function clearStaves() {
  var response = document.getElementById("response");
  var musicScore1 = document.getElementById("music-score1");
  var musicScore2 = document.getElementById("music-score2");
  var note1Div = document.getElementById("note1");
  var note2Div = document.getElementById("note2");

  // Supprimez tous les éléments enfants des divs correspondantes
  while (response.firstChild) {
    response.removeChild(response.firstChild);
  }

  while (musicScore1.firstChild) {
    musicScore1.removeChild(musicScore1.firstChild);
  }

  while (musicScore2.firstChild) {
    musicScore2.removeChild(musicScore2.firstChild);
  }

  while (note1Div.firstChild) {
    note1Div.removeChild(note1Div.firstChild);
  }

  while (note2Div.firstChild) {
    note2Div.removeChild(note2Div.firstChild);
  }
}

// Gestionnaire d'événements pour le bouton "Jouer un interval"
document.getElementById("playButton").addEventListener("click", function () {
  var [newNote1, newNote2] = generateNewNotes();
  var modes = ["ascendante", "descendante", "harmonique"];
  var randomMode = modes[Math.floor(Math.random() * modes.length)];
  console.log(randomMode);

  if (randomMode === "ascendante") {
    playAscending(newNote1, newNote2);
    currentMode = "ascendante";
  } else if (randomMode === "descendante") {
    playDescending(newNote1, newNote2);
    currentMode = "descendante";
  } else if (randomMode === "harmonique") {
    playSimultaneous(newNote1, newNote2);
    currentMode = "harmonique";
  }
  isScoreDisplayed = true;
});

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

// Gestionnaire d'événements pour les boutons de réponse
var reponseButtons = document.querySelectorAll(".reponse");
reponseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var distance = parseInt(button.getAttribute("data-distance"));
    interval = getIntervalName(distance);
    checkAnswer(interval);
  });
});

// Fonction pour vérifier la réponse de l'utilisateur
function checkAnswer(userResponse) {
  var note1 = gammeChromatique.indexOf(initialNote1);
  var note2 = gammeChromatique.indexOf(initialNote2);
  var distance = Math.abs(note2 - note1);
  interval = getIntervalName(distance);

  if (userResponse === interval) {
    alert("Correct ! La réponse est " + interval);
    // Générer de nouvelles notes après une réponse correcte
    var [newNote1, newNote2] = generateNewNotes();
    var modes = ["ascendante", "descendante", "harmonique"];
    var randomMode = modes[Math.floor(Math.random() * modes.length)];
    if (randomMode === "ascendante") {
      playAscending(newNote1, newNote2);
      currentMode = "ascendante";
    } else if (randomMode === "descendante") {
      playDescending(newNote1, newNote2);
      currentMode = "descendante";
    } else if (randomMode === "harmonique") {
      playSimultaneous(newNote1, newNote2);
      currentMode = "harmonique";
    }

    isScoreDisplayed = true; // Mettez à jour l'état de l'affichage de la portée
  } else {
    alert("Incorrect. Réessayez !");
  }
}

// Fonction pour obtenir le nom de l'interval en fonction de la distance en demi-tons
function getIntervalName(distance) {
  const intervals = {
    0: "Unisson",
    1: "Seconde mineure",
    2: "Seconde majeure",
    3: "Tierce mineure",
    4: "Tierce majeure",
    5: "Quarte",
    6: "Quinte diminuée",
    7: "Quinte",
    8: "Sixte mineure",
    9: "Sixte majeure",
    10: "Septième mineure",
    11: "Septième majeure",
  };

  // Vérifiez si la distance est un multiple de 12
  for (let distanceBase in intervals) {
    distanceBase = parseInt(distanceBase);
    if (distance % 12 === distanceBase) {
      return intervals[distanceBase];
    }
  }

  return "Interval inconnu";
}

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
  } else if (currentMode === "harmonique") {
    playSound(initialNote1);
    playSound(initialNote2);
  }
});
