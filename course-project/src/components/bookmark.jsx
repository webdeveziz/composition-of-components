import React from 'react'

const BookMark = ({ status, ...rest }) => {
  const bookMarks = (textClass = '') => (
    <i className={'bi bi-flag' + textClass}></i>
  )

  return (
    <>
      <button onClick={() => rest.onToggleBookMark(rest.id)}>
        {status ? bookMarks('-fill') : bookMarks()}
      </button>
    </>
  )
}

export default BookMark
