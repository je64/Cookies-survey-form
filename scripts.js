document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('survey-form');
  const nextButton = document.getElementById('next');

  function validateForm() {
    let allValid = true;
    form.querySelectorAll('input[required], select[required]').forEach(function (input) {
      if (!input.value) {
        allValid = false;
      }
    });
    return allValid;
  }

  form.addEventListener('input', function () {
    nextButton.disabled = !validateForm();
  });

  nextButton.addEventListener('click', function (event) {
    if (validateForm()) {
      window.location.href = "index2.html"; // Replace with the URL of the next webpage
    } else {
      alert('Please fill out all required fields.');
    }
  });
});
