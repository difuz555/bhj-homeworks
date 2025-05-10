const closeModal = document.querySelector('.modal__close');
const subscribeModal = document.getElementById('subscribe-modal');

if (!document.cookie.includes('окно=закрыто')) {
    subscribeModal.classList.add('modal_active');
}

closeModal.addEventListener('click', () => {
    document.cookie = 'окно=закрыто';
    subscribeModal.classList.remove('modal_active');    
})