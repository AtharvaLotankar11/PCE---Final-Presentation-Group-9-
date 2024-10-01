document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  // Get input values from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve the user data from localStorage
  const storedUser = localStorage.getItem(username);

  if (storedUser) {
      const user = JSON.parse(storedUser); // Parse the stored data back to an object

      // Check if the password matches
      if (user.password === password) {
          alert("Sign in successful! Welcome, " + user.fullName);
          // Redirect the user to the homepage or dashboard
          window.location.href = "index.html"; // Change to your desired page
      } else {
          alert("Incorrect password. Please try again.");
      }
  } else {
      alert("User not found. Please check your username or register.");
  }
});
