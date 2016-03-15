/* Declare okToSubmitArray. Keeps track of the valid/invalid-status of the form input fields. */
var okToSubmitArray = [{firstname: false}, {lastname: false}, {address: false}, {postalcode: false}, {city: false}, {email: false}, {emailconfirm: false}, {password: false}, {passwordconfirm: false}, {consent: false}];

/* Define function onloadFunction. Invoked when document loads. */
function onloadFunctionJQuery () {
    
    $( "#user_form_jquery" ).submit(function ( event ) {
        alert("Välkommen som ny kund i vår Gårdsbutik!");
        event.preventDefault();
    });
    
    /* Get all input elements. */
    var firstname = $("#firstname_input")[0];
    var lastname = $("#lastname_input")[0];
    var address = $("#address_input")[0];
    var postalcode = $("#postalcode_input")[0];
    var city = $("#city_input")[0];
    var email = $("#email_input")[0];
    var emailconfirm = $("#emailconfirm_input")[0];
    var password = $("#password_input")[0];
    var passwordconfirm = $("#passwordconfirm_input")[0];
    var consent = $("#consent_input")[0];
        
    /* Place all input elements in array. */
    var elementArray = [firstname, lastname, address, postalcode, city, email, emailconfirm, password, passwordconfirm, consent];
    
    /* Create a variable to hold array length (for use in for-loop in order to speed up processing. */
    var arrayLength = elementArray.length;
    
    /* Loop through input elements and add the oninput event attribute (pointing to below "customOnInputFunction"-function) to all of them (except for the consent checkbox which gets an onchange event instead. */
    for (var i = 0 ; arrayLength > i ; i++) {
        var name = elementArray[i].name;
        if (name == "consent") {
            elementArray[i].setAttribute("onchange", "customOnInputFunctionJQuery('" + name + "', document.forms['userForm']['" + name + "'].value)");
        }
        else {
            elementArray[i].setAttribute("oninput", "customOnInputFunctionJQuery('" + name + "', document.forms['userForm']['" + name + "'].value)");
        }
    }
    
}

/* Define function customOnInputFunction. Invoked on user input for fields configured for validation. Takes element name and value typed in by user as parameters. */
function customOnInputFunctionJQuery(name, value) {
    
    /* Get current div-element for setting Bootstrap classes 'has-success' and 'has-error' (valid/invalid input). */
    var div = document.getElementById(name + "_div");
    var input = value;
    /* Get current i-elements for setting Bootstrap classes for glyphicons symbolizing valid/invalid input. */
    var i1 = document.getElementById(name + "_invalid");
    var i2 = document.getElementById(name + "_valid");
    /* Get current p-element for showing/hiding error message. */
    var p = document.getElementById(name + "_invalid_message");
    
    /* Send information to validation function. */
    realTimeValidationJQuery(name, div, input, i1, i2, p);
    
}

