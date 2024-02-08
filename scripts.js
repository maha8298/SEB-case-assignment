// Function for validating the inputs made in the form
function formValidation() {
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var postalCode = document.getElementById('postalCode').value;
    var parentName = document.getElementById('parentName').value;

    var errorMessages = [];

    // Validate first name
    if (!firstName) {
        errorMessages.push("Förnamn kan inte vara tomt")
    }

    // Validate email adress
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        errorMessages.push('E-post adress har inkorrekt format');
    }
    if (!email) {
        errorMessages.push("E-post kan inte vara tomt")
    }

    // Validate postal code
    const postalRegex = /^\d{3}\s*\d{2}$/;
    if (!postalCode.match(postalRegex)) {
        errorMessages.push('Postnummer har inkorrekt format');
    }
    if (!postalCode) {
        errorMessages.push("Postnummer kan inte vara tomt")
    }

    // Validate name of parent
    const parentNameRegex = /^[a-zA-Z]+$/;
    if (parentName == firstName) {
        errorMessages.push('Namn på förälder kan inte vara samma som förnamn');
    }
    if (!parentName.match(parentNameRegex)) {
        errorMessages.push('Namn på förälder får bara innehålla bokstäver a-z');
    }
    if (!parentName) {
        errorMessages.push("Namn på förälder kan inte vara tomt")
    }

    // Print any error messages
    if (errorMessages.length > 0) {
        showErrors(errorMessages);
        return false;
    }

    return true;

}

// Displays error messages after validation of the form
function showErrors(errors) {
    var errorContainer = document.createElement('div');
    errorContainer.className = 'error-message';
    errorContainer.innerHTML = errors.join('<br>');

    var form = document.getElementById('myForm');
    form.appendChild(errorContainer);
}

// Calls on when the submit button is pressed, validating the form and reverts to the next page
function buttonPress(event) {
    event.preventDefault();

    var isValid = formValidation();

    if (isValid) {
        console.log("here")
        window.location.href = 'secondpage.html';
    }

    return false;
}

// Back button from page 2
function goBack() {
    window.location.href = 'index.html';
}

// Functionality for the popup window
var popupLink = document.getElementById("popup-link");
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");

popupLink.addEventListener("click", function (event) {
    event.preventDefault();
    popupWindow.style.display = "block";
});

closeButton.addEventListener("click", function () {
    popupWindow.style.display = "none";
});
