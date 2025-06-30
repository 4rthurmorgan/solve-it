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
    const doorStatus = document.getElementById('doorStatus');

    const correctAnswer = answers[puzzle];

    if (!correctAnswer) {
        result.innerHTML = "⚠️ Error: Puzzle not found.";
        return;
    }

    if (input === correctAnswer) {
        result.innerHTML = "✅ Correct! The door is opening...";
        doorStatus.innerHTML = "🚪 The door is open!";
        doorStatus.style.color = "lightgreen";

        setTimeout(() => {
            if (puzzle === "puzzle5") {
                window.location.href = "index.html";
            } else {
                const nextNumber = parseInt(puzzle.replace("puzzle", "")) + 1;
                window.location.href = `puzzle${nextNumber}.html`;
            }
        }, 1500);
    } else {
        result.innerHTML = "❌ Incorrect! The door stays locked.";
        doorStatus.innerHTML = "🔒 The door is locked!";
        doorStatus.style.color = "red";
    }
}
