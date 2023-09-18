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

// Pour pouvoir rejouer l'intervale
var initialNote1 = "";
var initialNote2 = "";

// pour afficher message
var interval = "";
var octave = 0;

// Affichage de la portée seulement si une note à été généré et que l'utilisateur a donné une réponse ou révélé la réponse
var displayStaves = false;

// Variable pour suivre le mode de lecture actuel
var currentMode = "";

// Pour afficher le score
var score = 0;
 // Création div score
var scoreDiv = document.createElement("div");
document.getElementById("scoreValue").appendChild(scoreDiv);
scoreDiv.textContent = score + "%";

// Pour reset score après avoir utilisé le bouton de réponse
var answerRevealed = false;

var autoReading = false;

var numberOfAnswers = 0;

console.log(score);
console.log(numberOfAnswers);