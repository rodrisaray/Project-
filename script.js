// scripts.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}, for your message!`); // Show a thank you message
});
