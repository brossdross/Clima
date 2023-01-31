const api = {
    key: f03e41221ab16425119294545ea1c445,
    url: "http://api.openweathermap.org/data/2.5/weather"
}

const city = document.getElementById("city");
const date = document.getElementById("date");
const tempImg = document.getElementById("tempImg");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const range = document.getElementById("range");

async function search(query)
try{
const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
const data = await response.json();

city.innerHTML = "${data.name}, ${data.sys.country}";
data.innerHTML = (new date()).toLocaleDateString();
temp.innerHTML = toCelsius(data.main.temp);
weather.innerHTML = data.weather[0].description;
range.innerHTML = "${toCelsius (data.main.temp_min)} / ${toCelsius (data.main.temp_max)}"
} catch(err) {
    console.log(err);
    alert("hubo un error")
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

function onsubmit(event) {
    event.preventDefault();
    search(searchbox.value);
}

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("searchbox");
searchform.addEventListener("submit" , onsubmit, true);