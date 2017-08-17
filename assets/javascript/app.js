$(document).ready(function() {
  var correctCount = 0;
  var wrongCount = 0;
  var unansweredCount = 0;

  $("#start").click(function() {
    // Shows The Questions on Button click.
    $(".game").show();
    $("#start").hide();
    // Initializes the Timer and starts it once button is clicked.
    var count = 50;
    var counter = setInterval(timer, 1000);
    // funciton that decreases time by 1 second.
    function timer() {
      count--;
      if (count === 0) {
        stop();
      }

      document.getElementById("timer").innerHTML = count + " secs";
    }
  });

  function stop() {
    // Clears Timer hides questions and shows results
    clearInterval(timer);
    $(".gameResults").show();
    $(".game").hide();
    $("#timer").hide();
    $("#start").hide();
    // Calls The timeUp funciton for the results.
    timeUp();
  }

  function timeUp() {
    var Q1 = $('input:radio[name="firstQuestion"]:checked').val();
    var Q2 = $('input:radio[name="secondQuestion"]:checked').val();
    var Q3 = $('input:radio[name="thirdQuestion"]:checked').val();
    var Q4 = $('input:radio[name="fourthQuestion"]:checked').val();

    if (Q1 == undefined) {
      unansweredCount++;
    } else if (Q1 == "option1") {
      correctCount++;
    } else {
      wrongCount++;
    }


    if (Q2 == undefined) {
      unansweredCount++;
    } else if (Q2 == "option3") {
      correctCount++;
    } else {
      wrongCount++;
    }


    if (Q3 == undefined) {
      unansweredCount++;
    } else if (Q3 == "option1") {
      correctCount++;
    } else {
      wrongCount++;
    }


    if (Q4 == undefined) {
      unansweredCount++;
    } else if (Q4 == "option2") {
      correctCount++;
    } else {
      wrongCount++;
    }



    $('#correct_answers').html(correctCount);
    $('#wrong_answers').html(wrongCount);
    $('#unanswered').html(unansweredCount);
  }



});
