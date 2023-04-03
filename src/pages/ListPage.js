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
      <h2>리스트</h2>
    </div>
  )
}
export default ListPage