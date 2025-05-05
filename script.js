document.addEventListener("DOMContentLoaded", function() {
  // Join Form Submit Event
  document.getElementById("joinForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from reloading page

    // Form Validation
    const name = this.name.value;
    const age = this.age.value;
    const gender = this.gender.value;
    const locality = this.locality.value;
    const phone = this.phone.value;
    const email = this.email.value;

    // Validate form fields
    if (!name || !age || !gender || !locality || !phone || !email) {
      alert("Please fill out all fields.");
      return;
    }

    // Validate phone (basic check for a valid number)
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you ${name}! Your form has been submitted successfully. We'll contact you soon.`);
    this.reset(); // Clear the form
  });

  // Background Video Playback Rate
  const bgVid = document.getElementById("bgVid");
  bgVid.playbackRate = 0.75; // Adjust playback speed of video

  // BMI Calculator Function
  function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100; // Convert height to meters

    // Validation for valid weight and height input
    if (!weight || !heightCm || heightM <= 0) {
      document.getElementById('bmi-result').innerText = "Please enter valid values.";
      return;
    }

    // BMI Calculation
    const bmi = weight / (heightM * heightM);

    // Determine BMI Category
    const category = bmi < 18.5 ? "Underweight" :
                     bmi < 24.9 ? "Normal weight" :
                     bmi < 29.9 ? "Overweight" : "Obese";

    // Display BMI Result
    document.getElementById('bmi-result').innerText = `Your BMI: ${bmi.toFixed(2)} (${category})`;
  }

  // Optional: Attach calculateBMI function to a button click
  const calculateBMIButton = document.getElementById('calculateBMI');
  if (calculateBMIButton) {
    calculateBMIButton.addEventListener('click', calculateBMI);
  }
});
