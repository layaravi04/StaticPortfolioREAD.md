// Simple form submission handler with feedback
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "#f87171"; // red
      return;
    }
    feedback.textContent = "Sending message...";
    feedback.style.color = "#fbbf24"; // yellow

    setTimeout(() => {
      feedback.textContent = "Thank you for reaching out! I'll get back to you soon.";
      feedback.style.color = "#34d399"; // green
      form.reset();
    }, 1500);
  });
});
