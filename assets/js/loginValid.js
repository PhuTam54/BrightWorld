// VALIDATION FORM FIELDS
const registerUsernameEl = document.querySelector('#register-username')
const loginUsernameEl = document.querySelector('#login-username')
const emailEl = document.querySelector('#email')
const phoneEl = document.querySelector('#phone')
const registerPasswordEl = document.querySelector('#register-password')
const loginPasswordEl = document.querySelector('#login-password')
const confirmPasswordEl = document.querySelector('#confirmpassword')

// check 
const isRequired = value => value === '' ? false : true
const isBetween = (length, min, max) => length < min || length > max ? false : true

const checkUsername = () => {
    let valid = false
    const min = 3, max = 25
    const username = registerUsernameEl.value.trim()
    if (!isBetween(username.length, min, max)) {
        showError(registerUsernameEl, `User name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(registerUsernameEl)
        valid = true
    }
    return valid
}

const checkLoginUsername = () => {
    let valid = false
    const min = 3, max = 25
    const username = loginUsernameEl.value.trim()
    if (!isBetween(username.length, min, max)) {
        showError(loginUsernameEl, `User name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(loginUsernameEl)
        valid = true
    }
    return valid
}

const checkEmail = () => {
    let valid = false
    const email = emailEl.value.trim()
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.')
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl)
        valid = true
    }
    return valid
}

const checkRegisterPassword = () => {
    let valid = false

    const password = registerPasswordEl.value.trim()

    if (!isRequired(password)) {
        showError(registerPasswordEl, 'Password cannot be blank.')
    } else if (!isPasswordSecure(password)) {
        showError(registerPasswordEl, 'Password must has at least 8 characters that include at least 1 lowercase ' +
            'character, 1 uppercase characters, 1 number, and 1 speacial character in (!@#$%^&*)')
    } else {
        showSuccess(registerPasswordEl)
        valid = true
    }

    return valid
}

const checkLoginPassword = () => {
    let valid = false

    const password = loginPasswordEl.value.trim()

    if (!isRequired(password)) {
        showError(loginPasswordEl, 'Password cannot be blank.')
    } else if (!isPasswordSecure(password)) {
        showError(loginPasswordEl, 'Password must has at least 8 characters that include at least 1 lowercase ' +
            'character, 1 uppercase characters, 1 number, and 1 speacial character in (!@#$%^&*)')
    } else {
        showSuccess(loginPasswordEl)
        valid = true
    }

    return valid
}

const checkConfirmPassword = () => {
    let valid = false
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim()
    const password = registerPasswordEl.value.trim()

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again.')
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match')
    } else {
        showSuccess(confirmPasswordEl)
        valid = true
    }

    return valid
}

const isEmailValid = (email) => {
    //Regular expression (check email)
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const isPasswordSecure = (password) => {
    //reguar expression (check password)
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    return re.test(password)
}

// Show
const showError = (input, message) => {
    //get the form-feild element 
    const formFeild = input.parentElement
    //add the error class
    formFeild.classList.remove('success')
    formFeild.classList.add('error')

    //show the error message
    const error = formFeild.querySelector('small')
    error.textContent = message
}

const showSuccess = (input) => {
    //get the form-feild element 
    const formFeild = input.parentElement
    //remove the error class
    formFeild.classList.remove('error')
    formFeild.classList.add('success')

    //hide the error message
    const error = formFeild.querySelector('small')
    error.textContent = ''
}

// SUBMIT REGISTER 
const register = document.querySelector('.js-submit-register')
// Eventlistener
register.addEventListener('click', function (e) {
    // prevent the form from submitting
    e.preventDefault()

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkRegisterPassword(),
        isConfirmPasswordValid = checkConfirmPassword()

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid

    // submit to the server if the form is valid
    if (isFormValid) {
        alert('Your information has been submitted!');
    }
})

// SUBMIT LOGIN 
const login = document.querySelector('.js-submit-login')
// Eventlistener
login.addEventListener('click', function (e) {
    // prevent the form from submitting
    e.preventDefault()

    // validate fields
    let isUsernameValid = checkLoginUsername()
        isPasswordValid = checkLoginPassword()

    let isFormValid = isUsernameValid &&
        isPasswordValid

    // submit to the server if the form is valid
    if (isFormValid) {
        alert('Your information has been submitted!');
    }
})