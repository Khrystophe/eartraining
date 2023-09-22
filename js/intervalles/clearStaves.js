// Fonction pour supprimer les portées existantes
function clearStaves() {
    var response = document.getElementById("response");
    var musicScore = document.getElementById("music-score");
    // var musicScore2 = document.getElementById("music-score2");
    var note1Div = document.getElementById("note1");
    var note2Div = document.getElementById("note2");
  
    // Supprime tous les éléments enfants des divs correspondantes
    while (response.firstChild) {
      response.removeChild(response.firstChild);
    }
  
    while (musicScore.firstChild) {
      musicScore.removeChild(musicScore.firstChild);
    }
  
    // while (musicScore2.firstChild) {
    //   musicScore2.removeChild(musicScore2.firstChild);
    // }
  
    while (note1Div.firstChild) {
      note1Div.removeChild(note1Div.firstChild);
    }
  
    while (note2Div.firstChild) {
      note2Div.removeChild(note2Div.firstChild);
    }
  }