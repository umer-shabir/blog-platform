const router = require('express').Router()

const { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blogs')

router.get('/', getBlogs)
router.post('/', createBlog)
router.get('/:id', getBlog)
router.patch('/:id', updateBlog)
router.delete('/:id', deleteBlog)

module.exports = router