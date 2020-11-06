$(document).ready(function () {
  //
  // $('input').click(function (event) {
  //   alert('It\'s getting hot in here!');
  //   event.preventDefault();
  // });
  //
  // $('input').addClass('tempUp');

  // $('input').removeClass('tempUp');
  $( 'input' ).click(function( event ) {
    console.dir(event);
    event.preventDefault();

    $( this ).hide( 'slow' );

  });'slow';
});
