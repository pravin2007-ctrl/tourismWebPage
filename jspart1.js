let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");
let loginPage = document.querySelector(".loginPage");

// Toggle login page visibility
user.addEventListener("click", function () {
    loginPage.classList.toggle("active1");
});

// Handle login button click
loginBtn.addEventListener("click", function (){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    if (email.value == "" || password.value == "") {
        alert("Please Fill Details");
    } else {
        alert("You Logged In");
        loginPage.classList.toggle("active1");
    }
});


// Handle booking form submission
submit.addEventListener("click", function ()
{
    if (placeName.value== "") {
        alert("Fill Form");
    } else {
        alert(placeName.value + " tour booked");
    }
});
