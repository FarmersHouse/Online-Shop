/*jslint node: true */
'use strict';

/* Declare okToSubmitArray. Keeps track of the valid/invalid-status of the form input fields. */
var okToSubmitArray = [{firstname: false}, {lastname: false}, {address: false}, {postalcode: false}, {city: false}, {email: false}, {emailconfirm: false}, {password: false}, {passwordconfirm: false}, {consent: false}];

/* Define function submitFunction. Invoked by form onsubmit-attribute when user submits form. */
function submitFunctionJS() {

    window.alert("Välkommen som ny kund i vår Gårdsbutik!");
    return true;

}

/* Define function toggleSubmitButtonStatus. Invoked by realTimeValidation-function when user input is received. Takes desired disabled/enabled status as parameter. */
function toggleSubmitButtonStatusJS(status) {
    
    /* Set the disabled true/false status of the submit-button. */
    document.getElementById("submit_button").disabled = status;
    
}

/* Define function updateOkToSubmitArrayFunction. Invoked by realTimeValidation-function when user input is received. Takes input element name and value typed in by user as parameters. */
function updateOkToSubmitArrayFunctionJS(value, name) {

    /* Loop vars */
    var object,
        okToSubmitObject,
        okToSubmitProperty,
        okToSubmitPropertyString,
        property,
        okToSubmitObjectProperty,
        i,
        j,
        /* Create a variable to hold array length (for use in for-loop in order to speed up processing. */
        okToSubmitArrayLength = okToSubmitArray.length;
    
    /* Loop through the objects in okToSubmitArray. */
    for (i = 0; i < okToSubmitArrayLength; i += 1) {
        /* Store current object in variable. */
        okToSubmitObject = okToSubmitArray[i];
        /* Get object properties. */
        okToSubmitProperty = Object.keys(okToSubmitObject);
        /* Convert property to string. */
        okToSubmitPropertyString = okToSubmitProperty.toString();

        /* Compare string to element name. */
        if (okToSubmitPropertyString === name) {
            /* Loop through the object properties (there's only one key value pair). */
            for (property in okToSubmitObject) {
                if (okToSubmitObject.hasOwnProperty(property)) {
                    /* Set its value to the one received from realTimeValidation-function. */
                    okToSubmitObject[property] = value;
                }
            }
        }

        /* Loop through the objects in okToSubmitArray and set the availability of the submit-button accordingly. */
        for (j = 0; j < okToSubmitArrayLength; j += 1) {
            okToSubmitObject = okToSubmitArray[j];
            okToSubmitObjectProperty = Object.keys(okToSubmitObject);

            if (okToSubmitObject[okToSubmitObjectProperty] === false) {
                toggleSubmitButtonStatusJS(true);
                break;
            } else {
                toggleSubmitButtonStatusJS(false);
            }
        }
    }

}

