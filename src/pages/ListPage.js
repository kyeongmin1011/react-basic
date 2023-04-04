import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";

const ListPage = () => {
  const [posts, setPosts] = useState([])

  const getData = () => {
    axios.get('http://localhost:3001/posts')
      .then(res => setPosts(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="ListPage container mt-3">
     <div className="d-flex justify-content-between">
       <h1>Blogs</h1>
       <div>
         <Link to="/blogs/create" className="btn btn-success" >Create New</Link>
       </div>
     </div>
      {posts.map(post => {
        return (
          <Card title={post.title} key={post.id}>
            <button>button</button>
          </Card>
        )
      })}
    </div>
  )
}
export default ListPage