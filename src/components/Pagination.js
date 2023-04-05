import PropTypes from "prop-types";

const Pagination = ({ currentPage, numberOfPages }) => {
  return (
    <div className="Pagenation">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">

          <li className="page-item disabled">
            <a className="page-link" href="#"> prev </a>
          </li>

          {Array(numberOfPages).fill(1).map((value, index) => value + index)
            .map((pageNumber) => {
              return (
                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                  <a className="page-link" href="#">{pageNumber}</a>
                </li>
              )
            })}

          <li className="page-item">
            <a className="page-link" href="#"> next </a>
          </li>

        </ul>
      </nav>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages : PropTypes.number
}

Pagination.defaultProps = {
  currentPage: 1
}

export default Pagination