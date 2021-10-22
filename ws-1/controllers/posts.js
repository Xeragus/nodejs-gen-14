const Post = require('../models/post');

module.exports = {
  create: async (req, res) => {
    try {
      const post = await Post.create(req.body);

      res.send({
        error: false,
        message: `User with id #${ req.body.user } has just created a new post!`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      });
    }
  }
}