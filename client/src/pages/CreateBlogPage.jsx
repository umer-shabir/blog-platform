import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import blogService from '../services/blogService'

const CreateBlogPage = () => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '', author: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
  }

  const handleSumbit = async (e) => {
    e.preventDefault()
    try {
      const createdBlog = await blogService.createBlog(newBlog)
      navigate(`/blog/${createdBlog.id}`)
      setNewBlog({ title: '', content: '', author: ''})
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '16px 0' }}>Create a New Blog Post</Typography>
      <form onSubmit={handleSumbit}>
        <Box>
          <TextField label="Title" name="title" variant="outlined" fullWidth margin="normal" value={newBlog.title} onChange={handleChange} required />
          <TextField label="Content" name="content" variant="outlined" fullWidth margin="normal" value={newBlog.content} onChange={handleChange} required />
          <TextField label="Author" name="author" variant="outlined" fullWidth margin="normal" value={newBlog.author} onChange={handleChange} required />
          <Box sx={{ marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>Create Blog</Button>
          </Box>
        </Box>
      </form>
    </Container>
  )
}

export default CreateBlogPage