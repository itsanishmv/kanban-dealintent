import React from 'react'
import BoardLists from '../components/BoardLists'
type Props = {}

export default function Home() {
    return (
      <div className="flex flex-col items-center min-h-screen w-2/3 mt-8 border border-black">
        <h1>KANBAN BOARD</h1>
        <BoardLists/>
      </div>
    )
  }