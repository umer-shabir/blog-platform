const Blog = require('../models/Blog')

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json(blogs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getBlog = async (req, res) => {
  const { id } = req.params
  try {
    const blog = await Blog.findById(id)
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found '})
    }
    res.status(200).json(blog)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const createBlog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  })
  try {
    const newBlog = await blog.save()
    res.status(201).json(newBlog)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const updateBlog = async (req, res) => {
  const { id } = req.params
  const body = req.body
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true })
    if (!updatedBlog) {
      res.status(404).json({ message: 'Blog not found' })
    }
    res.status(200).json(updatedBlog)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}


const deleteBlog = async (req, res) => {
  const { id } = req.params
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id)
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' })
    }
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
}