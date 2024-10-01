// findgrp.js

// Event listener for finding a group
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const course = document.getElementById('course').value;
  const subject = document.getElementById('subject').value;
  const location = document.getElementById('location').value;

  // Retrieve the groups from localStorage
  let groups = JSON.parse(localStorage.getItem('studyGroups')) || [];

  // Filter groups based on the search criteria
  const filteredGroups = groups.filter(group => 
    group.course.toLowerCase() === course.toLowerCase() && 
    group.subject.toLowerCase() === subject.toLowerCase()
  );

  // Display the results
  const resultsContainer = document.getElementById('group-results');
  resultsContainer.innerHTML = '';

  if (filteredGroups.length > 0) {
    filteredGroups.forEach(group => {
      resultsContainer.innerHTML += `
        <div class="group">
          <h3>${group.groupName}</h3>
          <p><strong>Course:</strong> ${group.course}</p>
          <p><strong>Subject:</strong> ${group.subject}</p>
          <p><strong>Description:</strong> ${group.description}</p>
          <p><strong>Meeting Time:</strong> ${group.meetingTime}</p>
        </div><br>
      `;
    });
  } else {
    resultsContainer.innerHTML = '<p>No groups found matching the criteria.</p>';
  }
});
