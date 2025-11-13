// http://api.weatherapi.com/v1/current.json?key=a05c5c8f9fd2472298172343251011&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location div");
const dateandTimeField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".weather_condition p");
const searchField = document.querySelector(".search_field");
// const searchButton = document.querySelector(".search-btn");
const form = document.querySelector("form");

form.addEventListener("submit", searchForCity);

let target = "London";

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=a05c5c8f9fd2472298172343251011&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    
    updateWeatherDetails(temp, locationName, time, condition);
}

function updateWeatherDetails(temp,locationName, time, condition) {
    
    let splitDate = time.split(" ")[0];
    let splitTime = time.split(" ")[1];
    let currentDay = getDayName(new Date(splitDate).getDay());
    
    temperatureField.innerHTML = `${temp}&deg;C`;
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitDate} - ${currentDay} - ${splitTime}`;
    weatherField.innerText = condition;
}

function searchForCity(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResults(target);
}

fetchResults(target);


function getDayName(number) {
    switch (number) {
        case 0:
            return "Monday";
        case 1:
            return "Tuesday";
        case 2:
            return "Wednesday";
        case 3:
            return "Thursday";
        case 4:
            return "Friday";
        case 5:
            return "Saturday";
        case 6:
            return "Sunday";
    }
}