// Affichage des notes sur la portée et de leur nom
function displayNotesOnStave(note1, note2) {
  console.log(octave);
  // Création des divs pour les portées et le nom des notes
  var responsetext = document.createElement("h5");
  responsetext.classList.add("responseText-h5");
  document.getElementById("response").appendChild(responsetext);

  if (!answerRevealed) {
    if (octave >= 1 && interval != "Unisson") {
      responsetext.textContent =
        "Bien joué ! La réponse est :\n" +
        octave +
        " oct. + " +
        interval +
        " " +
        currentMode;
    } else if (octave >= 1 && interval == "Unisson") {
      responsetext.textContent =
        "Bien joué ! La réponse est :\n" + octave + " oct. " + currentMode;
    } else {
      responsetext.textContent =
        "Bien joué ! La réponse est :\n" + interval + " " + currentMode;
    }
  } else {
    if (octave >= 1 && interval != "Unisson") {
      responsetext.textContent =
        "Perseverez ! La réponse était :\n" +
        octave +
        " oct. + " +
        interval +
        " " +
        currentMode;
    } else if (octave >= 1 && interval == "Unisson") {
      responsetext.textContent =
        "Perseverez ! La réponse était :\n" + octave + " oct. " + currentMode;
    } else {
      responsetext.textContent =
        "Perseverez ! La réponse était :\n" + interval + " " + currentMode;
    }
  }
  var abcDiv1 = document.createElement("div");
  document.getElementById("music-score1").appendChild(abcDiv1);

  var abcDiv2 = document.createElement("div");
  document.getElementById("music-score2").appendChild(abcDiv2);

  var textNote1 = document.createElement("div");
  document.getElementById("note1").appendChild(textNote1);

  var notenumber1 = document.createElement("div");
  document.getElementById("note1").appendChild(notenumber1);
  notenumber1.textContent = "première note :";

  var textNote2 = document.createElement("div");
  document.getElementById("note2").appendChild(textNote2);

  var notenumber2 = document.createElement("div");
  document.getElementById("note2").appendChild(notenumber2);
  notenumber2.textContent = "deuxième note :";

  // Pour calculer l'odre d'affcihage des portées
  var indice1 = gammeChromatique.indexOf(note1);
  var indice2 = gammeChromatique.indexOf(note2);

  console.log(indice1);
  console.log(indice2);
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
  } else if (currentMode === "harmonique" || currentMode === "repété") {
    processedNote1 = processNote(note1);
    keyIndice1 = indice1;
    textNote1.textContent = note1;
    processedNote2 = processNote(note2);
    keyIndice2 = indice2;
    textNote2.textContent = note2;
  }

  // Créez la notation ABC avec les bons visualTranspose pour chaque voix
  if (keyIndice1 >= 39) {
    if (processedNote1.baseNote.includes(" ")) {
      var parts = processedNote1.baseNote.split(" ");
      var abcNotation1 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=treble
      [V:T1]|[${parts[0]}${parts[1]}|`;

      // Affichez la notation ABC à l'aide d'ABCjs
      ABCJS.renderAbc(abcDiv1, abcNotation1, {
        visualTranspose: processedNote1.visualTranspose,
      });
    } else {
      var abcNotation1 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=treble
      [V:T1]|${processedNote1.baseNote}|`;

      ABCJS.renderAbc(abcDiv1, abcNotation1, {
        visualTranspose: processedNote1.visualTranspose,
      });
    }
  } else {
    if (processedNote1.baseNote.includes(" ")) {
      var parts = processedNote1.baseNote.split(" ");
      var abcNotation1 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=bass
      [V:T1]|[${parts[0]}${parts[1]}|`;

      ABCJS.renderAbc(abcDiv1, abcNotation1, {
        visualTranspose: processedNote1.visualTranspose,
      });
    } else {
      var abcNotation1 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=bass
      [V:T1]|${processedNote1.baseNote}|`;

      ABCJS.renderAbc(abcDiv1, abcNotation1, {
        visualTranspose: processedNote1.visualTranspose,
      });
    }
  }

  if (keyIndice2 >= 39) {
    if (processedNote2.baseNote.includes(" ")) {
      var parts = processedNote2.baseNote.split(" ");
      var abcNotation2 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=treble
      [V:T1]|[${parts[0]}${parts[1]}]|`;

      ABCJS.renderAbc(abcDiv2, abcNotation2, {
        visualTranspose: processedNote2.visualTranspose,
      });
    } else {
      var abcNotation2 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=treble
      [V:T1]|${processedNote2.baseNote}|`;

      ABCJS.renderAbc(abcDiv2, abcNotation2, {
        visualTranspose: processedNote2.visualTranspose,
      });
    }
  } else {
    if (processedNote2.baseNote.includes(" ")) {
      var parts = processedNote2.baseNote.split(" ");
      var abcNotation2 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=bass
      [V:T1]|[${parts[0]}${parts[1]}]|`;

      ABCJS.renderAbc(abcDiv2, abcNotation2, {
        visualTranspose: processedNote2.visualTranspose,
      });
    } else {
      var abcNotation2 = `X:1
      L:1/4
      K:C 
      %%score (T1)
      V:T1 clef=bass
      [V:T1]|${processedNote2.baseNote}|`;

      ABCJS.renderAbc(abcDiv2, abcNotation2, {
        visualTranspose: processedNote2.visualTranspose,
      });
    }
  }
}
