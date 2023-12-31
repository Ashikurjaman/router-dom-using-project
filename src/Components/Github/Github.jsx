import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
  return (
    <>
    <div className='flex text-center justify-center gap-3 p-3 px-5'>
    <div>
        <img src={data.avatar_url} alt="" />
    </div>
    <div className='text-center  text-4xl bg-orange-700 p-3'>
        <h1>Github name : {data.name}</h1>
        <h2>ID: {data.id}</h2>
        <h2>Following: {data.following}</h2>
    </div>
    
    </div>

    
    </>
  )
}
 

export default Github;
export  const githubInfoLoader = async ()=>{
    const response =   await fetch('https://api.github.com/users/Ashikurjaman')
    return response.json();
  };


