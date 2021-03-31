const seconds = document.querySelector('.second-hand');
const minutes = document.querySelector('.minute-hand');
const hours = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    const secondhand = now.getSeconds();
    const seconddegree = ((secondhand / 60) * 360 ) + 90;
    seconds.style.transform = `rotate(${seconddegree}deg)`;

    const minutehand=now.getMinutes();
    const minutedegree = ((minutehand / 60) * 360) + 90;
    minutes.style.transform = `rotate(${minutedegree}deg)`;

    const hourhand=now.getHours();
    const hourdegree = ((hourhand / 12) * 360) + 90;
    hours.style.transform = `rotate(${hourdegree}deg)`;
}

setInterval(setDate , 1000);
