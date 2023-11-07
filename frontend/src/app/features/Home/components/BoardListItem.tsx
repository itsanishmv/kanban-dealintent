import React from 'react'

type Props = {
    name: String
    desc : String
}

const BoardListItem = ({name , desc}: Props) => {
  return (
      <div className='flex flex-col border-2 border-black p-2 rounded-md ml-4'>
          <h2 className=' text-lg'>{name}</h2> 
          <h4 className=' text-sm'>{desc}</h4>
      </div>
  )
}

export default BoardListItem