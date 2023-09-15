<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Reconnaissance d'intervalles</title>

    <link rel="stylesheet" href="../assets/css/intervalles.css" />
</head>

<body>
    <h1>Reconnaissance d'intervalles</h1>

    <div class="score-container">
        <div>Score :</div>
        <div id="scoreValue"></div>
    </div>

    <div class="music-score-container">
        <div id="response" class="music-score-response-container"></div>
        <div class="staves-container">
            <div class="width">
                <div class="note" id=note1></div>
                <div id="music-score1" class="music-score"></div>
            </div>
            <div class="width">
                <div class="note" id=note2></div>
                <div id="music-score2" class="music-score"></div>
            </div>
        </div>
    </div>

    <div class="tessiture-slider-container">
        <div class="tessiture-container">
            <h2>Choisissez la tessiture :</h2>
        <div>
            <label for="tessiture">De :</label>
            <span id="tessitureValue"></span>
        </div>
        <input type="range" id="tessiture" class="form-range" name="tessiture" min="0" max="87" step="1">
        <div>
            <label for="tessiture2">à :</label>
            <span id="tessitureValue2"></span>
        </div>
        <input type="range" id="tessiture2" class="form-range" name="tessiture2" min="0" max="87" step="1">
    </div>
</div>


    <div class="play-show-container">
        <button id="playButton" class="btn play-ok">Jouer un intervalle</button>
        <button id="showReponseButton" class="btn ">Voir la réponse</button>
    </div>

    <h2>Choisissez la réponse :</h2>

    <div class="response-container">
        <div class="response-buttons-container">
            <?php
            // Tableau associatif des réponses possibles et de leur distance en demi-tons
            $reponses = [
                '1' => [0, 12, 24, 36, 48, 60, 72, 84],
                '2b' => [1, 13, 25, 37, 49, 61, 73, 85],
                '2' => [2, 14, 26, 38, 50, 62, 74, 86],
                '3b' => [3, 15, 27, 39, 51, 63, 75, 87],
                '3' => [4, 16, 28, 40, 52, 64, 76, 88],
                '4' => [5, 17, 29, 41, 53, 65, 77],
                '5b' => [6, 18, 30, 42, 54, 66, 78],
                '5' => [7, 19, 31, 43, 55, 67, 79],
                '6b' => [8, 20, 32, 44, 56, 68, 80],
                '6' => [9, 21, 33, 45, 57, 69, 81],
                '7b' => [10, 22, 34, 46, 58, 70, 82],
                '7' => [11, 23, 35, 47, 59, 71, 83],
            ];

            // Générer les boutons de réponse
            foreach ($reponses as $reponse => $distances) {
                // Convertir le tableau $distances en une chaîne de caractères avec des virgules
                $distancesString = implode(', ', $distances);

                echo '<button class="btn reponse" data-distance="' . $distancesString . '">' . $reponse . '</button>';
            }

            ?>
        </div>
    </div>

    <div class="repeat-container">
        <button id="repeatButton" class="btn ">Répéter l'intervalle</button>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/abcjs/6.2.2/abcjs-basic-min.min.js" integrity="sha512-REXLcx385NL3ZWosam5LzLJoA0AkfeVdW94IQURSM/Gl6EyrS0hS3LtqR094d00lsicEVAprWA5SUTD5oljapg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="../js/intervalles/variables.js"></script>
    <script src="../js/intervalles/displayNotesOnStave.js"></script>
    <script src="../js/intervalles/processNote.js"></script>
    <script src="../js/intervalles/playSound.js"></script>
    <script src="../js/intervalles/generateNewNotes.js"></script>
    <script src="../js/intervalles/tessiture.js"></script>
    <script src="../js/intervalles/clearStaves.js"></script>
    <script src="../js/intervalles/playButton.js"></script>
    <script src="../js/intervalles/playModes.js"></script>
    <script src="../js/intervalles/reponseButtons.js"></script>
    <script src="../js/intervalles/checkAnswer.js"></script>
    <script src="../js/intervalles/getIntervalName.js"></script>
    <script src="../js/intervalles/repeatButton.js"></script>
    <script src="../js/intervalles/showReponseButton.js"></script>


</html>