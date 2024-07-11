const form = document.querySelector('form');
const input = document.querySelector('input[name="number"]');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = input.value.trim(); // Trim the input value
  const regex = /^01[0-2,5]{1}[0-9]{8}$/;

  // Clear previous error message
  errorMessage.textContent = '';

  if (regex.test(number)) {
    window.open(`https://wa.me/+2${number}`, '_blank');
  } else {
    errorMessage.textContent = 'Please Enter a Valid Number';
  }
});


