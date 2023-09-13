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
   
  