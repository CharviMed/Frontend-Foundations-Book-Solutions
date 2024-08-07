// JavaScript for form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();
    
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Basic validation
    if (!name || !email || !message) {
        formMessage.textContent = 'All fields are required!';
        return;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address!';
        return;
    }

    // If all validations pass
    formMessage.textContent = 'Thank you for your message!';

    // Optionally, you can submit the form data here
    // e.g., using fetch() or XMLHttpRequest
});
