import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Card from "../components/Card";
import Pagination from "./Pagination";
import PropTypes from "prop-types";


const BlogList = ({isAdmin}) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  const getData = (page = 1) => {
    let params = {
      _page: page,
      _limit: 5,
      _sort: 'id',
      _order: 'desc'
    }

    if (!isAdmin) {
      params = {...params, publish: true}
    }

    axios.get(`http://localhost:3001/posts`, {
      params: params
    }).then(res => {
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
      <LoadingSpinner/>
    )
  }

  if (posts.length === 0) {
    return (
      <div>'no blog posts found'</div>
    )
  }

  const renderBlogList = () => {
    return posts.filter(post => {
      return isAdmin || post.publish // 관리자는 전부다 보이게
    }).map(post => {
      return (
        <Card title={post.title}
              key={post.id}
              onClick={() => navigate(`/blogs/${post.id}`)}>
          {isAdmin ? (<div>
            <button className="btn btn-danger btn-sm"
                    onClick={(e) => onDelete(e, post.id)}>Delete
            </button>
          </div>) : null}
        </Card>
      )
    })
  }


  return (
    <div>
      {renderBlogList()}
      <Pagination/>
    </div>
  )
}

BlogList.propTypes = {
  isAdmin: PropTypes.bool
}

BlogList.defaultProps = {
  isAdmin: false
}

export default BlogList;