/* Define function realTimeValidation. Invoked by customOnInputFunction on user input. Takes user input and elements involved in validation process as parameters. */
function realTimeValidationJS(name, div, input, i1, i2, p) {

    /* Regular expressions for validating postalcodes, emails and passwords. */
    /*jslint regexp: true*/
    var regExpPcode = new RegExp(/^(\d{5}-\d{4}|\d{5})$/),
        regExpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        regExpPword = new RegExp(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})$/),
        
        /* Variables to hold user input */
        email = "",
        pword = "",
        consentCheckedStatus = "";

    /*jslint regexp: false*/
    
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
            if (i2.className.indexOf("display-block") !== -1) {
                i2.className = "";
                i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(false, name);
        } else {
            // Bootstrap 'has-success' on div.
            div.className = "";
            div.className += "form-group has-feedback has-success";
            // Display Bootstrap 'glyphicon-ok'.
            i2.className = "";
            i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
            // If the field was invalid, but no longer is, hide Bootstrap 'glyphicon-remove'.
            if (i1.className.indexOf("display-block") !== -1) {
                i1.className = "";
                i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
            }
            // If the field was invalid, but no longer is, hide error message.
            if (p.className.indexOf("display-block") !== -1) {
                p.className = "";
                p.className += "display-none help-block";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(true, name);
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
            if (i2.className.indexOf("display-block") !== -1) {
                i2.className = "";
                i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(false, name);
        } else {
            // Bootstrap 'has-success' on div.
            div.className = "";
            div.className += "form-group has-feedback has-success";
            // Display Bootstrap 'glyphicon-ok'.
            i2.className = "";
            i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
            // Display Bootstrap 'glyphicon-remove'.
            if (i1.className.indexOf("display-block") !== -1) {
                i1.className = "";
                i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
            }
            // Display error message.
            if (p.className.indexOf("display-block") !== -1) {
                p.className = "";
                p.className += "display-none help-block";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(true, name);
        }
        break;
    case "emailconfirm":
        /* Compare e-mail addresses and compare user input to regular expression. If they don't match use classes that style for invalid input, otherwise use clases that style for valid input. */
        /*email = document.forms['userForm']['email'].value;*/
        email = document.forms.userForm.email.value;
        if (input !== email || !regExpEmail.test(input)) {
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
            if (i2.className.indexOf("display-block") !== -1) {
                i2.className = "";
                i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(false, name);
        } else {
            // Bootstrap 'has-success' on div.
            div.className = "";
            div.className += "form-group has-feedback has-success";
            // Display Bootstrap 'glyphicon-ok'.
            i2.className = "";
            i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
            // Display Bootstrap 'glyphicon-remove'.
            if (i1.className.indexOf("display-block") !== -1) {
                i1.className = "";
                i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
            }
            // Display error message.
            if (p.className.indexOf("display-block") !== -1) {
                p.className = "";
                p.className += "display-none help-block";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(true, name);
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
            if (i2.className.indexOf("display-block") !== -1) {
                i2.className = "";
                i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(false, name);
        } else {
            // Bootstrap 'has-success' on div.
            div.className = "";
            div.className += "form-group has-feedback has-success";
            // Display Bootstrap 'glyphicon-ok'.
            i2.className = "";
            i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
            // Display Bootstrap 'glyphicon-remove'.
            if (i1.className.indexOf("display-block") !== -1) {
                i1.className = "";
                i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
            }
            // Display error message.
            if (p.className.indexOf("display-block") !== -1) {
                p.className = "";
                p.className += "display-none help-block";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(true, name);
        }
        break;
    case "passwordconfirm":
        /* Compare passwords and compare user input to regular expression. If they don't match use classes that style for invalid input, otherwise use clases that style for valid input. */
        /*pword = document.forms['userForm']['password'].value;*/
        pword = document.forms.userForm.password.value;
        if (input !== pword || !regExpPword.test(input)) {
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
            if (i2.className.indexOf("display-block") !== -1) {
                i2.className = "";
                i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(false, name);
        } else {
            // Bootstrap 'has-success' on div.
            div.className = "";
            div.className += "form-group has-feedback has-success";
            // Display Bootstrap 'glyphicon-ok'.
            i2.className = "";
            i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
            // Display Bootstrap 'glyphicon-remove'.
            if (i1.className.indexOf("display-block") !== -1) {
                i1.className = "";
                i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
            }
            // Display error message.
            if (p.className.indexOf("display-block") !== -1) {
                p.className = "";
                p.className += "display-none help-block";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(true, name);
        }
        break;
    case "consent":
        /* Get checked/unchecked status of consent checkbox. */
        consentCheckedStatus = document.getElementById("consent_input").checked;
        /* If checked, tell OkToSubmitArray. */
        if (consentCheckedStatus === true) {
            updateOkToSubmitArrayFunctionJS(true, name);
        } else {
            updateOkToSubmitArrayFunctionJS(false, name);
        }
        break;
    default:
        /* Make sure user input is not null or an empty string. If it is use classes that style for invalid input, otherwise use clases that style for valid input. */
        if (input === null || input === "") {
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
            if (i2.className.indexOf("display-block") !== -1) {
                i2.className = "";
                i2.className += "display-none glyphicon glyphicon-ok form-control-feedback";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(false, name);
        } else {
            // Bootstrap 'has-success' on div.
            div.className = "";
            div.className += "form-group has-feedback has-success";
            // Display Bootstrap 'glyphicon-ok'.
            i2.className = "";
            i2.className += "display-block glyphicon glyphicon-ok form-control-feedback";
            // Display Bootstrap 'glyphicon-remove'.
            if (i1.className.indexOf("display-block") !== -1) {
                i1.className = "";
                i1.className += "display-none glyphicon glyphicon-remove form-control-feedback";
            }
            // Display error message.
            if (p.className.indexOf("display-block") !== -1) {
                p.className = "";
                p.className += "display-none help-block";
            }
            /* Find object corresponding to current input field in okToSubmitArray and change its only property to false (okToSubmitArray is used later by submitFunction() to determine if all fields have been filled out). Also enables submit-button if all required fields/checkboxes have been filled in/checked. */
            updateOkToSubmitArrayFunctionJS(true, name);
        }
        break;
    }

}

/* Define function customOnInputFunction. Invoked on user input for fields configured for validation. Takes element name and value typed in by user as parameters. */
function customOnInputFunctionJS(name, value) {

    /* Get current div-element for setting Bootstrap classes 'has-success' and 'has-error' (valid/invalid input). */
    var div = document.getElementById(name + "_div"),
        input = value,
    /* Get current i-elements for setting Bootstrap classes for glyphicons symbolizing valid/invalid input. */
        i1 = document.getElementById(name + "_invalid"),
        i2 = document.getElementById(name + "_valid"),
    /* Get current p-element for showing/hiding error message. */
        p = document.getElementById(name + "_invalid_message");

    /* Send information to validation function. */
    realTimeValidationJS(name, div, input, i1, i2, p);

}

/* Define function onloadFunction. Invoked when document loads. */
function onloadFunctionJS() {

    /* Get all input elements. */
    var firstname = document.getElementById("firstname_input"),
        lastname = document.getElementById("lastname_input"),
        address = document.getElementById("address_input"),
        postalcode = document.getElementById("postalcode_input"),
        city = document.getElementById("city_input"),
        email = document.getElementById("email_input"),
        emailconfirm = document.getElementById("emailconfirm_input"),
        password = document.getElementById("password_input"),
        passwordconfirm = document.getElementById("passwordconfirm_input"),
        consent = document.getElementById("consent_input"),

        /* Place all input elements in array. */
        elementArray = [firstname, lastname, address, postalcode, city, email, emailconfirm, password, passwordconfirm, consent],

        /* Create a variable to hold array length (for use in for-loop in order to speed up processing. */
        arrayLength = elementArray.length,

        /* Loop vars */
        i = 0,
        name = "";

    /* Loop through input elements and add the oninput event attribute (pointing to below "customOnInputFunction"-function) to all of them (except for the consent checkbox which gets an onchange event instead. */
    for (i = 0; arrayLength > i; i += 1) {
        name = elementArray[i].name;
        if (name === "consent") {
            elementArray[i].setAttribute("onchange", "customOnInputFunctionJS('" + name + "', document.forms['userForm']['" + name + "'].value)");
        } else {
            elementArray[i].setAttribute("oninput", "customOnInputFunctionJS('" + name + "', document.forms['userForm']['" + name + "'].value)");
        }
    }

}