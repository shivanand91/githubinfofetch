import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { username } = useParams()
  return (
      <div className='w-full text-center text-2xl bg-gray-700 py-4 text-white '>User: <span className='text-amber-400 font-bold'>{ username }</span></div>
  )
}

export default User