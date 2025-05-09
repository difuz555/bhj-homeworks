let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.onload = reqListener;
xhr.send();

let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

function reqListener() {  
    let data = JSON.parse(this.responseText);
    pollTitle.textContent = data.data.title;
    let answers = data.data.answers;
    for (let item of answers) {
        let element = document.createElement('button');
        element.classList.add('poll__answer');
        pollAnswers.appendChild(element);
        element.addEventListener('click', () => {
            window.alert('Спасибо, ваш голос засчитан!');
        })
        element.textContent = item;
    }
  }