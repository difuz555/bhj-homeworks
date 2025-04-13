let cookieImg = document.getElementById("cookie");
let clickerCounter = Number(document.getElementById("clicker__counter").textContent);
cookieImg.onclick = function() {
    clickerCounter += 1;
    document.getElementById("clicker__counter").textContent = clickerCounter;
    if (clickerCounter % 2 !== 0) {
        cookieImg.width = 180;
        cookieImg.height = 100;
    } else {
        cookieImg.width = 200;
        cookieImg.height = 128;
    }
}