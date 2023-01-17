let passedValidation = false;
let check =0;
function passValidation() {
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confirmPassword").value;
    if (pass1 !== pass2) {
        if(check === 0) {
        let p = document.createElement("p");
        p.innerHTML = `<sup>*</sup>Passwords do not match`;
        document.querySelector(".error").appendChild(p);
        }
        passedValidation=false;
        passVad(passedValidation);
        check=check+1;
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