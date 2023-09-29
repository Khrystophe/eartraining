<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Reconnaissance d'intervalles</title>

    <link rel="stylesheet" href="../assets/css/intervalles/intervalles.css" />
    <link rel="stylesheet" href="../assets/css/intervalles/slider.css" />
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="navbar-brand">
                Reconnaissance d'intervalles
            </div>

            <!-- Burger menu button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar items -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./accueil.php">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">À propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="main-container">
        <div class="score-container">
            <div>Taux de réussite global :</div>
            <div class="progress-wrapper">
                <div id="percentageValue" class="global-progress-value"></div>
                <progress class="progress-bar" id="scoreValue" value="0" max="100"></progress>
            </div>
        </div>

        <div id="response" class="music-score-response-container"></div>
        <div class="music-score-container">
            <div class="staves-container">
                <div>
                    <svg id="music-score" width="180" height="300"></svg>
                    <div class="notes">

                        <div class="note" id=note1></div>
                        <div class="note" id=note2></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="commands-container">
            <button id="playButton" class="btn play-ok command"><svg height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" fill="white" />
                </svg></button>
            <button id="repeatButton" class="btn repeat command"><svg height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" fill="white" />
                </svg></button>
            <button class="btn auto-reading command" id="auto-reading-button"><svg height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M380-300v-360l280 180-280 180ZM480-40q-108 0-202.5-49.5T120-228v108H40v-240h240v80h-98q51 75 129.5 117.5T480-120q115 0 208.5-66T820-361l78 18q-45 136-160 219.5T480-40ZM42-520q7-67 32-128.5T143-762l57 57q-32 41-52 87.5T123-520H42Zm214-241-57-57q53-44 114-69.5T440-918v80q-51 5-97 25t-87 52Zm449 0q-41-32-87.5-52T520-838v-80q67 6 128.5 31T762-818l-57 57Zm133 241q-5-51-25-97.5T761-705l57-57q44 52 69 113.5T918-520h-80Z" fill="white" />
                </svg></button>
            <button id="showReponseButton" class="btn show-reponse command"><svg height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" fill="white" />
                </svg></button>
            <button id=settingsButton class="btn settings command"> <svg height="24" viewBox="0 -960 960 960" width="24">
                    <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z" fill="white" />
                </svg> </button>
        </div>

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
    </div>

    <!-- Modal Container -->
    <div class="settings-modal" id="modalContainer">
        <!-- Modal Content -->
        <div class="close-modal-button">
            <div class="settings-modal-content">
                
                <h2>Réglages/Résultats</h2>

                <div class="setting-container">

                    <h2>Intervalles</h2>

                    <div class="selected-intervals-container">
                        <div class="selected-intervals-buttons-container">
                            <button class="btn interval selected-interval" id="select-interval-1">1</button>
                            <button class="btn interval" id="select-interval-2">2b</button>
                            <button class="btn interval" id="select-interval-3">2</button>
                            <button class="btn interval" id="select-interval-4">3b</button>
                            <button class="btn interval selected-interval" id="select-interval-5">3</button>
                            <button class="btn interval" id="select-interval-6">4</button>
                            <button class="btn interval" id="select-interval-7">5b</button>
                            <button class="btn interval selected-interval" id="select-interval-8">5</button>
                            <button class="btn interval" id="select-interval-9">6b</button>
                            <button class="btn interval" id="select-interval-10">6</button>
                            <button class="btn interval" id="select-interval-11">7b</button>
                            <button class="btn interval" id="select-interval-12">7</button>
                        </div>
                    </div>
                </div>

                <div class="setting-container">
                    <h2>Mode</h2>

                    <div class="modes-container">
                        <div class="modes-buttons-container">
                            <button class="btn mode selected-mode" id="ascending-mode-button">Ascendant</button>
                            <button class="btn mode" id="descending-mode-button">Descendant</button>
                            <button class="btn mode" id="harmonic-mode-button">Harmonique</button>
                            <button class="btn mode" id="random-mode-button">Aléatoire</button>
                        </div>
                    </div>
                </div>

                <div class="setting-container">
                    <h2>Tessiture</h2>

                    <div class="tessiture-slider-container">
                        <div class="tessiture-container">

                            <section class="range-slider container">
                                <span class="output1 outputOne"></span>
                                <span class="output2 outputTwo"></span>
                                <span class="full-range"></span>
                                <span class="incl-range"></span>
                                <input name="rangeOne" value="39" min="0" max="87" step="1" type="range">
                                <input name="rangeTwo" value="51" min="0" max="87" step="1" type="range">
                            </section>

                        </div>
                    </div>
                </div>

                <div class="setting-container" id="title-intervals-score">

                    <h2 >Résultats</h2>

                    <div class="intervals-score-container">

                        <div class="intervalsScore" id="interval0">
                            <div>Taux de réussite Unisson :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue0" class="progress-value"></div>
                                <progress class="progress-bar" id="Value0" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText0" class="confusedText">Intervalles confondus avec Unisson :</div>
                            <div id="confusedIntervals0" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval1">
                            <div>Taux de réussite Seconde mineure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue1" class="progress-value"></div>
                                <progress class="progress-bar" id="Value1" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText1" class="confusedText">Intervalles confondus avec Seconde mineure :</div>
                            <div id="confusedIntervals1" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval2">
                            <div>Taux de réussite Seconde majeure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue2" class="progress-value"></div>
                                <progress class="progress-bar" id="Value2" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText2" class="confusedText">Intervalles confondus avec Seconde majeure :</div>
                            <div id="confusedIntervals2" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval3">
                            <div>Taux de réussite Tierce mineure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue3" class="progress-value"></div>
                                <progress class="progress-bar" id="Value3" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText3" class="confusedText">Intervalles confondus avec Tierce mineure :</div>
                            <div id="confusedIntervals3" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval4">
                            <div>Taux de réussite Tierce majeure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue4" class="progress-value"></div>
                                <progress class="progress-bar" id="Value4" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText4" class="confusedText">Intervalles confondus avec Tierce majeure :</div>
                            <div id="confusedIntervals4" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval5">
                            <div>Taux de réussite Quarte :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue5" class="progress-value"></div>
                                <progress class="progress-bar" id="Value5" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText5" class="confusedText">Intervalles confondus avec Quarte :</div>
                            <div id="confusedIntervals5" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval6">
                            <div>Taux de réussite Quinte diminuée :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue6" class="progress-value"></div>
                                <progress class="progress-bar" id="Value6" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText6" class="confusedText">Intervalles confondus avec Quinte diminuée :</div>
                            <div id="confusedIntervals6" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval7">
                            <div>Taux de réussite Quinte :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue7" class="progress-value"></div>
                                <progress class="progress-bar" id="Value7" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText7" class="confusedText">Intervalles confondus avec Quinte :</div>
                            <div id="confusedIntervals7" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval8">
                            <div>Taux de réussite Sixte mineure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue8" class="progress-value"></div>
                                <progress class="progress-bar" id="Value8" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText8" class="confusedText">Intervalles confondus avec Sixte mineure :</div>
                            <div id="confusedIntervals8" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval9">
                            <div>Taux de réussite Sixte majeure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue9" class="progress-value"></div>
                                <progress class="progress-bar" id="Value9" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText9" class="confusedText">Intervalles confondus avec Sixte majeure :</div>
                            <div id="confusedIntervals9" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval10">
                            <div>Taux de réussite Septième mineure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue10" class="progress-value"></div>
                                <progress class="progress-bar" id="Value10" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText10" class="confusedText">Intervalles confondus avec Septième mineure :</div>
                            <div id="confusedIntervals10" class="confusedIntervals"></div>
                        </div>

                        <div class="intervalsScore" id="interval11">
                            <div>Taux de réussite Septième majeure :</div>
                            <div class="progress-wrapper">
                                <div id="percentageValue11" class="progress-value"></div>
                                <progress class="progress-bar" id="Value11" value="0" max="100"></progress>
                            </div>
                            <div id="confusedText11" class="confusedText">Intervalles confondus avec Septième majeure :</div>
                            <div id="confusedIntervals11" class="confusedIntervals"></div>
                        </div>

                    </div>
                </div>

            </div>
            <span class="btn close-modal" id="closeButton"><svg height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" fill="white" />
                </svg></span>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/abcjs/6.2.2/abcjs-basic-min.min.js" integrity="sha512-REXLcx385NL3ZWosam5LzLJoA0AkfeVdW94IQURSM/Gl6EyrS0hS3LtqR094d00lsicEVAprWA5SUTD5oljapg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>

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
    <script src="../js/intervalles/selectedIntervalsButtons.js"></script>
    <script src="../js/intervalles/modeButtons.js"></script>
    <script src="../js/intervalles/autoReadingButton.js"></script>
    <script src="../js/intervalles/updateProgressBar.js"></script>
    <script src="../js/intervalles/modal.js"></script>
    <script src="../js/intervalles/responseText.js"></script>

</body>

</html>