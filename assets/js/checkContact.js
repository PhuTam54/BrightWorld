// VALIDATION FORM FIELDS
const firstnameEl = document.querySelector('#firstname')
const lastnameEl = document.querySelector('#lastname')
const emailEl = document.querySelector('#email')
const phoneEl = document.querySelector('#phone')

const subscribeEl = document.querySelector('#subscribe-email')
const productSubscribeEl = document.querySelector('#product-subscribe-email')

const form = document.querySelector('#signup')

// check 
const isRequired = value => value === '' ? false : true
const isBetween = (length, min, max) => length < min || length > max ? false : true

const checkFirstname = () => {
    let valid = false
    const min = 1, max = 15
    const firstname = firstnameEl.value.trim()
    if (!isRequired(firstname)) {
        showError(firstnameEl, 'First Name cannot be blank.')
    } else if(!isBetween(firstname.length, min, max)) {
        showError(firstnameEl, `First name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(firstnameEl)
        valid = true
    }
    return valid
}

const checkLastname = () => {
    let valid = false
    const min = 1, max = 15
    const lastname = lastnameEl.value.trim()
    if (!isRequired(lastname)) {
        showError(lastnameEl, 'Last Name cannot be blank.')
    } else if(!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `Last name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lastnameEl)
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

const checkSubscribeEmail = () => {
    let valid = false
    const email = subscribeEl.value.trim()
    if (!isRequired(email)) {
        showError(subscribeEl, 'Email cannot be blank.')
    } else if (!isEmailValid(email)) {
        showError(subscribeEl, 'Email is not valid.')
    } else {
        showSuccess(subscribeEl)
        valid = true
    }
    return valid
}

const checkproductSubscribeEmail = () => {
    let valid = false
    const email = productSubscribeEl.value.trim()
    if (!isRequired(email)) {
        showError(productSubscribeEl, 'Email cannot be blank.')
    } else if (!isEmailValid(email)) {
        showError(productSubscribeEl, 'Email is not valid.')
    } else {
        showSuccess(productSubscribeEl)
        valid = true
    }
    return valid
}

const checkPhoneNumber = () => {
    let valid = false
    const phone = phoneEl.value.trim()
    const min = 10, max = 10

    if (!isRequired(phone)) {
        showError(phoneEl, 'Phone cannot be blank.')
    } else if (!isPhoneNumber(phone)) {
        showError(phoneEl, '10 number.')
    } else if (!isBetween(phone.length, min, max)) {
        showError(phoneEl, '10 number.')
    } else {
        showSuccess(phoneEl)
        valid = true
    }
    return valid
}

const isEmailValid = (email) => {
    //Regular expression (check email)
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const isPhoneNumber = (phone) => {
    //reguar expression (check phone number)
    const re = new RegExp("^(?=.*[0-9])(?=.{9,10})")
    return re.test(phone)
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

// SUBMIT CONTACT
const contactForm = document.querySelector('.js-submit-contact')
// Eventlistener
contactForm.addEventListener('click', function (e) {
    // prevent the form from submitting
    e.preventDefault()

    // validate fields
    let isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isEmailValid = checkEmail(),
        isPhoneNumber = checkPhoneNumber()

    let isContactValid = isFirstnameValid &&
        isLastnameValid &&
        isEmailValid &&
        isPhoneNumber

    // submit to the server if the contact form is valid
    if (isContactValid) {
        alert('Your information has been submitted!');
    }
})

// SUBMIT SUBSCRIBE 
const subscribeForm = document.querySelector('.js-submit-subscribe')
// Eventlistener
subscribeForm.addEventListener('click', function (e) {
    // prevent the form from submitting
    e.preventDefault()

    // validate fields
    let isSubscribeEmailValid = checkSubscribeEmail()

    // submit to the server if the subscribe form is valid
    if (isSubscribeEmailValid) {
        alert('Your information has been submitted!');
    }
})
