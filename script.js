document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("error-msg");

  let errors = [];

  if (name.length < 3) errors.push("Name must be at least 3 characters.");
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Enter a valid email.");
  if (!/^\d{10}$/.test(phone)) errors.push("Phone number must be 10 digits.");
  if (password.length < 6) errors.push("Password must be at least 6 characters.");
  if (message.length < 10) errors.push("Message must be at least 10 characters.");

  if (errors.length > 0) {
    errorMsg.innerHTML = errors.join("<br>");
  } else {
    errorMsg.innerHTML = "✅ Form submitted successfully!";
    errorMsg.style.color = "green";
    this.reset();
  }
});
