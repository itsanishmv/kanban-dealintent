import React from 'react'
import BoardListItem from './BoardListItem'
import {nanoid} from "nanoid"
type Props = {}
const list = [
    { id: nanoid(),name: "task 1", desc: "task 1 description" },
    { id: nanoid(), name: "task 2", desc: "task 2 description" },
    { id: nanoid(), name: "task 3", desc: "task 3 description" },
    { id: nanoid(), name: "task 4", desc: "task 4 description" },
    { id: nanoid(),name: "task 5", desc: "task 5 description" },
    
]
const BoardLists = (props: Props) => {
  return (
      <div className='flex  w-1/2 mt-4 flex-wrap gap-y-4'>
          {list.map((item) => (
            <BoardListItem key={item.id} name={item.name} desc={item.desc} id={item.id} />
          ))}
    </div>
  )
}
export default BoardLists