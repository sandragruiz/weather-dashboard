// Variables
var apiKEY = "469693915225b9c0f0a6990cf2097538"
var submitBtn = document.getElementById("submit-btn")

//Event Listener for Submit Button
submitBtn.addEventListener("click",function(event){
    event.preventDefault()
    var city = document.getElementById("city-name").value
    get5dayForecast(city)
})

//Get weather data from OpenWeather API
function get5dayForecast(city){
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKEY}&units=imperial`
    fetch(URL)
    .then(response => response.json())
    .then(apiData => {
        console.log(apiData)
        var htmlCards = ""
        for(let i=0;i<apiData.list.length;i=i+8) // 24/3 = 8
        {
            htmlCards += `
            <div class="card" style="width: 18rem;">
            <p> Temperature: ${apiData.list[i].main.temp}
  <img src="http://openweathermap.org/img/wn/${apiData.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="icon."></p>
  <div class="card-body">
    <h5 class="card-title">${apiData.list[i].dt_txt}</h5>
    <p class="card-text">Description: ${apiData.list[i].weather[0].description}.</p>
    <p class="card-text">DEscription: ${apiData.list[i].main.humidity}.</p>
    <p class="card-text">DEscription: ${apiData.list[i].wind.speed}.</p>

  </div>
</div>
            `

           
        }
        document.getElementById("five-day").innerHTML=htmlCards
    })
}