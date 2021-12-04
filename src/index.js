const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const urlSettings = "&appid=18cca4b95529ce31913b2c6dad32192c&lang=es&units=metric";

const button = document.getElementById("submit");
const input = document.querySelector("input");
const mountNode = document.querySelector("#app")

async function fetchWeather(city) {
  const response = await window.fetch(baseUrl + city + urlSettings);
  const data = await response.json();
  return data;
}

const printWheather = async () => {
  const city = input.value
  const myWheather = await fetchWeather(city);
  const whaterImage = document.createElement('img')
  whaterImage.src = `https://openweathermap.org/img/w2/${myWheather.weather[0].icon}.png`
  whaterImage.width= '75'
  const container = document.createElement('div')
  container.className = 'flex flex-col items-center bg-green-100 w-3/12  m-5 p-10 rounded-lg'
  const cityName = document.createElement('h2')
  cityName.className = 'font-bold text-2xl'
  cityName.textContent = myWheather.name
  const temp = document.createElement('p')
  temp.textContent = `${myWheather.main.temp}°C`
  const cityWheaher = document.createElement('p')
  cityWheaher.textContent = myWheather.weather[0].description
  container.append(cityName, whaterImage,cityWheaher,temp)
  mountNode.append(container)
  input.value = ''
};


button.addEventListener('click', printWheather)

input.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    printWheather()
  } 
});
