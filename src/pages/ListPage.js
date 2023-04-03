import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../components/Card";

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
    <div className="ListPage container">
      <h1>Blogs</h1>
      {posts.map(post => {
        return (
          <Card post={post} key={post.id}>
            <button>button</button>
          </Card>
        )
      })}
    </div>
  )
}
export default ListPage