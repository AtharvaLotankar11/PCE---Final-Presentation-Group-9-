document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  // Get form values
  const fullName = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const grade = document.getElementById("grade").value;

  // Check if all fields are filled
  if (!fullName || !username || !password || !grade) {
      alert("All fields are required!");
      return;
  }

  // Save the user's data in localStorage
  const user = {
      fullName: fullName,
      username: username,
      password: password, // In a real application, never store passwords in plain text!
      grade: grade
  };

  localStorage.setItem(username, JSON.stringify(user));

  // Show success message and reset the form
  alert("Registration successful! You can now sign in.");
  event.target.reset();
});
