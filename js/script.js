function checkAnswer(puzzle) {
    const userInput = document.getElementById('answer').value.trim().toLowerCase();
    const result = document.getElementById('result');
    const feedbackImage = document.getElementById('feedbackImage');

    let correctAnswer = '';

    switch (puzzle) {
        case 'puzzle1':
            correctAnswer = '243';
            break;
        case 'puzzle2':
            correctAnswer = 'help';
            break;
        case 'puzzle3':
            correctAnswer = '2';
            break;
        case 'puzzle4':
            correctAnswer = '123';
            break;
        case 'puzzle5':
            correctAnswer = 'done';
            break;
        default:
            correctAnswer = '';
    }

    if (userInput === correctAnswer) {
        result.innerHTML = '✅ Correct! Moving to next room...';
        feedbackImage.src = 'images/correct.png';
        setTimeout(() => {
            if (puzzle === 'puzzle5') {
                window.location.href = 'index.html';
            } else {
                const nextPuzzle = 'puzzle' + (parseInt(puzzle.slice(-1)) + 1) + '.html';
                window.location.href = nextPuzzle;
            }
        }, 1500);
    } else {
        result.innerHTML = '❌ Incorrect! Try again.';
        feedbackImage.src = 'images/wrong.png';
    }
}
