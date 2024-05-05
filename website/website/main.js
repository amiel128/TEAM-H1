document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here, you can perform client-side validation if needed

    // For demonstration, let's just log the username and password to the console
    console.log("Username: " + username);
    console.log("Password: " + password);

    // After this, you can perform further actions like AJAX requests to authenticate the user
    // and display the pictures accordingly.
});
