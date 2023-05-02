const password = document.getElementById("password");
const confirmation = document.getElementById("confirm_password");

const errorElement = document.getElementById("error-message");

const changeColors = () => {
    if(password.value === confirmation.value) {
        errorElement.style.display = "none";
        password.style.borderColor = 'green';
        confirmation.style.borderColor = 'green';
    } else {
        errorElement.style.display = "block";
        password.style.borderColor = 'red';
        confirmation.style.borderColor = 'red';
    }
};


password.addEventListener("input", () => {
    changeColors();
});

confirmation.addEventListener("input", () => {
    changeColors();
});

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    if(password.value !== confirmation.value){
        e.preventDefault();
        return false;
    }
});