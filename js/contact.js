// Script to provide immediate feedback to the user upon form submission without reloading the page and clear the form for new input

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    this.reset();
});
