let searchTerm = $('#searchBar').val();
const apiKey = "a15f7435397164a6c2eee441b19ae7ef";
let searchBtn = $("#searchBtn");
let tempEl = $("#temperture");
let humidityEl = $("humidity");
let windSpeedEL = $("#windSpeed");
let uvEl = $("#uvIndex");
let cityNameEl = $("#cityName");




function cityWeather(cityName){

    let searchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${$("#searchBar").val()}&appid=${apiKey}`;
    
    fetch(searchUrl)
    .then(response => response.json())
    .then(data =>{ console.log(data);
    cityNameEl.text(data.name);
    humidityEl.text(data.main.humidity);
    tempEl.text(data.main.temp);
    windSpeedEL.text(data.wind.speed + "MPH");
}
    );
    
}


searchBtn.click(function(){
    cityWeather(searchTerm);
})



$(document).ready(function(){


    



})