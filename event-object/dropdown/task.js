let dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
let dropdownList = Array.from(document.getElementsByClassName('dropdown__list'));
let dropdownLink = Array.from(document.getElementsByClassName('dropdown__link'));

dropdownValue.forEach((element, index) => {
    element.addEventListener('click', function() {
        dropdownList[index].classList.toggle('dropdown__list_active');
    });
});

dropdownLink.forEach((element, index) => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        this.closest('.dropdown__list').classList.remove('dropdown__list_active');
        this.parentElement.parentElement.previousElementSibling.textContent = this.textContent;
    });
});