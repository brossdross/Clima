const api = {
    key: f03e41221ab16425119294545ea1c445,
    url: "http://api.openweathermap.org/data/2.5/weather"
}



async function search(query)
try{
const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
const data = await response.json();
console.log(data);
} catch(err) {
    console.log(err);
    alert("hubo un error")
}

function onsubmit(event) {
    event.preventDefault();
    search(searchbox.value);
}

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("searchbox");
searchform.addEventListener("submit" , onsubmit, true);