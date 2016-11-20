"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);

    // ==> Later it can be invoked. Remember even if you pass
    //     'getTweets' to another scope, it still has closure over
    //     'db', so it will still work. Yay!

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet: ");
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  })



  // db.collection("tweets").find().toArray((err, results) => {
  //   // Lazy error handling:
  //   if (err) throw err;

  //   // ==> So we Read the Fantastic Manual, right?

  //   // ==> We could deal with the cursor, one item at a time:
  //   // console.log("for each item yielded by the cursor: ");
  //   // results.each((err, item) => console.log(" ", item));

  //   console.log("results.toArray:", results);


  //   //This is the end...
  //   db.close();
  // });
  // // ==> In typical node-callback style, any program
  // //     logic that needs to use the connection needs
  // //     to be invoked from within here.
  // //
  // // Another way to say: this is an "entry point" for
  // // a database-connected application!

  // // ==> At the end, we close the connection:
});