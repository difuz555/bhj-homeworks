let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.onload = reqListener;
xhr.send();

let loaderImage = document.getElementById('loader');
let items = document.getElementById('items');

function reqListener() {  
    let data = JSON.parse(this.responseText);
    loaderImage.classList.remove('loader_active');
    let valutes = data.response.Valute;
    for (let valute in valutes) {
        let element = document.createElement('div');
        element.classList.add('item');
        element.innerHTML = '<div class="item__code">' + valutes[valute].CharCode + '</div>' + 
        '<div class="item__value">' + valutes[valute].Value + '</div>' + 
        '<div class="item__currency">руб.</div>';       
        items.appendChild(element);
    }
  }