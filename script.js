app = document.querySelector('.app')
successMessage = document.querySelector('.success')
emailInput = document.querySelector('#email-input')
subscribeBtn = document.querySelector('#subscribe-btn')
emailNameDisplay = document.querySelector("#email-name")
dismissBtn = document.querySelector("#dismiss-btn")
main = document.querySelector('main')
invalidEmailAlert = document.querySelector('#invalid-email')
emailAlertDiv = document.querySelector('.email-alert')
emailTitle = document.querySelector('#email-title')

function validateEmail() {
    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailInput.style.cssText = "background-color: rgba(255, 86, 53, 0.2); color: hsl(4, 100%, 67%); border-color: hsl(4, 100%, 67%);";
        invalidEmailAlert.innerHTML = "Valid email required";
        emailAlertDiv.style.cssText = "justify-content: space-between;";
        emailTitle.style.width = "50%";
    } else {
        app.classList.add('hidden');
        main.classList.add('hidden');
        successMessage.classList.remove('hidden');
        emailNameDisplay.innerHTML = emailInput.value;
    }

    emailInput.addEventListener('focus', () => {
        emailInput.style.cssText = "";
        invalidEmailAlert.innerHTML = "";
        emailAlertDiv.style.cssText = "";
        emailTitle.style.width = "";
    });
}

subscribeBtn.addEventListener('click', validateEmail);

dismissBtn.addEventListener('click', () => {
    app.classList.remove('hidden');
    main.classList.remove('hidden');
    successMessage.classList.add('hidden');
    emailNameDisplay.innerHTML = ''
});



