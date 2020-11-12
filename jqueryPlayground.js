$(document).ready(function () {


  // $( 'input' ).click(function( event ) {
  //   alert('It\'s getting hot in here!');
  //   event.preventDefault();
  //   $( this ).hide( 'slow' );
  // });

  var thermostat = new Thermostat();
  
  function updateTemperature() {
    $('.currentTempDisplay').text(thermostat.temperature);
    // $('.currentTempDisplay').attr('class', thermostat.energyUsage());
  }
  updateTemperature();

  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powerSavingMode').on('click', function() {
    thermostat.turnOnPowerSavingMode();
    $('#powerSavingMode').text('ON')
    updateTemperature();
  })

  $('#powerSavingMode').on('click', function() {
    thermostat.turnOffPowerSavingMode();
    $('#powerSavingMode').text('OFF')
    // alert('It\'s getting hot in here!');
    updateTemperature();
  })

  function displayWeather(city) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;
    let token = '&appid=2e73c213db3e36f1e5a8e5b382f3b084';
    let units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  };
    displayWeather('london');

    $('#select-city').submit(function(event) {
      event.preventDefault();
      let city = $('#current-city').val();
      displayWeather(city);
    })

    $('#reset').on('click', function() {
      $('.energyUsage').slideToggle(200);
    });
})

