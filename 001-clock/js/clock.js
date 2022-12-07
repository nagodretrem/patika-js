let name = prompt("Adınızı giriniz: ");
document.querySelector("#myName").innerHTML = `${name} `;

function showTime(){

    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.getDay();    
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = days[day];

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;



    document.getElementById("myClock").innerText = `${hours}:${minutes}:${seconds}  ${dayName}`;
}

setInterval(showTime, 1000);