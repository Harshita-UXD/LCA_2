document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const className = document.getElementById('class').value.trim();
  const board = document.getElementById('board').value;

  // Check if all fields are filled
  if (!name || !email || !password || !confirmPassword || !className || !board) {
    alert('Please fill all the fields!');
    return;
  }



  // Password match check
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  

  const userData = {
    name,
    email,
    password,
    class: className,
    board,
  };

  // Check if user data already exists in localStorage
  const existingUserData = localStorage.getItem('userSignupData');
  if (existingUserData) {
    alert('User data already exists. Please log in.');
    return;
  }

  // Store data in localStorage
  localStorage.setItem('userSignupData', JSON.stringify(userData));

  // Debugging: Check if data was stored correctly
  console.log('User data stored:', userData);

  // Show success alert and redirect
  alert('Signup successful! Data stored locally.');
  window.location.href = "allChapters.html"; // Redirect to another page after successful signup
});
