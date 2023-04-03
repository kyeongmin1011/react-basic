import {useState} from "react";
import axios from "axios";

const BlogForm = () => {
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

  const onSubmit = () => {
    axios.post('http://localhost:3001/posts', {
      title,
      content
    })
  }

  return (
    <div className="BlogList container mt-3">
      <div className="mb-3">
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
                  rows="20"
                  value={content}
                  name="content"
                  onChange={handleInput}/>
      </div>

      <button className="btn btn-primary" onClick={onSubmit}>Save</button>
    </div>
  )
}

export default BlogForm;