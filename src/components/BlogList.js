import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Card from "../components/Card";

const BlogList = () => {
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

  return posts.filter(post => {
    return post.publish
  }).map(post => {
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

export default BlogList;

