<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Exercice de reconnaissance d'intervalles</title>

    <link rel="stylesheet" href="../assets/css/intervales.css" />
</head>

<body>
    <h1>Reconnaissance d'intervalles</h1>

    <div id="response"></div>
    <div class="music-score-container">



        <div class="width">

            <div class="note" id=note1></div>
            <div id="music-score1" class="music-score"></div>
        </div>
        <div class="width">

            <div class="note" id=note2></div>
            <div id="music-score2" class="music-score"></div>
        </div>
    </div>

    <!-- <div style="height: 250px;"></div> -->


    <div>
        <h2>Choisissez la tessiture :</h2>
        <label for="tessiture">De :</label>
        <span id="tessitureValue"></span>
        <input type="range" id="tessiture" class="form-range" name="tessiture" min="0" max="87" step="1">
        <label for="tessiture2">à :</label>
        <span id="tessitureValue2"></span>
        <input type="range" id="tessiture2" class="form-range" name="tessiture2" min="0" max="87" step="1">
    </div>



    <button id="playButton" class="btn btn-primary">Jouer un intervalle</button>

    <div>
        <h2>Choisissez la réponse correcte :</h2>
        <?php
        // Tableau associatif des réponses possibles et de leur distance en demi-tons
        $reponses = [
            'Unisson/Octave' => [0, 12, 24, 36, 48, 60, 72, 84],
            'Seconde mineure' => [1, 13, 25, 37, 49, 61, 73, 85],
            'Seconde majeure' => [2, 14, 26, 38, 50, 62, 74, 86],
            'Tierce mineure' => [3, 15, 27, 39, 51, 63, 75, 87],
            'Tierce majeure' => [4, 16, 28, 40, 52, 64, 76, 88],
            'Quarte' => [5, 17, 29, 41, 53, 65, 77],
            'Quinte diminuée' => [6, 18, 30, 42, 54, 66, 78],
            'Quinte' => [7, 19, 31, 43, 55, 67, 79],
            'Sixte mineure' => [8, 20, 32, 44, 56, 68, 80],
            'Sixte majeure' => [9, 21, 33, 45, 57, 69, 81],
            'Septième mineure' => [10, 22, 34, 46, 58, 70, 82],
            'Septième majeure' => [11, 23, 35, 47, 59, 71, 83],
        ];

        // Générer les boutons de réponse
        foreach ($reponses as $reponse => $distances) {
            // Convertir le tableau $distances en une chaîne de caractères avec des virgules
            $distancesString = implode(', ', $distances);

            echo '<button class="btn reponse" data-distance="' . $distancesString . '">' . $reponse . '</button>';
        }

        ?>
    </div>

    <!-- Bouton pour répéter l'intervalle -->
    <button id="repeatButton" class="btn btn-secondary">Répéter l'intervalle</button>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/abcjs/6.2.2/abcjs-basic-min.min.js" integrity="sha512-REXLcx385NL3ZWosam5LzLJoA0AkfeVdW94IQURSM/Gl6EyrS0hS3LtqR094d00lsicEVAprWA5SUTD5oljapg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="../js/intervales.js"></script>


</html>