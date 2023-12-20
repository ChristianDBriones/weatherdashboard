var apiKey = "2a403e86b8baea5dcfb2052d16458fa0"  
var inputEl = document.querySelector("#city");
var submitBtn =  document.querySelector("#search");
var cityEl = document.querySelector("#cityName")
var windEl = document.querySelector("#wind")
var tempEl = document.querySelector("#temp")
var humidityEl = document.querySelector("#humidity")
var cardsEl = document.getElementById("cards")

function currentWeather() {
  var city = inputEl.value

  fetch ('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid='+apiKey)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   
     cityEl.textContent= data.name
     windEl.textContent= data.wind.speed
     tempEl.textContent= data.main.temp
     humidityEl.textContent= data.main.humidity
     forecast(city)
  });
}


function forecast(city) {
  fetch ('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid='+apiKey)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    const newData = data.list;
    for (let i = 0; i < 5; i++) {
      var fiveDay = document.createElement("div")
      fiveDay.setAttribute("class","card" )
      cardsEl.appendChild(fiveDay)

      // const time = newData[i].dt_txt.split(" ")[1]
      
      // if (time === "12:00:00") {
        
      
      
    }
  });
}






submitBtn.addEventListener('click', currentWeather)