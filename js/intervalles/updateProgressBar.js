// Mettez à jour la barre de progression et le pourcentage
function updateProgressBar(score, numberOfAnswers) {
  var progressBar = document.getElementById("scoreValue");
  var percentageDiv = document.getElementById("percentageValue");
  var successRate = Math.round((score / numberOfAnswers) * 100);

  progressBar.value = successRate;
  percentageDiv.textContent = successRate + "%";
}

var intervalResults = {};

// Créez une structure de données pour mapper les noms d'intervalle aux distances en demi-tons
const intervalToDistance = {
  Unisson: 0,
  "Seconde mineure": 1,
  "Seconde majeure": 2,
  "Tierce mineure": 3,
  "Tierce majeure": 4,
  Quarte: 5,
  "Quinte diminuée": 6,
  Quinte: 7,
  "Sixte mineure": 8,
  "Sixte majeure": 9,
  "Septième mineure": 10,
  "Septième majeure": 11,
};

// Fonction pour mettre à jour les résultats par intervalle
function updateIntervalResults(interval, isCorrect, userResponse) {
  if (!intervalResults[interval]) {
    intervalResults[interval] = { generated: 0, correct: 0, incorrectAnswers: [] };
  }
  intervalResults[interval].generated++;
  if (!isCorrect) {
    // Vérifier si la réponse incorrecte n'est pas déjà dans le tableau
    if (!intervalResults[interval].incorrectAnswers.includes(userResponse)) {
      intervalResults[interval].incorrectAnswers.push(userResponse);
    }
  } else {
    intervalResults[interval].correct++;
  }
}
// Fonction pour mettre à jour les barres de progression
function updateIntervalProgressBars() {
  console.log(intervalResults);
  // Parcourez les intervalles et créez une barre de progression pour chacun
  for (var interval in intervalResults) {
    var id = intervalToDistance[interval];

    var progressBar = document.getElementById("Value" + id);

    var percentageDiv = document.getElementById("percentageValue" + id);

    var confusedIntervals = document.getElementById("confusedIntervals" + id);

    var intervalData = intervalResults[interval];

    var successRate = Math.round(
      (intervalData.correct / intervalData.generated) * 100
    );

    progressBar.value = successRate;
    percentageDiv.textContent = successRate + "%";
    confusedIntervals.textContent = intervalData.incorrectAnswers;
  }
}
