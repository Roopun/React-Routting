import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
  return (
    <div className='flex justify-center items-center text-center m-4 bg-gray-600 text-green-300 p-4 text-4xl font-semibold'>Github Repo: {data.public_repos}
    <img src={data.avatar_url} alt="Git picture" width={250} className="object-center"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Roopun')
    return response.json()
}