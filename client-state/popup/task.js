const closeModal = document.querySelector('.modal__close');
const subscribeModal = document.getElementById('subscribe-modal');

if (!document.cookie.includes('windowClose=true')) {
    subscribeModal.classList.add('modal_active');
}

closeModal.addEventListener('click', () => {
    document.cookie = 'windowClose=true';
    subscribeModal.classList.remove('modal_active');    
})