import React from 'react'
import { addClassName } from '../utilis'

const Qualitie = ({ color, name, _id }) => {
  return (
    <span key={_id} className={addClassName(color)}>
      {name}
    </span>
  )
}

export default Qualitie
