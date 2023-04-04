import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const BlogForm = ({ editing }) => {
  const navigate = useNavigate()
  const [inputText, setInputText] = useState({
    title: '',
    content: ''
  })

  const {title, content} = inputText

  const handleInput = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  }

  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then(res => {
        setInputText({
          title: res.data.title,
          content: res.data.content
        })
      })
  })

  const onSubmit = () => {
    axios.post('http://localhost:3001/posts', {
      title,
      content,
      createdAt: new Date()
    }).then(() => navigate('/blogs'))
  }

  return (
    <div className="BlogList container mt-3">
      <div className="mb-3">
        <h1><b>{editing ? 'Edit' : 'Create'} a blog post</b></h1>
        <label className="form-label">Title</label>
        <input type="text"
               className="form-control"
               value={title}
               name="title"
               onChange={handleInput}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea className="form-control"
                  rows="10"
                  value={content}
                  name="content"
                  onChange={handleInput}/>
      </div>

      <button className="btn btn-primary" onClick={onSubmit}>
        {editing ? 'Edit' : 'Post'}
      </button>
    </div>
  )
}

BlogForm.propTypes = {
  editing: PropTypes.bool
}

BlogForm.defaultProps = {
  editing: false
}

export default BlogForm;
