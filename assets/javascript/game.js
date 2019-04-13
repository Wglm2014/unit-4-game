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
        if (theNumber === 0) { play(); console.log(theNumber); }
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
        var counter = 30;
        var interval = setInterval(function () {
            var n1 = Math.floor(Math.random() * 102) + 19;
            $("#number").text(n1);
            counter--;
            if (counter === 0) {
                clearInterval(interval);
            }
        }
            , 30);
        theNumber = Math.floor(Math.random() * 102) + 19;
        $("#number").text(theNumber);


        for (i = 0; i < 4; i++) {
            userNumber[i] = Math.floor(Math.random() * 12) + 1;
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
    };
});