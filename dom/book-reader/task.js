let fontSizeControl = Array.from(document.getElementsByClassName('font-size'));
let book = document.getElementById('book');
let sizeRemove, sizeAdd;

fontSizeControl.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        for (let element of fontSizeControl) {
            if (element.classList.contains('font-size_active')) {
                element.classList.remove('font-size_active');
                sizeRemove = element.dataset.size;
            }
        }
        item.classList.add('font-size_active');
        sizeAdd = item.dataset.size;
        if (sizeAdd !== sizeRemove) {
            switch (sizeRemove) {
                case 'small':
                    book.classList.remove('book_fs-small');
                    break;
                case 'big':
                    book.classList.remove('book_fs-big');
                    break;
            }

            switch (sizeAdd) {
                case 'small':
                    book.classList.add('book_fs-small');
                    break;
                case 'big':
                    book.classList.add('book_fs-big');
                    break; 
            }
        }
    })
})