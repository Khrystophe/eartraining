// Affichage des notes sur la portée et de leur nom

function displayNotesOnStave(note1, note2) {
  var vf = new Vex.Flow.Factory({ renderer: { elementId: "music-score" } });
  var score = vf.EasyScore();
  var system = vf.System();

  // // Création des divs pour les portées et le nom des notes
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
        "Persévérez ! La réponse était :\n" +
        octave +
        " oct. + " +
        interval +
        " " +
        currentMode;
    } else if (octave >= 1 && interval == "Unisson") {
      responsetext.textContent =
        "Persévérez ! La réponse était :\n" + octave + " oct. " + currentMode;
    } else {
      responsetext.textContent =
        "Persévérez ! La réponse était :\n" + interval + " " + currentMode;
    }
  }

  var textNote1 = document.createElement("div");
  document.getElementById("note1").appendChild(textNote1);

  var textNote2 = document.createElement("div");
  document.getElementById("note2").appendChild(textNote2);

  // Pour calculer l'odre d'affcihage des portées
  var indice1 = gammeChromatique.indexOf(note1);
  var indice2 = gammeChromatique.indexOf(note2);

  console.log(indice1);
  console.log(indice2);
  // Pour déterminer quelle clé utiliser
  var keyIndice1 = "";
  var keyIndice2 = "";

  // // Dictionnaires pour le traitement des notes à affciher sur la portée
  var processedNote1 = {};
  var processedNote2 = {};

  // Pour afficher le noms des notes correspondantes à la portée suivant le mode et afficher clé de sol ou fa
  if (currentMode === "ascendante") {
    if (indice1 < indice2) {
      processedNote1 = processNote(note1);
      keyIndice1 = indice1;
      textNote1.textContent = processedNote1.name;
      processedNote2 = processNote(note2);
      keyIndice2 = indice2;
      textNote2.textContent = processedNote2.name;
    } else {
      processedNote1 = processNote(note2);
      keyIndice1 = indice2;
      textNote1.textContent = processedNote1.name;
      processedNote2 = processNote(note1);
      keyIndice2 = indice1;
      textNote2.textContent = processedNote2.name;
    }
  } else if (currentMode === "descendante") {
    if (indice1 > indice2) {
      processedNote1 = processNote(note1);
      keyIndice1 = indice1;
      textNote1.textContent = processedNote1.name;
      processedNote2 = processNote(note2);
      keyIndice2 = indice2;
      textNote2.textContent = processedNote2.name;
    } else {
      processedNote1 = processNote(note2);
      keyIndice1 = indice2;
      textNote1.textContent = processedNote1.name;
      processedNote2 = processNote(note1);
      keyIndice2 = indice1;
      textNote2.textContent = processedNote2.name;
    }
  } else if (currentMode === "harmonique" || currentMode === "repété") {
    processedNote1 = processNote(note1);
    keyIndice1 = indice1;
    textNote1.textContent = processedNote1.name;
    processedNote2 = processNote(note2);
    keyIndice2 = indice2;
    textNote2.textContent = processedNote2.name;
  }

  if (keyIndice1 >= 39 && keyIndice2 >= 39) {
    if (
      processedNote1.baseNote.includes(" ") &&
      processedNote2.baseNote.includes(" ")
    ) {
      var parts1 = processedNote1.baseNote.split(" ");
      var parts2 = processedNote2.baseNote.split(" ");

      console.log(parts1);
      console.log(parts2);

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + parts2[0], { stem: "up" })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + parts2[1], { stem: "down" })
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(parts1[0] + "/1, ")),
              score.voice(score.notes(parts1[1] + "/1, ")),
              score.voice(score.notes(parts2[0] + "/1, ")),
              score.voice(score.notes(parts2[1] + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      }
    } else if (processedNote1.baseNote.includes(" ")) {
      var parts1 = processedNote1.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + processedNote2.baseNote, {
                  stem: "up",
                })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + processedNote2.baseNote, {
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(parts1[0] + "/1, ")),
              score.voice(score.notes(parts1[1] + "/1, ")),
              score.voice(score.notes(processedNote2.baseNote + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      }
    } else if (processedNote2.baseNote.includes(" ")) {
      var parts2 = processedNote2.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/2, " + parts2[0], {
                  stem: "up",
                })
              ),
              score.voice(
                score.notes(processedNote1.baseNote + "/2, " + parts2[1], {
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(processedNote1.baseNote + "/1, ")),
              score.voice(score.notes(parts2[0] + "/1, ")),
              score.voice(score.notes(parts2[1] + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      }
    } else {
      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes(
                  processedNote1.baseNote + "/2, " + processedNote2.baseNote
                )
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(processedNote1.baseNote + "/1, ")),
              score.voice(score.notes(processedNote2.baseNote + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [score.voice(score.notes("D3/1/r, ", { clef: "bass" }))],
          })
          .addClef("bass");
      }
    }
  } else if (keyIndice1 >= 39 && keyIndice2 < 39) {
    console.log(keyIndice1);
    console.log(keyIndice2);
    if (
      processedNote1.baseNote.includes(" ") &&
      processedNote2.baseNote.includes(" ")
    ) {
      var parts1 = processedNote1.baseNote.split(" ");
      var parts2 = processedNote2.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + "B4/2/r, ", { stem: "up" })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + "B4/2/r, ", { stem: "down" })
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes("D3/2/r, " + parts2[0] + "/2, ", {
                  clef: "bass",
                  stem: "up",
                })
              ),
              score.voice(
                score.notes("D3/2/r, " + parts2[1] + "/2, ", {
                  clef: "bass",
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(parts1[0] + "/1, ")),
              score.voice(score.notes(parts1[1] + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(score.notes(parts2[0] + "/1, ", { clef: "bass" })),
              score.voice(score.notes(parts2[1] + "/1, ", { clef: "bass" })),
            ],
          })
          .addClef("bass");
      }
    } else if (processedNote1.baseNote.includes(" ")) {
      var parts1 = processedNote1.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + "B4/2/r, ", { stem: "up" })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + "B4/2/r, ", { stem: "down" })
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes("D3/2/r, " + processedNote2.baseNote + "/2, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(parts1[0] + "/1, ")),
              score.voice(score.notes(parts1[1] + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote2.baseNote + "/1, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      }
    } else if (processedNote2.baseNote.includes(" ")) {
      var parts2 = processedNote2.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/2, " + "B4/2/r, ")
              ),
            ],
          })
          .addClef("treble");

        system.addStave({
          voices: [
            score.voice(
              score.notes("D3/2/r, " + parts2[0] + "/2, ", {
                clef: "bass",
                stem: "up",
              })
            ),
            score.voice(
              score.notes("D3/2/r, " + parts2[1] + "/2, ", {
                clef: "bass",
                stem: "down",
              })
            ),
          ],
        });
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(processedNote1.baseNote + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts2[0] + "/1, ", {
                  clef: "bass",
                })
              ),
              score.voice(
                score.notes(parts2[1] + "/1, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      }
    } else {
      system
        .addStave({
          voices: [
            score.voice(
              score.notes(processedNote1.baseNote + "/2, " + "B4/2/r, ")
            ),
          ],
        })
        .addClef("treble");

      system
        .addStave({
          voices: [
            score.voice(
              score.notes("D3/2/r, " + processedNote2.baseNote + "/2, ", {
                clef: "bass",
              })
            ),
          ],
        })
        .addClef("bass");
    }
  } else if (keyIndice1 < 39 && keyIndice2 >= 39) {
    console.log(keyIndice1);
    console.log(keyIndice2);
    if (
      processedNote1.baseNote.includes(" ") &&
      processedNote2.baseNote.includes(" ")
    ) {
      var parts1 = processedNote1.baseNote.split(" ");
      var parts2 = processedNote2.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes("B4/2/r, " + parts2[0] + "/2, ", { stem: "up" })
              ),
              score.voice(
                score.notes("B4/2/r, " + parts2[1] + "/2, ", { stem: "down" })
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + "D3/2/r, ", {
                  clef: "bass",
                  stem: "up",
                })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + "D3/2/r, ", {
                  clef: "bass",
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(parts2[0] + "/1, ")),
              score.voice(score.notes(parts2[1] + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/1, ", { clef: "bass", stem: "up" })
              ),
              score.voice(
                score.notes(parts1[1] + "/1, ", { clef: "bass", stem: "down" })
              ),
            ],
          })
          .addClef("bass");
      }
    } else if (processedNote1.baseNote.includes(" ")) {
      var parts1 = processedNote1.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes("B4/2/r, " + processedNote2.baseNote + "/2, ")
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + "D3/2/r, ", {
                  clef: "bass",
                  stem: "up",
                })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + "D3/2/r, ", {
                  clef: "bass",
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(processedNote2.baseNote + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/1, ", { clef: "bass", stem: "up" })
              ),
              score.voice(
                score.notes(parts1[1] + "/1, ", { clef: "bass", stem: "down" })
              ),
            ],
          })
          .addClef("bass");
      }
    } else if (processedNote2.baseNote.includes(" ")) {
      var parts2 = processedNote2.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes("B4/2/r, " + parts2[0] + "/2, ", { stem: "up" })
              ),
              score.voice(
                score.notes("B4/2/r, " + parts2[1] + "/2, ", { stem: "down" })
              ),
            ],
          })
          .addClef("treble");

        system.addStave({
          voices: [
            score.voice(
              score.notes(processedNote1.baseNote + "/2, " + "D3/2/r, ", {
                clef: "bass",
              })
            ),
          ],
        })
        .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(parts2[0] + "/1, ")),
              score.voice(score.notes(parts2[1] + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/1, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      }
    } else {
      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [
              score.voice(
                score.notes("B4/2/r, " + processedNote2.baseNote + "/2, ")
              ),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/2, " + "D3/2/r, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [
              score.voice(score.notes(processedNote2.baseNote + "/1, ")),
            ],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/1, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      }
    }
  } else {
    if (
      processedNote1.baseNote.includes(" ") &&
      processedNote2.baseNote.includes(" ")
    ) {
      var parts1 = processedNote1.baseNote.split(" ");
      var parts2 = processedNote2.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + parts2[0], {
                  clef: "bass",
                  stem: "up",
                })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + parts2[1], {
                  clef: "bass",
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(score.notes(parts1[0] + "/1, ", { clef: "bass" })),
              score.voice(score.notes(parts1[1] + "/1, ", { clef: "bass" })),
              score.voice(score.notes(parts2[0] + "/1, ", { clef: "bass" })),
              score.voice(score.notes(parts2[1] + "/1, ", { clef: "bass" })),
            ],
          })
          .addClef("bass");
      }
    } else if (processedNote1.baseNote.includes(" ")) {
      var parts1 = processedNote1.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(parts1[0] + "/2, " + processedNote2.baseNote, {
                  clef: "bass",
                  stem: "up",
                })
              ),
              score.voice(
                score.notes(parts1[1] + "/2, " + processedNote2.baseNote, {
                  clef: "bass",
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(score.notes(parts1[0] + "/1, ", { clef: "bass" })),
              score.voice(score.notes(parts1[1] + "/1, ", { clef: "bass" })),
              score.voice(
                score.notes(processedNote2.baseNote + "/1, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      }
    } else if (processedNote2.baseNote.includes(" ")) {
      var parts2 = processedNote2.baseNote.split(" ");

      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/2, " + parts2[0], {
                  clef: "bass",
                  stem: "up",
                })
              ),
              score.voice(
                score.notes(processedNote1.baseNote + "/2, " + parts2[1], {
                  clef: "bass",
                  stem: "down",
                })
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/1, ", {
                  clef: "bass",
                })
              ),
              score.voice(score.notes(parts2[0] + "/1, ", { clef: "bass" })),
              score.voice(score.notes(parts2[1] + "/1, ", { clef: "bass" })),
            ],
          })
          .addClef("bass");
      }
    } else {
      if (currentMode != "harmonique") {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(
                  processedNote1.baseNote + "/2, " + processedNote2.baseNote,
                  { clef: "bass" }
                )
              ),
            ],
          })
          .addClef("bass");
      } else {
        system
          .addStave({
            voices: [score.voice(score.notes("B4/1/r, "))],
          })
          .addClef("treble");

        system
          .addStave({
            voices: [
              score.voice(
                score.notes(processedNote1.baseNote + "/1, ", {
                  clef: "bass",
                })
              ),
              score.voice(
                score.notes(processedNote2.baseNote + "/1, ", {
                  clef: "bass",
                })
              ),
            ],
          })
          .addClef("bass");
      }
    }
  }

  vf.draw();
  system.addConnector();
}
