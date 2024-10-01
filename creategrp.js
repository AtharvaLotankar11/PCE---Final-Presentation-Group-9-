// creategrp.js

// Event listener for creating a group
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
  const groupName = document.getElementById('groupname').value;
  const course = document.getElementById('course').value;
  const subject = document.getElementById('subject').value;
  const description = document.getElementById('description').value;
  const meetingTime = document.getElementById('meetingtime').value;

  // Retrieve existing groups from localStorage
  let groups = JSON.parse(localStorage.getItem('studyGroups')) || [];

  // Create new group object
  const newGroup = {
    groupName,
    course,
    subject,
    description,
    meetingTime,
  };

  // Add the new group to the list
  groups.push(newGroup);

  // Store updated groups back in localStorage
  localStorage.setItem('studyGroups', JSON.stringify(groups));

  // Notify the user
  alert('Group created successfully!');

  // Clear form
  document.querySelector('form').reset();
});
