// <!-- js for modal  -->
        const modalMain = document.querySelector('.modal');
        const modalBody = document.querySelector('.modal__body');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');

        const registerClose = document.querySelector('.register-close');
        const loginClose = document.querySelector('.login-close');

        const btnPopup = document.querySelector('.btnLogin-popup');

        registerLink.addEventListener('click', () => {
            modalBody.classList.add('active');
        });

        loginLink.addEventListener('click', () => {
            modalBody.classList.remove('active');
        });

        btnPopup.addEventListener('click', () => {
            modalMain.classList.add('active-popup');
        });

        registerClose.addEventListener('click', () => {
            modalMain.classList.remove('active-popup');
        });

        loginClose.addEventListener('click', () => {
            modalMain.classList.remove('active-popup');
        });

// VALIDATION FORM FIELDS
const registerUsernameEl = document.querySelector('#register-username')
const loginUsernameEl = document.querySelector('#login-username')
const firstnameEl = document.querySelector('#firstname')
const lastnameEl = document.querySelector('#lastname')
const emailEl = document.querySelector('#email')
const phoneEl = document.querySelector('#phone')
const registerPasswordEl = document.querySelector('#register-password')
const loginPasswordEl = document.querySelector('#login-password')
const confirmPasswordEl = document.querySelector('#confirmpassword')

const subscribeEl = document.querySelector('#subscribe-email')
const productSubscribeEl = document.querySelector('#product-subscribe-email')

const form = document.querySelector('#signup')

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

const debounce = (fn, delay = 1) => {
    let timeoutId;
    return (...args) => {
        //cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        //setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername()
            break
        case 'firstname':
            checkFirstname()
            break
        case 'lastname':
            checkLastname()
            break
        case 'email':
            checkEmail()
            break
        case 'password':
            checkPassword()
            break
        case 'confirmpassword':
            checkConfirmPassword()
            break
        case 'phone':
            checkPhoneNumber()
            break
    }
}))

// SUBMIT SUBSCRIBE 
const productSubscribeForm = document.querySelector('.js-product-subscribe')
// Eventlistener
productSubscribeForm.addEventListener('click', function (e) {
    // prevent the form from submitting
    e.preventDefault()

    // validate fields
    let isProductSubscribeEmailValid = checkproductSubscribeEmail()

    // submit to the server if the subscribe form is valid
    if (isProductSubscribeEmailValid) {
        alert('Your information has been submitted!');
    }
})

// PRODUCT - ORDERBY BUTTON 
// Show
// const activeBtns = document.querySelectorAll('.js-btn')
// const activeBtn1 = document.querySelector('.btn1')
// const activeBtn2 = document.querySelector('.btn2')
// const activeBtn3 = document.querySelector('.btn3')

// activeBtn1.addEventListener('click', function() {
//     activeBtns.classList.add('active')
// })

// activeBtn2.addEventListener('click', function() {
//     activeBtn1.classList.remove('active')
//     activeBtn2.classList.add('active')
//     activeBtn3.classList.remove('active')
// })

// activeBtn2.addEventListener('click', function() {
//     activeBtn1.classList.remove('active')
//     activeBtn2.classList.remove('active')
//     activeBtn3.classList.add('active')
// })

// SEARCH - ORDER BY
angular.module("app", []);
angular.module("app").controller("controller", function (){
    var vm = this;
    // vm.title = "Learn Angular by example";
    vm.searchInput = "";
    // vm.shows = [
    //     {
    //         title: "Doi mat co lua",
    //         author: "Nguyen Hung Son",
    //         favorite: true
    //     },
    //     {
    //         title: "Life of Pi",
    //         author: "Davan",
    //         favorite: false
    //     },
    //     {
    //         title: "Learn Angular by example",
    //         author: "Fpt-Aptech",
    //         favorite: true
    //     },
    //     {
    //         title: "Ho nha trai",
    //         author: "Nguyen Anh Tu",
    //         favorite: false
    //     },
    //     {
    //         title: "Hoc code today",
    //         author: "Fpt",
    //         favorite: true
    //     }
    // ];
    vm.orders = [
        {
            key: "select__option-link",
            reverse: false
        },
        {
            key: "select__option-link",
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
});

// Ex6 form validation 

// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);

// let username = id("username2"),
//     email = id("email2"),
//     password = id("password2"),
//     form2 = id("signup2"),
//     errorMsg = classes("error2"),
//     successIcon = classes("success-icon"),
//     failureIcon = classes("failure-icon");

// form2.addEventListener("submit", (e) => {
//     e.preventDefault();

//     engine(username, 0, "Username cannot be blank");
//     engine(email, 1, "Email cannor be blank");
//     engine(password, 2, "Password cannot be blank");
// });

// let engine = (id, serial, message) => {
//     if (id.value.trim() === "") {
//         errorMsg[serial].innerHTML = message;
//         id.style.border = "2px solid red";

//         //icons
//         failureIcon[serial].style.opacity = "1";
//         successIcon[serial].style.opacity = "0";
//     } else {
//         errorMsg[serial].innerHTML = "";
//         id.style.border = "2px solid green";

//         //icons
//         failureIcon[serial].style.opacity = "0";
//         successIcon[serial].style.opacity = "1";
//     }
// };

 