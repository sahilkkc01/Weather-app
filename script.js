const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather")
const temperature= document.querySelector(".temperature")
const description= document.querySelector(".description")

btn.addEventListener("click",()=>{
    let city = input.value;
    getweather(city);

})

function getweather(city){
    console.log(city);
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'71fccc74152a507f8f10bcee794b4c98'}`)
    .then(response=>response.json())
    .then(data => {

        console.log(data);
        //weather is array of objecs
        const iconCode= data.weather[0].icon;
        //w'll now crate html for icon section with help of class icon

        icon.innerHTML= `<img src="http://openweathermap.org/img/wn/${iconCode}.png"
        alt="weather icon"/>`;

        const weathercity=data.name;
        const weatherCountry=data.sys.country;

        weather.innerHTML=`${weathercity},${weatherCountry}`;

        let weatherTemp=data.main.temp;
        // //kelvin to celcuis
        weatherTemp=weatherTemp - 273;

        //removing more the 2 decimal number
        const temp=weatherTemp.toFixed(2);
        temperature.innerHTML=`${temp}°C`;

        const weatherDesc=data.weather[0].description;
        description.innerHTML=`${weatherdesc}`;
    })

}