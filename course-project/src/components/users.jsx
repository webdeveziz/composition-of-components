import React from 'react'
import { addClassName } from '../utilis'
import User from './user'
import SearchStatus from './searchStatus'

const Users = ({ users, ...rest }) => {
  return users.length === 0 ? (
    <div className={addClassName('danger')}>
      Никто с тобой не тусанет сегодня
    </div>
  ) : (
    <>
      {<SearchStatus length={users.length} />}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценки</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <User key={user._id} {...user} {...rest} length={users.length} />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Users
