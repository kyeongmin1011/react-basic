import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";


const ShowPage = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setPost(res.data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getPost(id)
  }, [])

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <div className="ShowPage container mt-3">
      <h1>{post.title}</h1>
      <small className="text-muted">{printDate(post.createdAt)}</small>
      <hr/>
      <p>{post.content}</p>
    </div>
  )
}

export default ShowPage