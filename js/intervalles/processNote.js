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
    var name="";

    // Octave
    var octave = parseInt(matches[2]);

    // Vérifiez si la note est enharmonique et remplacez-la si nécessaire en utilisant l'objet enharmonicMap
    if (enharmonicMap[baseNote]) {
     
      name = enharmonicMap[baseNote] + octave + "/" + baseNote + octave;
      baseNote = enharmonicMap[baseNote] + octave + " " + baseNote + octave;
      console.log(name);

      // Si la note ne contient pas d'altération
    } else {
      name = baseNote + octave;
      baseNote += octave;
    }

    return {
      baseNote: baseNote,
      name: name
    };
  }
  return {
    baseNote: note,
    name: note
  }; 
}
