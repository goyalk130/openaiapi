import React from 'react'

const Query = ({query,reply}) => {
  return (
    <div className='w-full flex flex-col m-2 ml-0 bg-slate-800'>
        <div className='flex-0 w-full flex flex-row'><h1 className='w-fit text-blue-400'>query : </h1><h1 className='flex-0'>{query}</h1></div>
        <div className='flex-0 w-full flex flex-row'><h1 className='w-fit text-blue-400'>response : </h1><h1 className='flex-0'>{reply}</h1></div>
    </div>
    
  )
}

export default Query
