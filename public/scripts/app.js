/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready (function() {

  function renderTweets(tweets) {

    var parentEl = $('#tweets-container').html('');
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      tweets.forEach(function(tweet){
      console.log(tweet.user.name);
      var el = createTweetElement(tweet);
      parentEl.prepend(el);
    });
  }

  // CREATE TWEET ELEMENTS & APPEND TO EACH OTHER BEFORE APPENDING
  // TO DOM
    // IMPLEMENT MOMENT JS ON EPOCH TIME FROM DB
    //
  function createTweetElement(tweet) {
    var newDate = new Date(tweet.created_at);
    var momentTime = moment(newDate).fromNow();
    var tweeticons = '<span class="tweet-icons"><a><i class="fa fa-flag" aria-hidden="true"></i></a><a><i class="fa fa-retweet" aria-hidden="true"></i></a><a><i class="fa fa-heart" aria-hidden="true"></i></a></span>';

    // SET PARENT ELEMENT BEFORE APPENDING
    var $tweet = $('<article>').addClass('tweet card');

    // COMMENCE APPENDING LOL
    $tweet = $tweet
    //HEADER
    .append($('<header>')
        .append($('<div>')
          .addClass('tweet-header-user')
          .append($('<img>')
            .attr('src', tweet.user.avatars.small)
          )
          .append($('<h2>')
            .text(tweet.user.name)
          )
        )
        .append($('<span>')
          .text(tweet.user.handle)
        )
      )
    // TWEET BODY AKA P
    .append($('<p>')
      .text(tweet.content.text)
    )
    // FOOTER
    .append($('<footer>')
      .append($('<span>')
        .addClass('tweet-date')
        .text(momentTime)
      )
      .append($(tweeticons)
      )
    )
    return $tweet;
  }

  // USE AJAX TO RENDER TWEETS
  function loadTweets() {
    $.ajax({
      method: 'get',
      url: '/tweets/',
      success: function(tweetsdata) {
        // RENDER TWEETS INVOCATION
        renderTweets(tweetsdata);
      }
    });
  };

  // THIS DOES 2 THINGS!!
    // this form prevents default for submit button,
    // AND
    // it resets the form input
  $('#tweetsform').on('submit', function(event) {
    event.preventDefault();
    var formText = $('#tweetsformtext').val();
    var tweetInput = $(this);
    // make sure not submitting form if input is invalid
    if (formText === "")  {
      event.preventDefault();
        $(function() {
          $('.form-empty').delay(500).fadeIn('normal', function() {
            $(this).delay(2500).fadeOut();
          });
        });
        $('.new-tweet').effect( "shake" );
        this.reset();
    }
    // prevent form submission if submission is > 140 characters
    if (formText.length > 140)  {
    event.preventDefault();
      $(function() {
        $('.form-maxed').delay(500).fadeIn('normal', function() {
          $(this).delay(2500).fadeOut();
        });
      });
      $('.new-tweet').effect( "shake" );
      $('.counter').removeClass('counter-red').text('140 characters remaining');
      this.reset();
    }
    //resets counter to 140 characters
    $('.counter').text('140 characters remaining');

    $.ajax({
      method: 'post',
      url: tweetInput.attr('action'),
      data: tweetInput.find("textarea").serialize(),
      success: function() {
        loadTweets();
      }
    })
    // RESET FORM AFTER EVERYTHING
    this.reset();
  });

  //INVOKE LOAD TWEETS w/ AJAX FUNCTION
  loadTweets();

});



