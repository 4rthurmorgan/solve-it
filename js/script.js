// ✅ Puzzle answers stored in one place
const answers = {
    puzzle1: "243",
    puzzle2: "help",
    puzzle3: "m",
    puzzle4: "123",
    puzzle5: "done"
};

function checkAnswer(puzzle) {
    const input = document.getElementById('answer').value.trim().toLowerCase();
    const result = document.getElementById('result');
    const feedbackImage = document.getElementById('feedbackImage');

    const correctAnswer = answers[puzzle];

    if (!correctAnswer) {
        result.innerHTML = "⚠️ Error: Puzzle not found.";
        return;
    }

    if (input === correctAnswer) {
        // ✅ Correct answer logic
        result.innerHTML = "✅ Correct! Door opening...";
        feedbackImage.src = "images/open.png";

        setTimeout(() => {
            if (puzzle === "puzzle5") {
                window.location.href = "index.html"; // End of game
            } else {
                const nextNumber = parseInt(puzzle.replace("puzzle", "")) + 1;
                window.location.href = `puzzle${nextNumber}.html`;
            }
        }, 1500);
    } else {
        // ❌ Wrong answer logic
        result.innerHTML = "❌ Incorrect! The door stays locked.";
        feedbackImage.src = "images/lock.png";
    }
}
