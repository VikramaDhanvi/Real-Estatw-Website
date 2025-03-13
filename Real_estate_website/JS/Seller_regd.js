function validateGST() {
    var gstNumber = document.getElementById('gstNumber').value.trim();
    var gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    var validationResult = document.getElementById('gstValidationResult');
  
    if (gstPattern.test(gstNumber)) {
        validationResult.innerText = ''; // Clear validation message if GST number is valid
        validationResult.style.color = 'inherit'; // Reset text color to default
        return true; // Allow form submission
    } else {
        validationResult.innerText = 'Invalid GST Number';
        validationResult.style.color = 'red';
        return false; // Prevent form submission
    }
}

function validateForm() {
    if (!validateGST()) {
        alert("Invalid GST Number");
        return false; // Prevent form submission
    }
    // Other form validation can go here if needed
    return true; // Allow form submission
}
function validateNumber() {
    var number = document.getElementById('Number').value; // Corrected to 'Number'
    var numberPattern = /^[0-9]{10}$/;
    var validationResult = document.getElementById('numberValidationResult');
    if (numberPattern.test(number)) {
        // Validation succeeded
        return true;
    } else {
        // Validation failed
        alert("Enter Valid Mobile Number");
        return false;
    }
}
function validatePassword(){
    var password = document.getElementById('password').value;
    var c_password = document.getElementById('c_password').value;

    if(password == c_password){
        return true;
    }
    else{
        alert("Passwords do not match");
        return false;
    }
}