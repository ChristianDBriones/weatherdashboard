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
    var dateString =  new Date(data.dt*1000).toLocaleDateString()
     cityEl.textContent= data.name + " " + dateString;

     windEl.textContent = data.wind.speed;
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
    //
    const filteredForecast = data.list.filter((forecast) => forecast.dt_txt.includes("12:00:00"));
    cardsEl.innerHTML = ""
    for (let i = 0; i < 5; i++) {
      var card = document.createElement("div")
      card.setAttribute("class","card" )
      
      // date goes here var date =document.createElement("p")
      //date.innerHTML ="Date: " +  filteredForecast[i].main.date (i think something here is wron lmaog)
      //card.appendChild(date)

      var temp = document.createElement("p")
      temp.innerHTML ="Temp: " +  filteredForecast[i].main.temp 
      card.appendChild(temp)

      var wind = document.createElement("p")
      wind.innerHTML = filteredForecast[i].wind.speed 
      card.appendChild(wind)

      var humidity = document.createElement("p")
      humidity.innerHTML = filteredForecast[i].main.humidity
      card.appendChild(humidity)

      cardsEl.appendChild(card)   
      console.log(filteredForecast[i])
      
    }
  });
}


submitBtn.addEventListener('click', currentWeather)