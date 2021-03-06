// ### Create Favorite
exports.create = (req, res) => {
  var tweet = req.tweet;
  tweet._favorites = req.user;
  tweet.save(err => {
    if (err) {
      return res.send(400);
    }
    res.send(201, {});
  });
};

// ### Delete Favorite
exports.destroy = (req, res) => {
  var tweet = req.tweet;

  tweet._favorites = req.user;
  tweet.save(err => {
    if (err) {
      return res.send(400);
    }
    res.send(200);
  });
};
