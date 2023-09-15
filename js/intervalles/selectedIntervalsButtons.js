var selectedIntervals = {
    "interval-1": [0, 12, 24, 36, 48, 60, 72, 84],
    "interval-2": [1, 13, 25, 37, 49, 61, 73, 85],
    "interval-3": [2, 14, 26, 38, 50, 62, 74, 86],
    "interval-4": [3, 15, 27, 39, 51, 63, 75, 87],
    "interval-5": [4, 16, 28, 40, 52, 64, 76, 88],
    "interval-6": [5, 17, 29, 41, 53, 65, 77],
    "interval-7": [6, 18, 30, 42, 54, 66, 78],
    "interval-8": [7, 19, 31, 43, 55, 67, 79],
    "interval-9": [8, 20, 32, 44, 56, 68, 80],
    "interval-10": [9, 21, 33, 45, 57, 69, 81],
    "interval-11": [10, 22, 34, 46, 58, 70, 82],
    "interval-12": [11, 23, 35, 47, 59, 71, 83],
  };
  
  // Fonction pour générer de nouvelles notes et les mettre à jour dans le HTML
  var intervalKey = "";
  var intervalIndices = "";
  
  // Ajouter des gestionnaires d'événements aux boutons de sélection
  for (let i = 1; i <= 12; i++) {
    const selectButton = document.getElementById(`select-interval-${i}`);
    selectButton.addEventListener("click", function () {
      intervalKey = `interval-${i}`;
      console.log(intervalKey);
      console.log(selectedIntervals[intervalKey]);
  
      // Vérifier si selectedIntervals[intervalKey] n'est pas déjà présent dans intervalIndices
      if (!intervalIndices.includes(selectedIntervals[intervalKey])) {
        // Ajouter l'intervalle sélectionné à intervalIndices avec une virgule si nécessaire
        if (intervalIndices.length > 0) {
          intervalIndices += ",";
        }
        intervalIndices += selectedIntervals[intervalKey];
      } else {
        // Suppression de l'intervalle sélectionné de intervalIndices
        intervalIndices = intervalIndices.replace(
          selectedIntervals[intervalKey],
          ""
        );
        // Supprimer les virgules en trop s'il y en a
        intervalIndices = intervalIndices.replace(/,{2,}/g, ",");
        // Supprimer une virgule en trop en début de chaîne s'il y en a
        intervalIndices = intervalIndices.replace(/^,/, "");
        // Supprimer une virgule en trop en fin de chaîne s'il y en a
        intervalIndices = intervalIndices.replace(/,$/, "");
      }
  
      console.log(intervalIndices);
    });
  }