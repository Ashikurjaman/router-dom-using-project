import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-orange-600 text-white text-3xl  m-4 p-3 h-80'>User : {userId}</div>
  )
}

export default User