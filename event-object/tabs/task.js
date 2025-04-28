let tab = Array.from(document.getElementsByClassName('tab'));
console.log(tab);
let tabContent = Array.from(document.getElementsByClassName('tab__content'));
console.log(tabContent);
tab.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('tab_active')) {
            for (let i = 0; i < tab.length; i++) {
                if (i !== index) {
                    if (tab[i].classList.contains('tab_active')) {
                        tab[i].classList.remove('tab_active');
                        tabContent[i].classList.remove('tab__content_active');
                    }
                }
            }
            item.classList.add('tab_active');
            tabContent[index].classList.add('tab__content_active');
        }
    })
})