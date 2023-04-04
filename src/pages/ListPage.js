import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const ListPage = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  const getData = () => {
    axios.get('http://localhost:3001/posts')
      .then(res => setPosts(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  const onDelete = (e, id) => {
    e.stopPropagation()
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => setPosts(res => res.filter(item => item.id !== id)))
  }

  return (
    <div className="ListPage container mt-3">
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">Create New</Link>
        </div>
      </div>
      {posts.length > 0 ? posts.map(post => {
        return (
          <Card title={post.title}
                key={post.id}
                onClick={() => navigate('/blogs/edit')}>
            <div>
              <button className="btn btn-danger btn-sm"
                      onClick={(e) => onDelete(e, post.id)}>Delete
              </button>
            </div>
          </Card>
        )
      }) : 'no blog posts found'}
    </div>
  )
}
export default ListPage