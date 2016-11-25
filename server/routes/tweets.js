"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function(DataHelpers) {

  tweetsRoutes.get("/", (req, res) => {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        // consider returning your own errors for security
        // sometimes ths will unintentionally expose the structure
        // of your backend if the error message is left up to the db/backend
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post("/", (req, res) => {
    const { user, text } = req.body;

    if (!text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const tweet = {
      user: (user || userHelper.generateRandomUser()),
      content: { text },
      created_at: Date.now()
    };

    DataHelpers.saveTweet(tweet, err => {
      if (err) {
        // consider your own errors, in prod mode at least
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return tweetsRoutes;
}
