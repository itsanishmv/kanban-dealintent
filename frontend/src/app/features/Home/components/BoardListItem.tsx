"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    name: String
    desc: String,
    id : number
}

const BoardListItem = ({ name, desc, id }: Props) => {
    const router = useRouter()
  return (
      <div onClick={()=> router.push(`${id}`)} className='flex flex-col border-2 border-black p-2 rounded-md ml-4'>
          <h2 className=' text-lg'>{name}</h2> 
          <h4 className=' text-sm'>{desc}</h4>
      </div>
  )
}

export default BoardListItem