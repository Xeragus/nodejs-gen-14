const Post = require('../models/post');
const Sentiment = require('../models/sentiment');

module.exports = {
  all: async (req, res) => {
    try {
      const posts = await Post.find().populate('user');

      res.send({
        error: false,
        message: 'List of all posts from the database for you my dear',
        posts: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  getByID: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('comments').populate('sentiments');

      res.send({
        error: false,
        message: `Details about post with id #${req.params.id}`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  getByUser: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.params.id })

      res.send({
        error: false,
        message: `All posts for user with id #${req.params.id}`,
        posts: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  create: async (req, res) => {
    try {
      req.body.user = req.user.id;
      const post = await Post.create(req.body);

      res.status(201).send({
        error: false,
        message: `User with id #${ req.body.user } has just created a new post!`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  sentiment: async (req, res) => {
    console.log(req.body);
    const sentiment = await Sentiment.create({
      emoji: req.body.emoji,
      user: req.user.id,
      post: req.params.id
    })
    const post = await Post.findByIdAndUpdate(req.params.id, {
      $push: {
        sentiments: sentiment._id
      }
    });

    res.send({
      post: post
    })
  }
}