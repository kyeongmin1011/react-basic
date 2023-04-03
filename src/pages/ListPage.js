import axios from "axios";
import {useEffect, useState} from "react";

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
    <div className="ListPage">
      <h1>Blogs</h1>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </div>
        )
      })}
    </div>
  )
}
export default ListPage