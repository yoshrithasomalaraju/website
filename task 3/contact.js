const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
  } else {
    // Submit form or perform other actions (e.g., AJAX request)
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    contactForm.reset(); // Clear form fields
  }
});
