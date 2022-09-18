$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&APPID=46b4b9f4d4a4388ad8951723204ed362&units=metric",
    function (api) {
      $('.city').html('City : ' + api.name);
      $('.temp').html('Local Temp : ' + api.main.temp + 'C');
      $('.description').html('Description : ' + api.weather[0].description);
      $('.icon img').attr('src','https://openweathermap.org/img/wn/' + api.weather[0].icon + '.png');    
    });