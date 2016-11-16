$( document ).ready(function() {
    console.log( "the function has loaded" );
    var $textarea = $(".textarea");
    var $textcounter = $('.counter');
    var text_max = 140;
    console.log($textarea);
    console.log($textcounter);

    $textarea.on('input', function(e) {
      var text_length = $(this).val().length;
      var text_remaining = text_max - text_length;
      $textcounter.html(text_remaining + ' characters remaining');

    // UNCOMMENT IF YOU WANT TO RESTRICT USER FROM TYPING MORE THAN 140 CHARACTERS
    //   if (e.which < 0x20) {
    //     return;
    //   }

    //   if (this.value.length == text_max) {
    //     e.preventDefault();
    //   } else if (this.value.length > text_max) {
    //     this.value = this.value.substring(0, max);
    //   }

      if (this.value.length > text_max) {
        $('.counter').addClass("counter-red");
      } else {
        $('.counter').removeClass("counter-red");
      }
    });

    console.log($(".new-tweet").text());
});