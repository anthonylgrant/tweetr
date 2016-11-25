$(function() {
    console.log( "the function has loaded" );
    var $tweetsForm  = $("#tweetsform");
    var $textArea    = $tweetsForm.find(".textarea");
    var $textCounter = $tweetsForm.find('.counter');
    var TEXT_MAX     = 140;

    $textArea.on('input', function(e) {
      var textLength    = $(this).val().length;
      var textRemaining = TEXT_MAX - textLength;
      $textCounter.html(textRemaining + ' characters remaining');

    // UNCOMMENT IF YOU WANT TO RESTRICT USER FROM TYPING MORE THAN 140 CHARACTERS
    //   if (e.which < 0x20) {
    //     return;
    //   }

    //   if (this.value.length == text_max) {
    //     e.preventDefault();
    //   } else if (this.value.length > text_max) {
    //     this.value = this.value.substring(0, max);
    //   }
      if (textLength > TEXT_MAX) {
        $textCounter.addClass("counter-red");
      } else {
        $textCounter.removeClass("counter-red");
      }
    });
});
