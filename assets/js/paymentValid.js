// VALIDATION FORM FIELDS
const fullnameEl = document.querySelector('#payment__name')
const emailEl = document.querySelector('#payment__email')
const addressEl = document.querySelector('#payment__address')
const cityEl = document.querySelector('#payment__city')
const cardEl = document.querySelector('#payment__card')
const expmonthEl = document.querySelector('#payment__expmonth')

const form = document.querySelector('#signup')

// check 
const isRequired = value => value === '' ? false : true
const isBetween = (length, min, max) => length < min || length > max ? false : true

const checkFullName = () => {
    let valid = false
    const min = 3, max = 25
    const fullname = fullnameEl.value.trim()
    if (!isBetween(fullname.length, min, max)) {
        showError(fullnameEl, `Full name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(fullnameEl)
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

const checkAddress = () => {
    let valid = false
    const min = 5, max = 100
    const address = addressEl.value.trim()
    if (!isRequired(address)) {
        showError(addressEl, 'Address cannot be blank.')
    } else if (!isBetween(address.length, min, max)) {
        showError(addressEl, `Address must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(addressEl)
        valid = true
    }
    return valid
}

const checkCity = () => {
    let valid = false
    const min = 3, max = 15
    const city = cityEl.value.trim()
    if (!isRequired(city)) {
        showError(cityEl, 'City cannot be blank.')
    } else if (!isBetween(city.length, min, max)) {
        showError(cityEl, `City must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(cityEl)
        valid = true
    }
    return valid
}

const checkCard = () => {
    let valid = false
    const card = cardEl.value.trim()
    const min = 16, max = 19

    if (!isRequired(card)) {
        showError(cardEl, `Card number cannot be blank.`)
    } else if (!isCardNumber(card)) {
        showError(cardEl, `Card number must be between ${min} and ${max} numbers.`)
    } else if (!isBetween(card.length, min, max)) {
        showError(cardEl, `Card number must be between ${min} and ${max} numbers.`)
    } else {
        showSuccess(cardEl)
        valid = true
    }
    return valid
}

const checkExpMonth = () => {
    let valid = false
    const month = expmonthEl.value.trim()
    const min = 1, max = 2

    if (!isRequired(month)) {
        showError(expmonthEl, `Month number cannot be blank.`)
    } else if (!isExpmonth(month)) {
        showError(expmonthEl, `Month number must be between ${min} and ${max} numbers.`)
    } else if (!isBetween(month.length, min, max)) {
        showError(expmonthEl, `Month number must be between ${min} and ${max} numbers.`)
    } else {
        showSuccess(expmonthEl)
        valid = true
    }
    return valid
}

const isEmailValid = (email) => {
    //Regular expression (check email)
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const isCardNumber = (card) => {
    //reguar expression (check card number)
    const re = new RegExp("^(?=.*[0-9])(?=.{16,19})")
    return re.test(card)
}

const isExpmonth = (month) => {
    //reguar expression (check exp month number)
    const re = new RegExp("^(?=.*[0-9])(?=.{1,2})")
    return re.test(month)
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
const paymentForm = document.querySelector('.payment__btn-checkout')
// Eventlistener
paymentForm.addEventListener('click', function (e) {
    // prevent the form from submitting
    e.preventDefault()

    // validate fields
    let isFirstnameValid = checkFullName(),
        isEmailValid = checkEmail(),
        isAddressValid = checkAddress(),
        isCardValid = checkCard(),
        isExpmonthValid = checkExpMonth(),
        isCity = checkCity()

    let isPaymentValid = isFirstnameValid &&
        isEmailValid &&
        isAddressValid &&
        isCardValid &&
        isExpmonthValid &&
        isCity

    // submit to the server if the contact form is valid
    if (isPaymentValid) {
        alert('Your information has been submitted!');
    }
})