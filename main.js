var ucity;


window.onload = function()
{

    loadd();

}

function loadd()
{
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
document.getElementById("ed").innerHTML = "<b>" + day + "/" + month + "/" + year + "</b>";
}


function searchCity()
{
    
    var city = document.getElementById("winput").value;

    let key = '69d830e0dcdcac94f4e0c301ea620f76';
    let lang = 'pl';
    let units = 'metric';
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&appid=69d830e0dcdcac94f4e0c301ea620f76"

    fetch(url)
    .then(res => res.json())
    .then(data =>
    {

        var weatherD = data.weather[0].main;
        var weatherDe = data.weather[0].description;
        var weatherIcon = data.weather[0].icon;
        var tempValue = data.main.temp;
        var pValue = data.main.pressure;
        var hValue = data.main.humidity;
        var wsV = data.wind.speed;
        var wdV = data.wind.deg;
        
        var ei = document.querySelector('.wimg');
        ei.src = weatherIcon +"@2x.png.opdownload";
        var weatherhm = document.querySelector('.mw')
        weatherhm.innerHTML = weatherD;
        var weathert = document.querySelector('.tw')
        weathert.innerHTML = "Temperature: " + tempValue;
        var weatherp = document.querySelector('.pw')
        weatherp.innerHTML = "Pressure: " + pValue;
        var weatherh = document.querySelector('.hw')
        weatherh.innerHTML = "Humidity: " + hValue;
        var weatherw = document.querySelector('.ww')
        weatherw.innerHTML = "Wind: " + wsV + "m/s, " + wdV + "°" ;



    })
    .catch(function()
    {
        console.log("error");
    });
}

