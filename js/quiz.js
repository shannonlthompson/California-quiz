function print(message) {
    document.write(message);
}

function californiaQuiz() {
    var questionsArray = [
        ["What city is the capital of California?", "sacramento"],
        ["In what year did California become a state?", 1850],
        ["What's the largest city in California?", "los angeles"],
        ["How many million people live in California?", "39"]
    ];
    console.log("first item: " + questionsArray[0][0]);
    var answeredRightMsg = "<h2>You got these questions right:</h2>";
    var answeredWrongMsg = "<h2>You got these questions wrong:</h2>";
    var rightAnswers = 0;
    var wrongAnswers = 0;

    for (var i=0; i < 4; i += 1) {
        var answer = (prompt(questionsArray[i][0])).toLowerCase();
        if (answer == questionsArray[i][1]){
            rightAnswers += 1;
            answeredRightMsg += "<p>" + rightAnswers + ". " + questionsArray[i][0] + "</p>";
        } else {
            wrongAnswers += 1;
            answeredWrongMsg += "<p>" + wrongAnswers + ". " + questionsArray[i][0] + "</p>" + "<p>The correct answer was " + wrongAnswers + questionsArray[i][1] + ".</p>";
        }
    }
    document.write("<h2>You got " + rightAnswers + " question(s) correct.</h2>");
    if (rightAnswers != 0) {
        print(answeredRightMsg);
    }
    if (wrongAnswers != 0) {
        print(answeredWrongMsg);
    }
}
californiaQuiz();