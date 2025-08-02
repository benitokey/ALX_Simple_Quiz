function checkAnswer() {
    const correctAnswer = "4";

    // Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If nothing is selected, return early with no feedback
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