/* Define function realTimeValidation. Invoked by customOnInputFunction on user input. Takes user input and elements involved in validation process as parameters. */
function realTimeValidationJQuery(name, div, input, i1, i2, p) {
    
    /* Regular expressions for validating postalcodes, emails and passwords. */
    var regExpPcode = new RegExp(/^(\d{5}-\d{4}|\d{5})$/);
    var regExpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var regExpPword = new RegExp(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})$/);
    
    /* Choose validation type depending on which input field is being validated. */
    switch (name) {
        case "postalcode":
            /* Compare user input to regular expression. If it doesn't match use classes that style for invalid input, otherwise use clases that style for valid input. */
            if (!regExpPcode.test(input)) {
                // Bootstrap 'has-error' on div.
                div.className = "";
                div.className += "form-group has-feedback has-error";
                // Display Bootstrap 'glyphicon-remove'.
                i1.className = "";
                i1.className += "display-block glyphicon glyphicon-remove form-control-feedback";
                // Display error message. 
                p.className = "";
                p.className += "display-block help-block";
                // If the field was valid, but no longer is, hide Bootstrap 'glyphicon-ok'.
                if (i2.className.indexOf("display-block") != -1) {
                    i2.className = "";
                    i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(false, name);
            }
            else {
                // Bootstrap 'has-success' on div.
                div.className = "";
                div.className += "form-group has-feedback has-success";
                // Display Bootstrap 'glyphicon-ok'.
                i2.className = "";
                i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
                // If the field was invalid, but no longer is, hide Bootstrap 'glyphicon-remove'.
                if (i1.className.indexOf("display-block") != -1) {
                    i1.className = "";
                    i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
                }
                // If the field was invalid, but no longer is, hide error message.
                if (p.className.indexOf("display-block") != -1) {
                    p.className = "";
                    p.className += "display-none help-block";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(true, name);
            }
            break;
        case "email":
            /* Compare user input to regular expression. If it doesn't match use classes that style for invalid input, otherwise use clases that style for valid input. */
            if (!regExpEmail.test(input)) {
                // Bootstrap 'has-error' on div.
                div.className = "";
                div.className += "form-group has-feedback has-error";
                // Display Bootstrap 'glyphicon-remove'. 
                i1.className = "";
                i1.className += "display-block glyphicon glyphicon-remove form-control-feedback";
                // Display error message. 
                p.className = "";
                p.className += "display-block help-block";
                // If the field was valid, but no longer is, hide Bootstrap 'glyphicon-ok'.
                if (i2.className.indexOf("display-block") != -1) {
                    i2.className = "";
                    i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(false, name);
            }
            else {
                // Bootstrap 'has-success' on div.
                div.className = "";
                div.className += "form-group has-feedback has-success";
                // Display Bootstrap 'glyphicon-ok'.
                i2.className = "";
                i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
                // Display Bootstrap 'glyphicon-remove'.
                if (i1.className.indexOf("display-block") != -1) {
                    i1.className = "";
                    i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
                }
                // Display error message.
                if (p.className.indexOf("display-block") != -1) {
                    p.className = "";
                    p.className += "display-none help-block";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(true, name);
            }
            break;
        case "emailconfirm":
            /* Compare e-mail addresses and compare user input to regular expression. If they don't match use classes that style for invalid input, otherwise use clases that style for valid input. */
            var email = document.forms['userForm']['email'].value;
            if (input != email || !regExpEmail.test(input)) {
                // Bootstrap 'has-error' on div.
                div.className = "";
                div.className += "form-group has-feedback has-error";
                // Display Bootstrap 'glyphicon-remove'. 
                i1.className = "";
                i1.className += "display-block glyphicon glyphicon-remove form-control-feedback";
                // Display error message. 
                p.className = "";
                p.className += "display-block help-block";
                // If the field was valid, but no longer is, hide Bootstrap 'glyphicon-ok'.
                if (i2.className.indexOf("display-block") != -1) {
                    i2.className = "";
                    i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(false, name);
            }
            else {
                // Bootstrap 'has-success' on div.
                div.className = "";
                div.className += "form-group has-feedback has-success";
                // Display Bootstrap 'glyphicon-ok'.
                i2.className = "";
                i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
                // Display Bootstrap 'glyphicon-remove'.
                if (i1.className.indexOf("display-block") != -1) {
                    i1.className = "";
                    i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
                }
                // Display error message.
                if (p.className.indexOf("display-block") != -1) {
                    p.className = "";
                    p.className += "display-none help-block";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(true, name);
            }
            break;
        case "password":
            /* Compare user input to regular expression. If it doesn't match use classes that style for invalid input, otherwise use clases that style for valid input. */
            if (!regExpPword.test(input)) {
                // Bootstrap 'has-error' on div.
                div.className = "";
                div.className += "form-group has-feedback has-error";
                // Display Bootstrap 'glyphicon-remove'. 
                i1.className = "";
                i1.className += "display-block glyphicon glyphicon-remove form-control-feedback";
                // Display error message. 
                p.className = "";
                p.className += "display-block help-block";
                // If the field was valid, but no longer is, hide Bootstrap 'glyphicon-ok'.
                if (i2.className.indexOf("display-block") != -1) {
                    i2.className = "";
                    i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(false, name);
            }
            else {
                // Bootstrap 'has-success' on div.
                div.className = "";
                div.className += "form-group has-feedback has-success";
                // Display Bootstrap 'glyphicon-ok'.
                i2.className = "";
                i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
                // Display Bootstrap 'glyphicon-remove'.
                if (i1.className.indexOf("display-block") != -1) {
                    i1.className = "";
                    i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
                }
                // Display error message.
                if (p.className.indexOf("display-block") != -1) {
                    p.className = "";
                    p.className += "display-none help-block";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(true, name);
            }
            break;
        case "passwordconfirm":
            /* Compare passwords and compare user input to regular expression. If they don't match use classes that style for invalid input, otherwise use clases that style for valid input. */
            var pword = document.forms['userForm']['password'].value;
            if (input != pword || !regExpPword.test(input)) {
                // Bootstrap 'has-error' on div.
                div.className = "";
                div.className += "form-group has-feedback has-error";
                // Display Bootstrap 'glyphicon-remove'. 
                i1.className = "";
                i1.className += "display-block glyphicon glyphicon-remove form-control-feedback";
                // Display error message. 
                p.className = "";
                p.className += "display-block help-block";
                // If the field was valid, but no longer is, hide Bootstrap 'glyphicon-ok'.
                if (i2.className.indexOf("display-block") != -1) {
                    i2.className = "";
                    i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(false, name);
            }
            else {
                // Bootstrap 'has-success' on div.
                div.className = "";
                div.className += "form-group has-feedback has-success";
                // Display Bootstrap 'glyphicon-ok'.
                i2.className = "";
                i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
                // Display Bootstrap 'glyphicon-remove'.
                if (i1.className.indexOf("display-block") != -1) {
                    i1.className = "";
                    i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
                }
                // Display error message.
                if (p.className.indexOf("display-block") != -1) {
                    p.className = "";
                    p.className += "display-none help-block";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(true, name);
            }
            break;
        case "consent":
            /* Get checked/unchecked status of consent checkbox. */
            var consentCheckedStatus = document.getElementById("consent_input").checked;
            /* If checked, tell OkToSubmitArray. */
            if (consentCheckedStatus == true) {
                updateOkToSubmitArrayFunctionJQuery(true, name);
            }
            else {
                updateOkToSubmitArrayFunctionJQuery(false, name);
            }
            break;
        default:
            /* Make sure user input is not null or an empty string. If it is use classes that style for invalid input, otherwise use clases that style for valid input. */
            if (input == null || input == "") {
                // Bootstrap 'has-error' on div.
                div.className = "";
                div.className += "form-group has-feedback has-error";
                // Display Bootstrap 'glyphicon-remove'. 
                i1.className = "";
                i1.className += "display-block glyphicon glyphicon-remove form-control-feedback";
                // Display error message. 
                p.className = "";
                p.className += "display-block help-block";
                // If the field was valid, but no longer is, hide Bootstrap 'glyphicon-ok'.
                if (i2.className.indexOf("display-block") != -1) {
                    i2.className = "";
                    i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(false, name);
            }
            else {
                // Bootstrap 'has-success' on div.
                div.className = "";
                div.className += "form-group has-feedback has-success";
                // Display Bootstrap 'glyphicon-ok'.
                i2.className = "";
                i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
                // Display Bootstrap 'glyphicon-remove'.
                if (i1.className.indexOf("display-block") != -1) {
                    i1.className = "";
                    i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
                }
                // Display error message.
                if (p.className.indexOf("display-block") != -1) {
                    p.className = "";
                    p.className += "display-none help-block";
                }
                /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by SubmitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
                updateOkToSubmitArrayFunctionJQuery(true, name);
            }
            break;
    }
    
}

/* Define function updateOkToSubmitArrayFunction. Invoked by realTimeValidation-function when user input is received. Takes input element name and value typed in by user as parameters. */
function updateOkToSubmitArrayFunctionJQuery (value, name) {
    
    /* Loop through the objects in okToSubmitArray. */
    for (var object in okToSubmitArray) {
        /* Store current object in variable. */
        var okToSubmitObject = okToSubmitArray[object];
        /* Get object properties. */
        var okToSubmitProperty = Object.keys(okToSubmitObject);
        /* Convert property to string. */
        var okToSubmitPropertyString = okToSubmitProperty.toString();
        
        /* Compare string to element name. */
        if (okToSubmitPropertyString == name) {
            /* Loop through the object properties (there's only one key value pair). */
            for (var property in okToSubmitObject) {
                /* Set its value to the one received from realTimeValidation-function. */
                okToSubmitObject[property] = value;
            }
        }
        
        /* Loop through the objects in okToSubmitArray and set the availability of the submit-button accordingly. */
        for (var object in okToSubmitArray) {
            var okToSubmitObject = okToSubmitArray[object];
            var okToSubmitObjectProperty = Object.keys(okToSubmitObject);
           
            if (okToSubmitObject[okToSubmitObjectProperty] == false) {
                ToggleSubmitButtonStatusJQuery(true);
                break;
            }
            else {
                ToggleSubmitButtonStatusJQuery(false);
            }
        }
    }
    
}

/* Define function ToggleSubmitButtonStatus. Invoked by realTimeValidation-function when user input is received. Takes desired disabled/enabled status as parameter. */
function ToggleSubmitButtonStatusJQuery (status) {
    /* Set the disabled true/false status of the submit-button. */
    document.getElementById("submit_button_jquery").disabled = status;
}