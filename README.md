# INTERNSHIPTASK6

# ✅ Task 6: Form Styling and Validation  
**Cognifyz Technologies Internship - Web Development**

---

## 🎯 Objective:
Improve usability and data integrity by designing visually appealing forms and implementing client-side validation for user input.

---

## 📄 Project Overview:
This task includes a professional contact form built using HTML, CSS, and JavaScript. The form is styled with modern responsive design, and includes real-time client-side validation to ensure users submit correct data before submission.

---

## 🧰 Features Implemented:

- 🌟 Responsive layout and elegant UI with modern CSS
- 🧾 Floating label effect for inputs
- 🔐 Validation rules:
  - Name must be at least 3 characters
  - Email must be in proper format (e.g., `example@mail.com`)
  - Phone number must be exactly 10 digits
  - Password must be at least 6 characters
  - Message must be at least 10 characters
- 🛑 Inline error messages for invalid input
- ✅ Success message when form is valid and submitted
- 🌓 Optional dark/light mode toggle (optional enhancement)
- 🎨 Clean animations and visual effects

---

## 🗂️ Folder Structure:

│
├── index.html 👉 Main HTML structure
├── styles.css 👉 All styling (form, layout, animation)
├── script.js 👉 JavaScript logic for form validation
└── README.md 👉 This documentation file



---

## 💡 How It Works:

1. The user inputs data into the form.
2. On clicking **Submit**, JavaScript validates all fields.
3. If there are errors:
   - Errors are shown beneath the form in red text.
4. If all input is valid:
   - A green success message is displayed.
   - The form fields reset.

---

## 🧪 Example Validation Rules in `script.js`:
```js
if (name.length < 3) errors.push("Name must be at least 3 characters.");
if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Enter a valid email.");
if (!/^\d{10}$/.test(phone)) errors.push("Phone number must be 10 digits.");
if (password.length < 6) errors.push("Password must be at least 6 characters.");
if (message.length < 10) errors.push("Message must be at least 10 characters.");
