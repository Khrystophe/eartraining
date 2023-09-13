var enharmonicMap = {
  Bb: "A#",
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
};

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
        baseNote = parts.join(" ");
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
