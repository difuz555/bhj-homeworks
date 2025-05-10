const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.Id) {
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.Id;
    signin.classList.remove('signin_active');
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    form.reset();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (JSON.parse(xhr.responseText).success) {
                console.log(JSON.parse(xhr.responseText));
                localStorage.Id = JSON.parse(xhr.responseText).user_id;
                console.log(localStorage.Id);
                welcome.classList.add('welcome_active');
                userId.textContent = localStorage.Id;
                signin.classList.remove('signin_active');
            }
            else {
                window.alert('Неверный логин/пароль');
            }
        }
    })
})