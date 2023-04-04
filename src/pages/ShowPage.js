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
        console.log(res)
      })
  }

  useEffect(() => {
    getPost(id)
  }, [])


  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <div className="ShowPage">
      <h2>show page</h2>
    </div>
  )
}

export default ShowPage