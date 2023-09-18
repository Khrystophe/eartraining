
var autoReadingButton = document.getElementById("auto-reading-button");

autoReadingButton.addEventListener("click", function () {
    if (autoReading) {
        autoReadingButton.classList.remove("on");
        autoReading = false;
    } else {
        autoReadingButton.classList.add("on");
        autoReading = true;
    }
   console.log(autoReading);
});
