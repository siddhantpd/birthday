// Function to check the entered password
function checkPassword() {
  const password = document.getElementById("password").value;
  const correctPassword = "vishal"; // Replace with your actual password

  if (password === correctPassword) {
    // Redirect to the next page (replace 'nextpage.html' with your actual next page)
    window.location.href = "nextpage.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

window.onload = function () {
  // Start the truck animation on page load
  const truck = document.getElementById("truck");
  truck.style.animationPlayState = "running"; // Ensure animation starts

  // Display cake after the truck reaches the end
  const cake = document.getElementById("cake");
  setTimeout(() => {
    cake.style.display = "block"; // Display the cake after truck has finished moving
  }, 10000); // Wait for the truck animation to finish (10s)
};

window.onload = function () {
  const truck = document.getElementById("truck");
  const cake = document.getElementById("cake");
  const nextPageButton = document.getElementById("nextPageButton");

  // Listen for the completion of the cake animation
  cake.addEventListener("animationend", function () {
    // Display the next page button after cake animation ends
    nextPageButton.style.display = "block";
  });
};

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
      document.getElementById("nextPageButton").style.display = "block";
    }, 4000); // allow time for typing animation
  }, delay + 1000);
}

document.getElementById("nextPageButton").addEventListener("click", () => {
  window.location.href = "cake.html";
  console.log("clicked")
});
