const Card = ({post}) => {
  const {title} = post

  console.log('post', post)
  return (
      <div className="card mb-3" >
        <div className="card-body">
          {title}
        </div>
      </div>
  )
}

export default Card