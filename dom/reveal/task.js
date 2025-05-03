const reveal = Array.from(document.getElementsByClassName('reveal'));
window.addEventListener('scroll', () => {
    reveal.forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight  && item.getBoundingClientRect().bottom > 0) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    })
})