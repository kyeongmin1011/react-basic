import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";


const ListPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const getData = () => {
    axios.get('http://localhost:3001/posts')
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getData()

  }, [])

  const onDelete = (e, id) => {
    e.stopPropagation()
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => setPosts(res => res.filter(item => item.id !== id)))
  }

  const renderBlogList = () => {
    if (loading) {
      return (
        <LoadingSpinner />
      )
    }

    if (posts.length === 0) {
      return (
        <div>'no blog posts found'</div>
      )
    }

    return posts.map(post => {
      return (
        <Card title={post.title}
              key={post.id}
              onClick={() => navigate(`/blogs/${post.id}`)}>
          <div>
            <button className="btn btn-danger btn-sm"
                    onClick={(e) => onDelete(e, post.id)}>Delete
            </button>
          </div>
        </Card>
      )
    })
  }

  return (
    <div className="ListPage container mt-3">
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">Create</Link>
        </div>
      </div>
      {renderBlogList()}
    </div>
  )
}
export default ListPage