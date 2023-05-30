let weatherData;
let apiKey = "2d4c189dafec47748f28d32bebf4690c";
let city = "Holon";
function setup() {
  createCanvas(400, 400);
  loadJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    gotWeatherData
  );
  colorMode(HSB);
}
function gotWeatherData(data) {
  weatherData = data;
}
function draw() {
  if (weatherData) {
    let windDeg = weatherData.wind.deg;
    background(windDeg, 255, 255);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text(city, width / 2, height / 2 - 40);
    text(`Wind Degree: ${windDeg} m/s`, width / 2, height / 2);
  }
}
