// when i click to the button concat the number in input field with link like this https://wa.me/number then redirect to the link
// the number should be like this expression ^01[0-2,5]{1}[0-9]{8}$
// if the number is not valid show error under input field message
// if the number is valid redirect to the link
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


