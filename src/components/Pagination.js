import PropTypes from "prop-types";

const Pagination = ({currentPage, numberOfPages, onClick, limit }) => {
  const currentSet = Math.ceil(currentPage / limit) // 6 / 5 = 1.xx 반올림하면 2
  const lastSet = Math.ceil(numberOfPages / limit)
  const startPage = limit * (currentSet - 1) + 1 // 시작하는 페이지가 6
  const numberOfPageForSet = currentSet === lastSet ? numberOfPages%limit : limit


  return (
    <div className="Pagenation">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">

          {currentSet !== 1 && <li className="page-item">
            <div className="page-link cursor-pointer"
            onClick={() => onClick(startPage - limit)}> prev </div>
          </li>}

          {Array(numberOfPageForSet).fill(startPage)
            .map((value, index) => value + index)
            .map((pageNumber) => {
              return (
                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                  <div className="page-link cursor-pointer"
                       onClick={() => onClick(pageNumber)}>
                    {pageNumber}
                  </div>
                </li>
              )
            })}

          {currentSet !== lastSet && <li className="page-item">
            <div className="page-link cursor-pointer" href="#"
                 onClick={() => onClick(startPage + limit)}> next </div>
          </li>}

        </ul>
      </nav>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  limit: PropTypes.number
}

Pagination.defaultProps = {
  currentPage: 1,
  limit: 5
}

export default Pagination
