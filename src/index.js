let apiKey = "41bffb0eb3c79b0b1213ea49951cotc1";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}`;
let city = "Sydney";

function displayWeather(response) {
  console.log(response);
  let changeHeader = document.querySelector("#temp");
  let temperature = Math.round(response.data.temperature.current);

  let city = "Sydney";
  changeHeader.innerHTML = `It is ${temperature}deg;C in ${city}`;
}

axios.get(apiUrl).then(displayWeather);
