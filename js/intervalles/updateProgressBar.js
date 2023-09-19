// Mettez à jour la barre de progression et le pourcentage
function updateProgressBar(score, numberOfAnswers) {
    var progressBar = document.getElementById("scoreValue");
    var percentageDiv = document.getElementById("percentageValue");
    var successRate = Math.round((score / numberOfAnswers) * 100);
    
    progressBar.value = successRate;
    percentageDiv.textContent = successRate + "%";
}
