$(document).ready(function () {
    var theNumber = 0;
    var userNumber = [];
    var wins = 0;
    var losses = 0;
    var score = 0;
    $("#play").on("click", function () {
        play();
    });

    $(".image").on("click", function (event) {
        if (theNumber === 0) { play(); }
        var idImage = this.id;
        score += userNumber[idImage];
        $("#score").text(score);
        if (score === theNumber) {
            wins++;
            $("#won").text(wins);
            resetVars(false);
        } else if (score > theNumber) {
            losses++;
            $("#lost").text(losses);
            resetVars(false);
        }
    });

    $("#reset").on("click", function () {
        resetVars(true);
    });

    function play() {
        resetVars(false);
        theNumber = getRandom(19, 120);
        $("#number").text(theNumber);


        for (i = 0; i < 4; i++) {
            userNumber[i] = getRandom(1, 12);
        }
    }
    function resetVars(tf) {
        theNumber = 0;
        userNumber = [];
        score = 0;
        $("#score").html("0");
        $("#number").text("")
        if (tf) {
            wins = 0;
            losses = 0;
            $("#won").text("0");
            $("#lost").text("0");
        }
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
});