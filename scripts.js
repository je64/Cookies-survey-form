function goTo() {
  window.location.href = "index2.html"; // Replace with the URL of the next webpage
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('survey-form');
  const nextButton = document.getElementById('next');
  nextButton.disabled = true;

  form.addEventListener('input', function () {
    let allValid = true;
    form.querySelectorAll('input[required], select[required]').forEach(function (input) {
      if (!input.value) {
        allValid = false;
      }
    });

    nextButton.disabled = !allValid;
    
  });
});
