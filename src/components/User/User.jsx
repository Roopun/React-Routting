import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-red-300 text-3xl p-4'>User:{"Hello "}{userid}</div>
  )
}

export default User