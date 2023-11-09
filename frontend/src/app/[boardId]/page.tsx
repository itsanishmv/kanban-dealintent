"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import KanbanColumnPage from '../features/KanbanColumns/pages/KanbanColumnPage'
type Props = {
  params: {
    boardId : number
  }
}
const page = ({params}: Props) => {
  
  return (
    <div className='flex justify-center'>
      <KanbanColumnPage params={params.boardId} />
    </div>
  )
}

export default page