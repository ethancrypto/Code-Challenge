// Wait for the DOM to be ready


$(function() {
    // Initialize form validation on the FancyForm form.
    // It has the name attribute "FancyForm"
    $("form[name='FancyForm']").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            input_address: {
                required: true,
                minlength: 42,
                maxlength: 42
            },
            input_amount: {
                required: true,
                number: true,
            },
            input_otp: {
                required: true,
            },
        },
        // Specify validation error messages
        messages: {
            input_address: {
                required: "Please provide a wallet address",
                minlength: "Please provide a valid wallet address",
                maxlength: "Please provide a valid wallet address",
            },
            input_amount: {
                required: "Please provide amount to send",
                number: "The Input amount should be an Integer value"
            },
            input_otp: {
                required: "Please provide a otp",
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});