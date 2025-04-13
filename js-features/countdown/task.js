let timeObject = document.getElementById('timer');
let time = timeObject.textContent;
let intervalId = setInterval(() => {    
        time -= 1;
        timeObject.textContent = time;
        if (time === 0) {
            clearInterval(intervalId);
            window.alert("Вы победили в конкурсе!");
        }
}, 1000)