// const loginModal = document.querySelector('#loginModal');
let myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});


const loginFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');

    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/')
    } else {
        myModal.show();
        // loginModal.setAttribute('class','show')
        // loginModal.classList.add('modal')
        // loginModal.classList.add('fade')
        // loginModal.removeAttribute('aria-hidden')
        // loginModal.setAttribute('aria-modal',true)
    }
};

document
.querySelector('#login-form')
.addEventListener('submit', loginFormHandler);