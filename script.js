document.getElementById("joinForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from reloading page

  // Form Validation
  const name = this.name.value;
  const age = this.age.value;
  const gender = this.gender.value;
  const locality = this.locality.value;
  const phone = this.phone.value;
  const email = this.email.value;

  if (!name || !age || !gender || !locality || !phone || !email) {
      alert("Please fill out all fields.");
      return;
  }

  alert(`Thank you ${name}! Your form has been submitted successfully. We'll contact you soon.`);
  this.reset(); // Clear the form
});
