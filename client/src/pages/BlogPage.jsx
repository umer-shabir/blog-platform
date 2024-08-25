import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blogService from '../services/blogService'
import { Box, Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'

const BlogPage = () => {
  const [blog, setBlog] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' })
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await blogService.getBlog(id)
        setBlog(blog)
      } catch (err) {
        console.error(err)
      }
    }

    fetchBlog()
  }, [id])

  const handleDelete = async () => {
    try {
      await blogService.deleteBlog(id)
      navigate('/')
    } catch (err) {
      console.err(err)
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
    setFormData({ title: blog.title, content: blog.content })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async () => {
    try {
      await blogService.updateBlog(id, formData)
      setIsEditing(false)
      const updatedBlog = await blogService.getBlog(id)
      setBlog(updatedBlog)
    } catch (err) {
      console.error(err)
    }
  }


  if (!blog) return <Typography>Loading...</Typography>

  return (
    <Container style={{ margin: '16px 0' }}>
      <Card variant="outlined" sx={{ marginBottom: 2 }}>
        <CardContent>
          {isEditing ? (
            <Box>
              <TextField label="Title" name="title" variant="outlined" fullWidth margin="normal" value={formData.title} onChange={handleChange} />
              <TextField label="Content" name="content" variant="outlined" fullWidth margin="normal" multiline rows={4} value={formData.content} onChange={handleChange} />
              <Box sx={{ marginTop: 2 }}>
                <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ marginRight: 2 }}>Update</Button>
                <Button variant="outlined" color="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography variant="h4" gutterBottom>{blog.title}</Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>{blog.author}</Typography>
              <Typography variant="body1" paragraph>{blog.content}</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/')} sx={{ marginRight: 2 }}>Back</Button>
                <Button variant="contained" color="warning" onClick={handleEdit} sx={{ marginRight: 2 }}>Edit</Button>
                <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
//   )
// }

export default BlogPage