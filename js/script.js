//business logic
$.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=LosAngeles,us&appid=e42d32af9555a899db7106b67e9e5aae',
    success: function(weather_data) {
        $('#container').append(weather_data.main.temp)
    }
})
