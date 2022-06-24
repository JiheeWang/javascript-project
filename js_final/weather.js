
API_KEY = "080317df623fbb698b4d4796c5963e4b";

function geook(position){
    //console.log(position);
    const la = position.coords.latitude;
    const lo = position.coords.longitude;

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=${API_KEY}&units=metric`;
    //fetch는 자바스크립트가 url속 내용을 그대로 읽어오는 것
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weatherapi span:first-child");
            const weather = document.querySelector('#weatherapi span:last-child');
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        })};
function geoerror(){
    alert("can't find your location.");
}
navigator.geolocation.getCurrentPosition(geook, geoerror);