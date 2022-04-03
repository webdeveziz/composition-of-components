import React from 'react'
import BookMark from './bookmark'
import Qualitie from './qualitie'

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookMark,
}) => {
  return (
    <>
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((qual) => (
            <Qualitie key={qual._id} {...qual} />
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate + '/5'}</td>
        <td>
          {
            <BookMark
              status={bookmark}
              id={_id}
              onToggleBookMark={onToggleBookMark}
            />
          }
        </td>
        <td>
          <button className="btn btn-danger m-2" onClick={() => onDelete(_id)}>
            Удалить
          </button>
        </td>
      </tr>
    </>
  )
}

export default User
