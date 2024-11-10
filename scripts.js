document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('survey-form');
  const nextButton = document.getElementById('next');

  function validateForm() {
    let allValid = true;
    form.querySelectorAll('input[required], select[required]').forEach(function (input) {
      const errorElement = input.nextElementSibling;
      if (!input.value) {
        allValid = false;
        errorElement.textContent = 'This field is required.';
        errorElement.style.color = 'red';
      } else {
        errorElement.textContent = '';
      }
    });
    return allValid;
  }

  form.addEventListener('input', function () {
    nextButton.disabled = !validateForm();
  });

  nextButton.addEventListener('click', function () {
    validateForm();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('survey-form');
  const nextButton = document.getElementById('next');

  function validateForm() {
    let allValid = true;
    form.querySelectorAll('input[required], select[required]').forEach(function (input) {
      let errorElement = input.nextElementSibling;
      // Ensure there's an error element available
      if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('span');
        errorElement.classList.add('error-message');
        input.insertAdjacentElement('afterend', errorElement);
      }
      if (!input.value) {
        allValid = false;
        errorElement.textContent = 'This field is required.';
        errorElement.style.color = 'red';
      } else {
        errorElement.textContent = '';
      }
    });
    return allValid;
  }

  form.addEventListener('input', function () {
    nextButton.disabled = !validateForm();
  });

  nextButton.addEventListener('click', function () {
    validateForm();
  });
});
