import React from 'react'
import { child } from './../utils'

const Counter = (props) => {
  let { id, value } = props

  const formatCount = () => {
    return value <= 0 ? 'empty' : value
  }

  const getBageClasses = () => {
    let classes = ' badge m-2 '
    classes += value <= 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }

  return (
    <>
      <div>
        <span>{props.name}</span>
        <span className={getBageClasses()}>{formatCount()}</span>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={props.onIncrement.bind(null, id)}
          children={child('+')}
        />
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={props.onDecrement.bind(null, id)}
          children={child('-')}
        />
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={props.onDelete.bind(null, id)}
          children={child('Удалить')}
        />
      </div>
    </>
  )
}

export default Counter
