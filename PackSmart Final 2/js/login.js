let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let loginBox = document.getElementById("login");
let signupBox = document.getElementById("signup");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    // formSection.classList.add("form-section-move");
    loginBox.classList.add("hidden");
    signupBox.classList.remove("hidden");
    // loginBox.setAttribute("class", "hidden");
    // signupBox.setAttribute("class", "signup-box");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    // formSection.classList.remove("form-section-move");
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
    // loginBox.setAttribute("class", "login-box");
    // signupBox.setAttribute("class", "hidden");

});

function loggIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Your E-mail Is: " + email);
    console.log("Your Password Is: " + password);


    // localStorage.setItem("loggedIn", "true");
    // localStorage.setItem("userEmail", email);

    alert("Logged in successfully!");

}

function signedUp() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    console.log("Your E-mail Is: " + email);
    console.log("Your Password Is: " + password);


    // Here, you can perform any necessary signup validation.
    // For demonstration purposes, we'll store the signup data in local storage.
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);

    alert("Signed up successfully!"); // You can replace this with a redirect to a dashboard or another page.
}
