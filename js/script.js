// Script to allow Header name to go to the homepage on click 

document.getElementById('nameHeader').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
});
