const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

const Post = mongoose.model('Post', { title: String, body: String });

module.exports = {
  getAll: async () => Post.find(),

  getById: async (id) => Post.find({ _id: id }),

  add: async (data) => {
    const { title, body } = data;
    const newPost = Post.create({ title, body });
    return newPost;
  },

  update: async (id, data) => {
    const {
      title,
      body
    } = data;
    const updatePost = await Post.update({ _id: id }, { $set: { title, body } });
    return updatePost
  },

  delete: async (id) => Post.delete(id),
};
