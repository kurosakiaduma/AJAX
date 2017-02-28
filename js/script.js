//business logic
var to_be_run_on_server_response = function(weather_data) {
    $("ul#weather").empty();
    var timeSunrise = new Date(weather_data.sys.sunrise * 1000)
    var timeSunset = new Date(weather_data.sys.sunset * 1000)

    $("h3#station").text(weather_data.name);

    $("ul#weather").append("<li><span class='pressure'>" + "Pressure: " + weather_data.main.pressure + "</span></li>");

    $("ul#weather").append("<li><span class='maxtemp'>" + "Maximum Temperature: " + weather_data.main.temp_max + "</span></li>");

    $("ul#weather").append("<li><span class='mintemp'>" + "Minimum Temperature: " + weather_data.main.temp_min + "</span></li>");

    $("ul#weather").append("<li><span class='description'>" + "Description of the weather in "+ weather_data.name + ": " + weather_data.weather[0].description + "</span></li>");

    $("ul#weather").append("<li><span class='sunrise'>" + "Time of sunrise in Los Angeles: " + timeSunrise + "</span></li>");

    $("ul#weather").append("<li><span class='sunset'>" + "Time of sunset in Los Angeles: " + timeSunset + "</span></li>");

};
//user interface logic
function myFunction() {

    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=LosAngeles,us&appid=e42d32af9555a899db7106b67e9e5aae',
        success: to_be_run_on_server_response
    });
};


function myFunction2() {

    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=32.22&lon=-100.50&APPID=c6fdcf2d49a0bba3e14f310bd3d5cdc2',
        success: to_be_run_on_server_response
    });
};
