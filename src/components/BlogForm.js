import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const BlogForm = ({editing}) => {
  const navigate = useNavigate()
  const [inputText, setInputText] = useState({
    title: '',
    content: ''
  })
  const [originalData, setOriginalData] = useState({
    originalTitle: '',
    originalContent: ''
  })
  const {title, content} = inputText
  const {originalTitle, originalContent} = originalData

  const handleInput = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  }

  const [publish, setPublish] = useState(false)
  const [originPublish, setOriginPublish] = useState(false)
  const handlePublish = (e) => setPublish(e.target.checked)


  const {id} = useParams();
  useEffect(() => {
    if (editing) {
      axios.get(`http://localhost:3001/posts/${id}`)
        .then((res) => {
          setInputText({
            title: res.data.title,
            content: res.data.content
          })
          setOriginalData({
            originalTitle: res.data.title,
            originalContent: res.data.content
          })
          setPublish(res.data.publish)
          setOriginPublish(res.data.publish)
        })
    }
  }, [id, editing])

  const isEdited = () => {
    return title !== originalTitle || content !== originalContent || publish !== originPublish
  }

  const onSubmit = () => {
    if (editing) { // 수정하기
      axios.put(`http://localhost:3001/posts/${id}`, {
        title,
        content,
        publish
      }).then(() => navigate(`/blogs/${id}`))

    } else { // 생성하기
      axios.post('http://localhost:3001/posts', {
        title,
        content,
        publish,
        createdAt: new Date()
      }).then(() => navigate('/blogs'))
    }
  }

  const goBack = () => {
    if (editing) {
      navigate(`/blogs/${id}`)
    } else {
      navigate('/blogs')
    }
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

      <div className="form-check">
        <input type="checkbox"
               className="form-check-input"
               checked={publish}
               onChange={handlePublish}

        />
        <label className="form" >Publish</label>
      </div>

      <button className="btn btn-primary"
              disabled={editing && !isEdited()}
              onClick={onSubmit}>
        {editing ? 'Edit' : 'Post'}
      </button>

      <button className="btn btn-danger ms-2"
              onClick={goBack}>
        Cancel
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
