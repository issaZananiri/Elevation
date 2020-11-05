

$( "button" ).click(function() {

    const text = $("#my-input").val()
    $( "ul" ).append(`<li> ${text}</li>`)
  });

  $("body").on("click", "li", function() {

    $( this ).remove()
  });