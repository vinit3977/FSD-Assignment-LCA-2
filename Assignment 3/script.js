
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
        nameError.textContent = "Name should contain only letters";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Phone validation
    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit mobile number";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
        passwordError.textContent =
            "Include uppercase, lowercase, number and special character";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMessage.textContent = "Registration successful!";

        form.reset();
    }
});
