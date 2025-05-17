
function startBalloonsSequence() {
  const letters = message.split("");

  let delay = 0;
  letters.forEach((letter, i) => {
    setTimeout(() => {
      createBalloonWithLetter(letter);
    }, delay);
    delay += 700; // interval between each balloon
  });

  // After all are popped, show the typing message and button
  setTimeout(() => {
    showTypingMessage("Dear Dad, wishing you a day full of joy and love! ❤️");
    
    // Show Next Page button after typing
    setTimeout(() => {
      document.getElementById("nextPageButton").classList.remove("hide")
    }, 4000); // allow time for typing animation
  }, delay + 1000);
}

document.getElementById("nextPageButton").addEventListener("click", () => {
  window.location.href = "memories.html";
  console.log("clicked")
});
