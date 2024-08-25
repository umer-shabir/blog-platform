import axios from 'axios'

const baseUrl = '/api/blogs'

const getAllBlogs = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getBlog = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const createBlog = async (blog) => {
  const response = await axios.post(baseUrl, blog)
  return response.data
}

const updateBlog = async (id, blog) => {
  const response = await axios.patch(`${baseUrl}/${id}`, blog)
  return response.data
}

const deleteBlog = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
}

