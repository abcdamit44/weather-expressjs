let cityName = document.getElementById('cityName')
let submitBtn = document.getElementById('submitBtn')
let day = document.getElementById('day')
let date = document.getElementById('date')
let notice = document.getElementById('notice')
let showCity = document.getElementById('showCity')
let showCountry = document.getElementById('showCountry')
let showTemp = document.getElementById('showTemp')
let showWeather = document.getElementById('showWeather')
let temp_output_2 = document.querySelector('.temp_output_2')

const temperature = async () => {
    let cityNameValue = cityName.value;
    if (cityNameValue === "") {
        notice.innerText = "Please enter city name";
        temp_output_2.classList.add('hide')
    } else {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&units=metric&appid=d70f30185e7b127d0eb22ccb86b2fa0e`)
            const data = await res.json()
            const arrData = [data]
            notice.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            showTemp.innerHTML = `${arrData[0].main.temp}<sup>o</sup>C`;
            // showWeather.innerText = arrData[0].weather[0].main
            const tempStatus = arrData[0].weather[0].main;
            if (tempStatus === 'Clear') {
                showWeather.innerHTML = "<i class='fas fa-sun' style='color:yellow'></i>"
            } else if (tempStatus === 'Clouds') {
                showWeather.innerHTML = "<i class='fa fa-cloud' style='color:lightblue'></i>"
            } else if (tempStatus === 'Rain') {
                showWeather.innerHTML = "<i class='fa fa-cloud-rain' style='color:sky'></i>"
            } else {
                showWeather.innerHTML = "<i class='fas fa-sun' style='color:yellow'></i>"
            }

            cityName.value = ""
            temp_output_2.classList.remove('hide')


        } catch (error) {
            notice.innerText = "Enter correct city name";
            temp_output_2.classList.add('hide')
        }

    }

}

submitBtn.addEventListener('click', temperature)

const getCurrentDay = () => {
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let currentTime = new Date();

    let day = weekday[currentTime.getDay()]
    return day;
}
// const getCurrentDate = () => {
//     const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     const d = new Date();
//     let name = month[d.getMonth()];
//     return name;
// }
day.innerText = getCurrentDay()
date.innerHTML = new Date().toDateString()

