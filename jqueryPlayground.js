$(document).ready(function () {

  $('input').addClass('tempUp');

  $('input').removeClass('tempUp');

  $( 'input' ).click(function( event ) {
    alert('It\'s getting hot in here!');
    event.preventDefault();
    $( this ).hide( 'slow' );
  });

  function myCallBack() {
    console.log("My call back function")
  };

  $.get( "https://async-workshops-api.herokuapp.com/people",  (res) => {
    console.log(res)
  }, myCallBack());




});
