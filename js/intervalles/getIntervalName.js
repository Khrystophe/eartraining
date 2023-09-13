// Fonction pour obtenir le nom de l'interval en fonction de la distance en demi-tons
function getIntervalName(distance) {
    const intervals = {
      0: "Unisson",
      1: "Seconde mineure",
      2: "Seconde majeure",
      3: "Tierce mineure",
      4: "Tierce majeure",
      5: "Quarte",
      6: "Quinte diminuée",
      7: "Quinte",
      8: "Sixte mineure",
      9: "Sixte majeure",
      10: "Septième mineure",
      11: "Septième majeure",
    };
  
    // Vérifiez si la distance est un multiple de 12
    for (let distanceBase in intervals) {
      distanceBase = parseInt(distanceBase);
      if (distance % 12 === distanceBase) {
        return intervals[distanceBase];
      }
    }
  
    return "Interval inconnu";
  }