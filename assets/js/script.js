// My API Key
var apiKey = '&appid=0771c372e9b12d916768d6ec72becb9c';

// Display date
var currentDay = moment().format("dddd, MMMM Do");


// DOM Elements
var inputEl = document.querySelector('.input');
var searchBtnEl = document.querySelector('.search-button');
var citiesListEl = document.querySelector(".cities-list");

// Stores cityName in localStorage
var cityName = localStorage.getItem('cityNameStore');

// Link for current day
var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + apiKey;

// Link for 5-days forecast
var URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + apiKey;

// Stores value in localStorage
function recordCityData() {
  localStorage.setItem('cityNameStore', inputEl.value);
}
// Current Day Forecast function
$.ajax({
  url: URLWeather,
  method: "GET"
})
  .then(function (response) {

    // Add weather info to page
    $('.city').html("<h2>" + response.name + "</h2>");
    $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
    $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
    $('.humidity').text("Humidity: " + response.main.humidity + "%");
    $(".temperature").text("Temperature: " + response.main.temp);

    // Index function
    $.ajax({
      url: queryURLUv,
      method: "GET"
    })
      .then(function (response) {
        var uvValue = response.value

        // Add uv Index info to page
        $('.uv').text("UV Index: " + response.value);
        $('.uv').css("background-color", uvColor(uvValue));
      });

  });

function functionDay() {
  $(".current-date").text(currentDay);
};
functionDay();

// 5 Days Forecast function
$.ajax({
  url: URLForecast,
  method: "GET"
})

  .then(function (response) {

    var dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");

    // Adds day 1 data to page
    $(".day-one-temperature").text("Temp: " + response.list[0].main.temp);
    $(".day-one-date").html("<h6>" + dayOne + "</h6>");
    $(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");

    var dayTwo = moment(response.list[8].dt_txt).format("ddd, MMM D");
    // Adds day 2 data to page
    $(".day-two-temperature").text("Temp: " + response.list[8].main.temp);
    $(".day-two-date").html("<h6>" + dayTwo + "</h6>");
    $(".day-two-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-two-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

    var dayThree = moment(response.list[16].dt_txt).format("ddd, MMM D");
    // Adds day 3 data to page
    $(".day-three-temperature").text("Temp: " + response.list[16].main.temp);
    $(".day-three-date").html("<h6>" + dayThree + "</h6>");
    $(".day-three-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-three-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

    var dayFour = moment(response.list[24].dt_txt).format("ddd, MMM D");

    // Adds day 4 data to page
    $(".day-four-temperature").text("Temp: " + response.list[24].main.temp);
    $(".day-four-date").html("<h6>" + dayFour + "</h6>");
    $(".day-four-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-four-humidity").text("Humidity: " + response.list[24].main.humidity + "%");

    var dayFive = moment(response.list[32].dt_txt).format("ddd, MMM D");

    // Adds day 5 data to page
    $(".day-five-temperature").text("Temp: " + response.list[32].main.temp);
    $(".day-five-date").html("<h6>" + dayFive + "</h6>");
    $(".day-five-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-five-humidity").text("Humidity: " + response.list[32].main.humidity + "%");

  });

// Event Listener upon the click of the search button
searchBtnEl.addEventListener('click', recordCityData);