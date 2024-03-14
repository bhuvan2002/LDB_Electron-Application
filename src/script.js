document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();

    if (!name || !phone || !email) {
        alert('Please fill in all fields.');
    } else {
        // Redirect to new page
        window.location.href = "newpage.html";
    }
});

