"use strict";

const getScores = () => {
    const input = prompt("Enter test scores separated by commas.");

    if (input === null) {
        alert("No scores were entered.");
        return;
    }

    if (input.trim() === "") {
        alert("No scores were entered.");
        return;
    }
    const scores = input.split(",");
    const numbers = scores.map(Number);
    const lowScore = Math.min(...numbers);
    const highScore = Math.max(...numbers);
    let total = 0;

    for (let score of numbers) {
        total += score;
    }

    const average = (total / numbers.length).toFixed(1);
    alert(
        "Scores: " + scores.join(", ") + "\n" +
        "Low score = " + lowScore + "\n" +
        "High score = " + highScore + "\n" +
        "Average score = " + average
    );
};

getScores();