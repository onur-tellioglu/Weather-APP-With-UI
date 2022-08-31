const url = "https://api.openweathermap.org/data/2.5/";
const key = "YOUR API KEY";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResults(searchBar.value);
  }
};

const getResults = (cityName) => {
  let query = `${url}weather?q=${cityName}&units=metric&APPID=${key}`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (weather) => {
  let city = document.querySelector(".city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(weather.main.temp)}°C`;

  let description = document.querySelector(".description");
  description.innerText = weather.weather[0].main;

  let minMax = document.querySelector(".minmax");
  minMax.innerText = `${Math.floor(weather.main.temp_min)}°C / ${Math.ceil(
    weather.main.temp_max
  )}°C`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
