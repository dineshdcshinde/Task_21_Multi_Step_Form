document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const progressSteps = document.querySelectorAll(".step");
  let currentStep = 0;

  // Function to update form visibility and progress bar
  function updateFormSteps() {
    steps.forEach((step, index) => {
      if (index === currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    progressSteps.forEach((step, index) => {
      if (index <= currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }

  // Add event listeners to next buttons
  nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
      currentStep++;
      if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
      }
      updateFormSteps();
    });
  });

  // Add event listeners to previous buttons
  prevBtns.forEach((button) => {
    button.addEventListener("click", () => {
      currentStep--;
      if (currentStep < 0) {
        currentStep = 0;
      }
      updateFormSteps();
    });
  });

  // Initial update to show the first step
  updateFormSteps();
});
