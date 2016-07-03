// Don't force https when serving the website locally
if (!(window.location.host.startsWith("localhost")) && (window.location.protocol != "https:")) {
  window.location.protocol = "https";
}

//highligth.js
$(document).ready(function() {
  $('pre').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});


$(document).ready(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();
    $('#submitButton').attr('disabled');
    var data = $(this).serialize()
    $.ajax({
      url: "https://formspree.io/staminaloops@gmail.com",
      method: "POST",
      data: data,
      dataType: "json"
    }).done(function() {
      // Success message
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#success > .alert-success')
        .append("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success')
        .append('</div>');
      // reset
      document.getElementById('form3').reset();
      $('#submitButton').removeAttr('disabled');
    })

  });
});
