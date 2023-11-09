import React from 'react'
import DeleteIcon from '@/app/components/elements/DeleteIcon'
type Props = {
    id: string
    title: string
    deleteTask : () => void
}

const KanbanColumnItem = (props: Props) => {
    const {id , title , deleteTask} = props
  return (
      <div className='flex items-center pr-2 w-full justify-between  border rounded-md bg-[#F7F7F7] text-[#615F5A] shadow-sm '>
          <h4 className='text-sm peer  w-full h-full p-2 pl-3'>{title}</h4> 
          <div className='cursor-pointer text-sm hover:text-red-500 hidden hover:flex peer-hover:block' onClick={()=>deleteTask(id)}>
              <DeleteIcon size="sm"/>
          </div>
     </div>
  )
}
export default KanbanColumnItem