const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

function welcomeWindowOpen() {
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('Id');
    signin.classList.remove('signin_active');
}

if (localStorage.getItem('Id')) {
    welcomeWindowOpen();
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
    form.reset();
    xhr.addEventListener('load', () => {        
        if (xhr.response.success) {
            localStorage.Id = xhr.response.user_id;
            welcomeWindowOpen();
        }
        else {
            window.alert('Неверный логин/пароль');
        }        
    })
})