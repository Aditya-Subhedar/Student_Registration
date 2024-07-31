// Form validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate username
    if (!username) {
        alert('Username cannot be empty');
        return;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address');
        return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be 10 digits long');
        return;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@&$#])[A-Za-z\d@&$#]{7,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 7 characters long, with at least one capital letter, one digit, and one special character from (&, $, #, @)');
        return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    alert('Form submitted successfully');
});

// Change background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// jQuery operations
$(document).ready(function() {
    // Change button text using jQuery
    $('#changeButtonText').text('New Button Text');

    // Set background image using jQuery CSS property
    $('body').css('background-image', 'url("background.jpg")');

    // Access HTML form data using jQuery
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        var formData = $(this).serialize();
        console.log('Form Data:', formData);
    });

    // Add attribute using jQuery
    $('#phone').attr('placeholder', 'Enter 10-digit phone number');
});
