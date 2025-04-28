function toggleAnswer(element) {
    const answer = element.nextElementSibling; // This gets the <p> tag that follows the clicked question
    const isVisible = answer.style.display === "block"; // Check if the answer is currently visible

    if (isVisible) {
        answer.style.display = "none"; // Collapse
    } else {
        answer.style.display = "block"; // Expand
    }
}
