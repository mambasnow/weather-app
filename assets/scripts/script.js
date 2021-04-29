let searchTerm = $('#searchBar').val();
const apiKey = "a15f7435397164a6c2eee441b19ae7ef";
let searchBtn = $("#searchBtn");
let tempEl = $("#temperture");
let humidityEl = $("humidity");
let windSpeedEL = $("#windSpeed");
let uvEl = $("#uvIndex");
let cityNameEl = $("#cityName");


function cityForecast(cityId){
    
    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`;

    fetch(forecastURL)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        for(i=0;i<5;i++){
            $("#weatherCardContainer").append(`
            
            
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
            <p class="card-text">Temp: ${data.list[i+4].main.temp}</p>
            <p class="card-text">Humidity: ${data.list[i+4].main.humidity}</p>
            </div>
            </div>            
            `);
        }
    })


}

function cityWeather(cityName){

    let searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${$("#searchBar").val()}&appid=${apiKey}`;
    
    fetch(searchUrl)
    .then(response => response.json())
    .then(data =>{ console.log(data);
    let cityId = data.id;
    cityNameEl.text(data.name);
    humidityEl.text(data.main.humidity);
    tempEl.text(data.main.temp);
    windSpeedEL.text(data.wind.speed + "MPH");

    cityForecast(cityId);
}
    );
    
}


searchBtn.click(function(){
    cityWeather(searchTerm);
})



$(document).ready(function(){


    



})