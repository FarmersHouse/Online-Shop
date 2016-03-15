function validateForm() {
    var result = true;
    var regExp;
    
    var fname = document.forms["userForm"]["firstname"].value;
    if (fname == null || fname == "") {
        var fnameInvalid = document.getElementById("firstname_div");
        fnameInvalid.className = "";
        fnameInvalid.className = "form-group has-feedback has-error";
        var fnameInvalidGlyphicon = document.getElementById("firstname_invalid");
        fnameInvalidGlyphicon.className = "";
        fnameInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var fnameInvalidMessage = document.getElementById("firstname_invalid_message");
        fnameInvalidMessage.className = "";
        fnameInvalidMessage.className += "display-block help-block";
        var fnameValidGlyphicon = document.getElementById("firstname_valid");
        if (fnameValidGlyphicon.className.indexOf("display-block") != -1) {
            fnameValidGlyphicon.className = "";
            fnameValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var fnameValid = document.getElementById("firstname");
        fnameValid.className = "";
        fnameValid.className = "form-group has-feedback has-success";
        var fnameValidGlyphicon = document.getElementById("firstname_valid");
        fnameValidGlyphicon.className = "";
        fnameValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var fnameInvalidGlyphicon = document.getElementById("firstname_invalid");
        var fnameInvalidMessage = document.getElementById("firstname_invalid_message");
        if (fnameInvalidGlyphicon.className.indexOf("display-block") != -1) {
            fnameInvalidGlyphicon.className = "";
            fnameInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (fnameInvalidMessage.className.indexOf("display-block") != -1) {
            fnameInvalidMessage.className = "";
            fnameInvalidMessage.className += "display-none help-block";
        }
    }
    
    var lname = document.forms["userForm"]["lastname"].value;
    if (lname == null || lname == "") {
        var fnameInvalid = document.getElementById("lastname");
        fnameInvalid.className = "";
        fnameInvalid.className = "form-group has-feedback has-error";
        var lnameInvalidGlyphicon = document.getElementById("lastname_invalid");
        lnameInvalidGlyphicon.className = "";
        lnameInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var lnameInvalidMessage = document.getElementById("lastname_invalid_message");
        lnameInvalidMessage.className = "";
        lnameInvalidMessage.className += "display-block help-block";
        var lnameValidGlyphicon = document.getElementById("lastname_valid");
        if (lnameValidGlyphicon.className.indexOf("display-block") != -1) {
            lnameValidGlyphicon.className = "";
            lnameValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var lnameValid = document.getElementById("lastname");
        lnameValid.className = "";
        lnameValid.className = "form-group has-feedback has-success";
        var lnameValidGlyphicon = document.getElementById("lastname_valid");
        lnameValidGlyphicon.className = "";
        lnameValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var lnameInvalidGlyphicon = document.getElementById("lastname_invalid");
        var lnameInvalidMessage = document.getElementById("lastname_invalid_message");
        if (lnameInvalidGlyphicon.className.indexOf("display-block") != -1) {
            lnameInvalidGlyphicon.className = "";
            lnameInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (lnameInvalidMessage.className.indexOf("display-block") != -1) {
            lnameInvalidMessage.className = "";
            lnameInvalidMessage.className += "display-none help-block";
        }
    }
    
    var address = document.forms["userForm"]["address"].value;
    if (address == null || address == "") {
        var addressInvalid = document.getElementById("address");
        addressInvalid.className = "";
        addressInvalid.className = "form-group has-feedback has-error";
        var addressInvalidGlyphicon = document.getElementById("address_invalid");
        addressInvalidGlyphicon.className = "";
        addressInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var addressInvalidMessage = document.getElementById("address_invalid_message");
        addressInvalidMessage.className = "";
        addressInvalidMessage.className += "display-block help-block";
        var addressValidGlyphicon = document.getElementById("address_valid");
        if (addressValidGlyphicon.className.indexOf("display-block") != -1) {
            addressValidGlyphicon.className = "";
            addressValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var addressValid = document.getElementById("address");
        addressValid.className = "";
        addressValid.className = "form-group has-feedback has-success";
        var addressValidGlyphicon = document.getElementById("address_valid");
        addressValidGlyphicon.className = "";
        addressValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var addressInvalidGlyphicon = document.getElementById("address_invalid");
        var addressInvalidMessage = document.getElementById("address_invalid_message");
        if (addressInvalidGlyphicon.className.indexOf("display-block") != -1) {
            addressInvalidGlyphicon.className = "";
            addressInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (addressInvalidMessage.className.indexOf("display-block") != -1) {
            addressInvalidMessage.className = "";
            addressInvalidMessage.className += "display-none help-block";
        }
    }
    
    var pcode = document.forms["userForm"]["postalcode"].value;
    regExp = new RegExp(/^(\d{5}-\d{4}|\d{5})$/);
    if (!regExp.test(pcode)) {
        var pcodeInvalid = document.getElementById("postalcode");
        pcodeInvalid.className = "";
        pcodeInvalid.className = "form-group has-feedback has-error";
        var pcodeInvalidGlyphicon = document.getElementById("postalcode_invalid");
        pcodeInvalidGlyphicon.className = "";
        pcodeInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var pcodeInvalidMessage = document.getElementById("postalcode_invalid_message");
        pcodeInvalidMessage.className = "";
        pcodeInvalidMessage.className += "display-block help-block";
        var pcodeValidGlyphicon = document.getElementById("postalcode_valid");
        if (pcodeValidGlyphicon.className.indexOf("display-block") != -1) {
            pcodeValidGlyphicon.className = "";
            pcodeValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var pcodeValid = document.getElementById("postalcode");
        pcodeValid.className = "";
        pcodeValid.className = "form-group has-feedback has-success";
        var pcodeValidGlyphicon = document.getElementById("postalcode_valid");
        pcodeValidGlyphicon.className = "";
        pcodeValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var pcodeInvalidGlyphicon = document.getElementById("postalcode_invalid");
        var pcodeInvalidMessage = document.getElementById("postalcode_invalid_message");
        if (pcodeInvalidGlyphicon.className.indexOf("display-block") != -1) {
            pcodeInvalidGlyphicon.className = "";
            pcodeInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (pcodeInvalidMessage.className.indexOf("display-block") != -1) {
            pcodeInvalidMessage.className = "";
            pcodeInvalidMessage.className += "display-none help-block";
        }
    }
    
    var city = document.forms["userForm"]["city"].value;
    if (city == null || city == "") {
        var cityInvalid = document.getElementById("city");
        cityInvalid.className = "";
        cityInvalid.className = "form-group has-feedback has-error";
        var cityInvalidGlyphicon = document.getElementById("city_invalid");
        cityInvalidGlyphicon.className = "";
        cityInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var cityInvalidMessage = document.getElementById("city_invalid_message");
        cityInvalidMessage.className = "";
        cityInvalidMessage.className += "display-block help-block";
        var cityValidGlyphicon = document.getElementById("city_valid");
        if (cityValidGlyphicon.className.indexOf("display-block") != -1) {
            cityValidGlyphicon.className = "";
            cityValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var cityValid = document.getElementById("city");
        cityValid.className = "";
        cityValid.className = "form-group has-feedback has-success";
        var cityValidGlyphicon = document.getElementById("city_valid");
        cityValidGlyphicon.className = "";
        cityValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var cityInvalidGlyphicon = document.getElementById("city_invalid");
        var cityInvalidMessage = document.getElementById("city_invalid_message");
        if (cityInvalidGlyphicon.className.indexOf("display-block") != -1) {
            cityInvalidGlyphicon.className = "";
            cityInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (cityInvalidMessage.className.indexOf("display-block") != -1) {
            cityInvalidMessage.className = "";
            cityInvalidMessage.className += "display-none help-block";
        }
    }
    
    var email = document.forms["userForm"]["email"].value;
    regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regExp.test(email)) {
        var emailInvalid = document.getElementById("email");
        emailInvalid.className = "";
        emailInvalid.className = "form-group has-feedback has-error";
        var emailInvalidGlyphicon = document.getElementById("email_invalid");
        emailInvalidGlyphicon.className = "";
        emailInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var emailInvalidMessage = document.getElementById("email_invalid_message");
        emailInvalidMessage.className = "";
        emailInvalidMessage.className += "display-block help-block";
        var emailValidGlyphicon = document.getElementById("email_valid");
        if (emailValidGlyphicon.className.indexOf("display-block") != -1) {
            emailValidGlyphicon.className = "";
            emailValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var emailValid = document.getElementById("email");
        emailValid.className = "";
        emailValid.className = "form-group has-feedback has-success";
        var emailValidGlyphicon = document.getElementById("email_valid");
        emailValidGlyphicon.className = "";
        emailValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var emailInvalidGlyphicon = document.getElementById("email_invalid");
        var emailInvalidMessage = document.getElementById("email_invalid_message");
        if (emailInvalidGlyphicon.className.indexOf("display-block") != -1) {
            emailInvalidGlyphicon.className = "";
            emailInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (emailInvalidMessage.className.indexOf("display-block") != -1) {
            emailInvalidMessage.className = "";
            emailInvalidMessage.className += "display-none help-block";
        }
    }
    
    var cemail = document.forms["userForm"]["emailconfirm"].value;
    regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (cemail != email || !regExp.test(cemail)) {
        var cemailInvalid = document.getElementById("emailconfirm");
        cemailInvalid.className = "";
        cemailInvalid.className = "form-group has-feedback has-error";
        var cemailInvalidGlyphicon = document.getElementById("emailconfirm_invalid");
        cemailInvalidGlyphicon.className = "";
        cemailInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var cemailInvalidMessage = document.getElementById("emailconfirm_invalid_message");
        cemailInvalidMessage.className = "";
        cemailInvalidMessage.className += "display-block help-block";
        var cemailValidGlyphicon = document.getElementById("emailconfirm_valid");
        if (cemailValidGlyphicon.className.indexOf("display-block") != -1) {
            cemailValidGlyphicon.className = "";
            cemailValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var cemailValid = document.getElementById("emailconfirm");
        cemailValid.className = "";
        cemailValid.className = "form-group has-feedback has-success";
        var cemailValidGlyphicon = document.getElementById("emailconfirm_valid");
        cemailValidGlyphicon.className = "";
        cemailValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var cemailInvalidGlyphicon = document.getElementById("emailconfirm_invalid");
        var cemailInvalidMessage = document.getElementById("emailconfirm_invalid_message");
        if (cemailInvalidGlyphicon.className.indexOf("display-block") != -1) {
            cemailInvalidGlyphicon.className = "";
            cemailInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (cemailInvalidMessage.className.indexOf("display-block") != -1) {
            cemailInvalidMessage.className = "";
            cemailInvalidMessage.className += "display-none help-block";
        }
    }
    
    var password = document.forms["userForm"]["password"].value;
    regExp = new RegExp(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})$/);
    if (!regExp.test(password)) {
        var pwordInvalid = document.getElementById("password");
        pwordInvalid.className = "";
        pwordInvalid.className = "form-group has-feedback has-error";
        var pwordInvalidGlyphicon = document.getElementById("password_invalid");
        pwordInvalidGlyphicon.className = "";
        pwordInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var pwordInvalidMessage = document.getElementById("password_invalid_message");
        pwordInvalidMessage.className = "";
        pwordInvalidMessage.className += "display-block help-block";
        var pwordValidGlyphicon = document.getElementById("password_valid");
        if (pwordValidGlyphicon.className.indexOf("display-block") != -1) {
            pwordValidGlyphicon.className = "";
            pwordValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var pwordValid = document.getElementById("password");
        pwordValid.className = "";
        pwordValid.className = "form-group has-feedback has-success";
        var pwordValidGlyphicon = document.getElementById("password_valid");
        pwordValidGlyphicon.className = "";
        pwordValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var pwordInvalidGlyphicon = document.getElementById("password_invalid");
        var pwordInvalidMessage = document.getElementById("password_invalid_message");
        if (pwordInvalidGlyphicon.className.indexOf("display-block") != -1) {
            pwordInvalidGlyphicon.className = "";
            pwordInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (pwordInvalidMessage.className.indexOf("display-block") != -1) {
            pwordInvalidMessage.className = "";
            pwordInvalidMessage.className += "display-none help-block";
        }
    }
    
    var cpassword = document.forms["userForm"]["passwordconfirm"].value;
    regExp = new RegExp(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})$/);
    if (cpassword != password || !regExp.test(cpassword)) {
        var cpwordInvalid = document.getElementById("passwordconfirm");
        cpwordInvalid.className = "";
        cpwordInvalid.className = "form-group has-feedback has-error";
        var cpwordInvalidGlyphicon = document.getElementById("passwordconfirm_invalid");
        cpwordInvalidGlyphicon.className = "";
        cpwordInvalidGlyphicon.className += "display-block glyphicon glyphicon-remove form-control-feedback";
        var cpwordInvalidMessage = document.getElementById("passwordconfirm_invalid_message");
        cpwordInvalidMessage.className = "";
        cpwordInvalidMessage.className += "display-block help-block";
        var cpwordValidGlyphicon = document.getElementById("passwordconfirm_valid");
        if (cpwordValidGlyphicon.className.indexOf("display-block") != -1) {
            cpwordValidGlyphicon.className = "";
            cpwordValidGlyphicon.className += "display-none glyphicon glyphicon-ok form-control-feedback";
        }
        result = false;
    }
    else {
        var cpwordValid = document.getElementById("passwordconfirm");
        cpwordValid.className = "";
        cpwordValid.className = "form-group has-feedback has-success";
        var cpwordValidGlyphicon = document.getElementById("passwordconfirm_valid");
        cpwordValidGlyphicon.className = "";
        cpwordValidGlyphicon.className += "display-block glyphicon glyphicon-ok form-control-feedback";
        var cpwordInvalidGlyphicon = document.getElementById("passwordconfirm_invalid");
        var cpwordInvalidMessage = document.getElementById("passwordconfirm_invalid_message");
        if (cpwordInvalidGlyphicon.className.indexOf("display-block") != -1) {
            cpwordInvalidGlyphicon.className = "";
            cpwordInvalidGlyphicon.className += "display-none glyphicon glyphicon-remove form-control-feedback";
        }
        if (cpwordInvalidMessage.className.indexOf("display-block") != -1) {
            cpwordInvalidMessage.className = "";
            cpwordInvalidMessage.className += "display-none help-block";
        }
    }
    
    return result;

}