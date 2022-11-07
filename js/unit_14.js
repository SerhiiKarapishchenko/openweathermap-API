const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "abf2fd63340104750ddad41abb81e8cb",
};
function getWeather() {
  const cityId = document.querySelector("#city").value;
  fetch(
    `${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}&lang=ru&units=metric`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

//select
let div = document.createElement("div");
div.classList.add("select-box");
let myweather = document.querySelector(".out");
myweather.append(div);
let select = document.createElement("select");
select.classList.add("select");
select.setAttribute("id", "city");
div.append(select);
let optionOne = document.createElement("option");
optionOne.innerHTML = "Киев";
optionOne.classList.add("options");
optionOne.setAttribute("value", "703448");
select.append(optionOne);
let optionTwo = document.createElement("option");
optionTwo.innerHTML = "Львов";
optionTwo.classList.add("options");
optionTwo.setAttribute("value", "702550");
select.append(optionTwo);
let optionThree = document.createElement("option");
optionThree.innerHTML = "Одесса";
optionThree.classList.add("options");
optionThree.setAttribute("value", "698740");
select.append(optionThree);
let optionFour = document.createElement("option");
optionFour.innerHTML = "Харьков";
optionFour.classList.add("options");
optionFour.setAttribute("value", "706483");
select.append(optionFour);

//temperature
let temperatureBox = document.createElement("div");
temperatureBox.classList.add("temperature-box");
myweather.append(temperatureBox);
let temperature = document.createElement("div");
temperature.classList.add("temperature");
temperatureBox.append(temperature);

//img-description
let imgBox = document.createElement("div");
imgBox.classList.add("img-box");
myweather.append(imgBox);
let img = document.createElement("div");
img.classList.add("img");
imgBox.append(img);
let imgDescription = document.createElement("p");
imgDescription.classList.add("text-description");
imgBox.append(imgDescription);

//weather-items
let weatherDescription = document.createElement("div");
weatherDescription.classList.add("weather-items");
myweather.append(weatherDescription);
let derectionOfTheWind = document.createElement("div");
derectionOfTheWind.classList.add("weather-item", "derection-wind");
weatherDescription.append(derectionOfTheWind);
let windSpeed = document.createElement("div");
windSpeed.classList.add("weather-item", "windspeed");
weatherDescription.append(windSpeed);
let pressure = document.createElement("div");
pressure.classList.add("weather-item", "pressure");
weatherDescription.append(pressure);
let humidity = document.createElement("div");
humidity.classList.add("weather-item", "humidity");
weatherDescription.append(humidity);

function showWeather(data) {
  console.log(data);
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "&deg;";
  document.querySelector(
    ".img"
  ).innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  document.querySelector(".text-description").innerHTML =
    "<b>" + data.weather[0]["description"] + "</b>";
  document.querySelector(".derection-wind").innerHTML =
    "<b>Направление ветра</b> <br>" + derectionOfWind(data.wind.deg);
  document.querySelector(".windspeed").innerHTML =
    "<b>Скорость вестра</b> " + Math.round(data.wind.speed) + "м/с";
  document.querySelector(".pressure").innerHTML =
    "<b>Давление</b> " + data.main.pressure + " мм рт. ст.";
  document.querySelector(".humidity").innerHTML =
    "<b>Влажность</b> " + data.main.humidity + "%";
}

//derection wind
function derectionOfWind(degree) {
  if (degree > 22.5) {
    return "Северо-восточный";
  }
  if (degree > 67.5) {
    return "Восточный";
  }
  if (degree > 122.5) {
    return "Юго-восточный";
  }
  if (degree > 157.5) {
    return "Южный";
  }
  if (degree > 202.5) {
    return "Юго-заподный";
  }
  if (degree > 247.5) {
    return "Западный";
  }
  if (degree > 292.5) {
    return "Северо-западный";
  }
  if (degree > 337.5) {
    return "Северный";
  }
  return "Северный";
}

getWeather();
document.querySelector("#city").onchange = getWeather;
