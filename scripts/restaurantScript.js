/* Name: Austin Coburn
     Date Created: 01/28/20
     Last Edit: 01/31/20 */

function validateForm(form) {

    var errors = [];

    if(form.name.value == "") {
        errors.push("Name input is empty.");
    }

    var re = /^[\w ]+$/;

    if(!re.test(form.name.value) && form.name.value !== "") {
        errors.push("Name input uses invalid characters.");
    }

    if(form.email.value == "") {
        errors.push("Email input is empty.");
    }

    if(form.phone.value == "") {
        errors.push("Phone input is empty.");
    }

    if (errors.length > 0) {
        var msg = "Error(s):\n\n";
        for (var i=0; i < errors.length; i++){
            msg += errors[i] + "\n";
        }
        alert(msg);
        return false;
    }

    else {
        alert("Thank you for submitting valid information!")
    }
}