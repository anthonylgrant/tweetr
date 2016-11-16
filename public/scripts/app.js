/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready (function() {

  var test = "THIS IS A TEST STRING";
  // Test / driver code (temporary). Eventually will get this from the server.
  var tweetsdata = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  // // Test / driver code (temporary)
  // console.log("This is tweetData", $tweet); // to see what it looks like
  // $('#tweets-container').append($tweet);
  // // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  // // Once implemented correctly, the exact same tweet component should be rendered into the tweets container, with the same CSS styles applied to it as before when you had into

  function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container

    var parentEl = $('#tweets-container').html('');

    tweets.forEach(function(tweet){
      console.log(tweet.user.name);
      var el = createTweetElement(tweet);
      parentEl.append(el);
    });
  }

  function createTweetElement(tweet) {

    var tweeticons = '<span class="tweet-icons"><a><i class="fa fa-flag" aria-hidden="true"></i></a><a><i class="fa fa-retweet" aria-hidden="true"></i></a><a><i class="fa fa-heart" aria-hidden="true"></i></a></span>';

    // var $tweet = $('<article>').addClass('tweet');
    // $tweet = $tweet
    // //HEADER
    // .append($('<header>')
    //     .append($('<div>')
    //       .addClass('tweet-header-user')
    //       .append($('<img>')
    //         .attr('src', tweet.user.avatars.small)
    //       )
    //       .append($('<h2>')
    //         .text(tweet.user.name)
    //       )
    //     )
    //     .append($('<span>')
    //       .text(tweet.user.handle)
    //     )
    //   )
    // // TWEET BODY AKA P
    // .append($('<p>')
    //   .text(tweet.content.text)
    // )
    // // FOOTER
    // .append($('<footer>')
    //   .append($('<span>')
    //     .addClass('tweet-date')
    //     .text(tweet.created_at)
    //   )
    //   .append($(tweeticons)
    //   )
    // )

    var $tweet = $('<article>').addClass('tweet');
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
        .text(tweet.created_at)
      )
      .append($(tweeticons)
      )
    )
    // var $header = $tweet.append('<header>').text('YOOOO');
    //
    // ...
    return $tweet;
  }

  renderTweets(tweetsdata);

});



