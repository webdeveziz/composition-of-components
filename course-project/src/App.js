import React, { useState } from 'react'
import API from './api/index';
import Users from './components/users';

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== userId))
    }

    const handleToggleBookMark = (id) => {
        const arrayOfUsers = users.filter((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark
                return user
            }
            return user
        })

        setUsers(arrayOfUsers)
    }

    return <div>
        <Users users={users} onDelete={handleDelete} onToggleBookMark={ handleToggleBookMark}/>
    </div>
}

export default App