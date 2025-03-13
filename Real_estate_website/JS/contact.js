function composeEmail() {
    var email = 'vikramadhanvi_paduchuri@srmap.edu.in';
    var message = document.getElementById('message').value;
    var subject = "Interested in your platform";
    var optionIds = ["opt0", "opt1", "opt2"];
    var name = document.getElementById('name').value;
    var selectedOptionId = document.getElementById("selection").value;
  
    if (selectedOptionId === 'opt0') {
        alert('Please select a valid purpose.');
        return;
    } 
    else if (selectedOptionId === 'opt1') {
        message = "Hello sir, my name is " + name + ". I am interested in renting your properties with the following details:\n\n" + message;
    }
    else if (selectedOptionId === 'opt2') {
      message = "Hello sir, my name is " + name + ". I am interested in Buying your properties with the following details:\n\n" + message;
  }
  
    var encodedMessage = encodeURIComponent(message);
    var encodedSubject = encodeURIComponent(subject);
  
    var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + encodedSubject + "&body=" + encodedMessage;
  
    window.open(gmailUrl, '_blank');
  }
  