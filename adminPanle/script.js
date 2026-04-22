function adminLogin() {

    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;

    if (user === adminCredential.username && pass === adminCredential.password) {
        

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "productAdd.html";

    } else {
        alert("Invalid username or password.");
    }
}


let adminCredential = {
    username: "admin",
    password: "admin123"
}