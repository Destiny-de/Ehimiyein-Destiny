(function() {
  emailjs.init("xsUFr6400Nt72pQLf"); // Replace with your actual Public Key
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  status.textContent = "Sending...";

  emailjs.sendForm('service_6oesnf9', 'template_uo3iwwo', this)
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    }, (error) => {
      console.error("EmailJS Error:", error);
      status.textContent = "❌ Failed to send message.";
    });
});
