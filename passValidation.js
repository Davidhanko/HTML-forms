let passedValidation = false;
let check = true;
function passValidation() {
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confirmPassword").value;
    if (pass1 !== pass2) {
        if(check) {
        let p = document.createElement("p");
        p.innerHTML = `<sup>*</sup>Passwords do not match`;
        document.querySelector(".error").appendChild(p);
        }
        passedValidation= false;
        passVad(passedValidation);
        check=false;
    }
    passedValidation=true;
    passVad(passedValidation);
}

function passVad(passed) {
    if(passed=== false) {
        event.preventDefault()
    }
    return false;
}