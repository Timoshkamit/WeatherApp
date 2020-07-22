let poluch = document.querySelector(".Polev");
let button = document.querySelector(".bt");
let lbvivod = document.querySelector(".vivodt");
let lbvivodv = document.querySelector(".vivdodt3")
let vspomogc = document.querySelectorAll(".container2")

async function GetINFO(){
    MyUrl = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + poluch.value + "&appid=f19076d7c03a5433a373cc53fdd35c09");
    MyUrl = await MyUrl.text();
    MyUrl = await JSON.parse(MyUrl);
    lbvivod.innerHTML = (Math.round(MyUrl.main["temp"]-273) + "°C");
    lbvivodv.innerHTML = (Math.round(MyUrl.wind["speed"]) + "м/с");
    for(let i = 0; i<vspomogc.length; i++){
        vspomogc[i].style.opacity = "100";
    }
    
}


button.onclick = GetINFO;
button.touch = GetINFO;
