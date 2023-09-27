<!DOCTYPE html>
<html>

<head>
    <style>
        .range-slider {
            position: relative;
            width: 200px;
            height: 35px;
            text-align: center;
        }

        .range-slider input {
            pointer-events: none;
            position: absolute;
            overflow: hidden;
            left: 0;
            top: 15px;
            width: 200px;
            outline: none;
            height: 18px;
            margin: 0;
            padding: 0;
        }

        .range-slider input::-webkit-slider-thumb {
            pointer-events: all;
            position: relative;
            z-index: 1;
            outline: 0;
        }

        .range-slider input::-moz-range-thumb {
            pointer-events: all;
            position: relative;
            z-index: 10;
            -moz-appearance: none;
            width: 9px;
        }

        .range-slider input::-moz-range-track {
            position: relative;
            z-index: -1;
            background-color: rgba(0, 0, 0, 1);
            border: 0;
        }

        .range-slider input:last-of-type::-moz-range-track {
            -moz-appearance: none;
            background: none transparent;
            border: 0;
        }

        .range-slider input[type=range]::-moz-focus-outer {
            border: 0;
        }

        .rangeValue {
            width: 30px;
        }

        .output {
            position: absolute;
            border: 1px solid #999;
            width: 40px;
            height: 30px;
            text-align: center;
            color: #999;
            border-radius: 4px;
            display: inline-block;
            font: bold 15px/30px Helvetica, Arial;
            bottom: 75%;
            left: 50%;
            transform: translate(-50%, 0);
        }

        .output.outputTwo {
            left: 100%;
        }

        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        input[type=range] {
            -webkit-appearance: none;
            background: none;
        }

        input[type=range]::-webkit-slider-runnable-track {
            height: 5px;
            border: none;
            border-radius: 3px;
            background: transparent;
        }

        input[type=range]::-ms-track {
            height: 5px;
            background: transparent;
            border: none;
            border-radius: 3px;
        }

        input[type=range]::-moz-range-track {
            height: 5px;
            background: transparent;
            border: none;
            border-radius: 3px;
        }

        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            border: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: #555;
            margin-top: -5px;
            position: relative;
            z-index: 10000;
        }

        input[type=range]::-ms-thumb {
            -webkit-appearance: none;
            border: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: #555;
            margin-top: -5px;
            position: relative;
            z-index: 10000;
        }

        input[type=range]::-moz-range-thumb {
            -webkit-appearance: none;
            border: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: #555;
            margin-top: -5px;
            position: relative;
            z-index: 10000;
        }

        input[type=range]:focus {
            outline: none;
        }

        .full-range,
        .incl-range {
            width: 100%;
            height: 5px;
            left: 0;
            top: 21px;
            position: absolute;
            background: #DDD;
        }

        .incl-range {
            background: gold;
        }
    </style>
</head>

<body>

    <section class="range-slider container">
        <span class="output outputOne"></span>
        <span class="output outputTwo"></span>
        <span class="full-range"></span>
        <span class="incl-range"></span>
        <input name="rangeOne" value="39" min="0" max="87" step="1" type="range">
        <input name="rangeTwo" value="51" min="0" max="87" step="1" type="range">
    </section>

    <script>
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

        var noteIndex1 = 0;
        var noteIndex2 = 0;


        var rangeOne = document.querySelector('input[name="rangeOne"]');
        var rangeTwo = document.querySelector('input[name="rangeTwo"]');
        var outputOne = document.querySelector('.outputOne');
        var outputTwo = document.querySelector('.outputTwo');
        var inclRange = document.querySelector('.incl-range');

        var updateView = function() {
            if (this.getAttribute('name') === 'rangeOne') {
                noteIndex1 = parseInt(this.value);
                console.log(noteIndex1);
                outputOne.innerHTML = gammeChromatique[noteIndex1];
                outputOne.style.left = noteIndex1 / (this.getAttribute('max') - this.getAttribute('min')) * 100 + '%';
            } else {
                noteIndex2 = parseInt(this.value);
                console.log(noteIndex2);
                outputTwo.style.left = noteIndex2 / (this.getAttribute('max') - this.getAttribute('min')) * 100 + '%';
                outputTwo.innerHTML = gammeChromatique[noteIndex2];
            }

            if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
                inclRange.style.width = (rangeOne.value - rangeTwo.value) / (rangeOne.getAttribute('max') - rangeOne.getAttribute('min')) * 100 + '%';
                inclRange.style.left = rangeTwo.value / (rangeOne.getAttribute('max') - rangeOne.getAttribute('min')) * 100 + '%';
            } else {
                inclRange.style.width = (rangeTwo.value - rangeOne.value) / (rangeOne.getAttribute('max') - rangeOne.getAttribute('min')) * 100 + '%';
                inclRange.style.left = rangeOne.value / (rangeOne.getAttribute('max') - rangeOne.getAttribute('min')) * 100 + '%';
            }
        };




        document.addEventListener('DOMContentLoaded', function() {
            updateView.call(rangeOne);
            updateView.call(rangeTwo);

            var rangeInputs = document.querySelectorAll('input[type="range"]');

            rangeInputs.forEach(function(input) {
                input.addEventListener('mouseup', function() {
                    this.blur();
                });

                input.addEventListener('mousedown', function() {
                    input.addEventListener('input', function() {
                        updateView.call(this);
                    });
                });
            });
        });
    </script>

</body>

</html>