function validateEmail() {
  // Get the input field and email value
  var emailInput = document.getElementById('email');
  var email = emailInput.value;

  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Get the error span element
  var errorSpan = document.getElementById('error');

  // Check if the email is valid
  if (emailRegex.test(email)) {
    // Email is valid
    // Reset the border color and error message
    emailInput.classList.remove('red');
    errorSpan.classList.add('hidden');
    emailInput.value = ''; // Clear the email input field
  } else {
    // Email is not valid
    // Set the border color to red and display error message
    emailInput.classList.add('red');
    errorSpan.classList.remove('hidden');
    errorSpan.textContent = 'Please provide a valid email address.';
  }
}

// Get the "Notify Me" button element and attach a click event listener
var notifyButton = document.querySelector('.btn');
notifyButton.addEventListener('click', validateEmail);
