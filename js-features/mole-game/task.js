let dead = Number(document.getElementById('dead').textContent);
let lost = Number(document.getElementById('lost').textContent);

getHole = index => document.getElementById(`hole${index}`);

function newStart() {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}

for (let index = 1; index <= 9; index +=1) {
    getHole(index).onclick = function() {
        if (getHole(index).className === 'hole hole_has-mole') {
            dead += 1;
            document.getElementById('dead').textContent = dead;
            if (dead === 10) {
                window.alert('Победа!');
                newStart();
            }
        } else {
            lost += 1;
            document.getElementById('lost').textContent = lost;
            if (lost === 5) {
                window.alert('Вы проиграли!');
                newStart();
            }
        }
    }
}