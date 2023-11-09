import React, { useState } from "react";
import KanbanColumn from "../components/KanbanColumn";
import { nanoid } from "nanoid";
import PlusIcon from "@/app/components/elements/PlusIcon";
type Props = {
  params: number;
};

const KanbanColumnPage = ({ params }: Props) => {
  const [columns, setColumns] = useState([
    {
      id: nanoid(),
      title: `To do`,
    },
    {
      id: nanoid(),
      title: `In progress`,
    },
    {
      id: nanoid(),
      title: `Completed`,
    }
  ]);

  function addColumn() {
    const newColumn = {
      id: nanoid(),
      title: `column ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
  }
  function deleteColumn(id : string) {
    const newColumn = columns.filter((col) => col.id !== id);
    setColumns(newColumn)
  }
  function updateColumnTitle(id, title) {
    const updatedColumnTitle = columns.map((column) => {
      if (column.id === id) {
        return {...column , title}
      } else {
        return column
      }
    });
    console.log("updated")
    console.log("title :  " , title)
    if (title !== "") {
      setColumns(updatedColumnTitle)
    } 
  }
  return (
    <div className="min-h-screen max-w-screen  flex  flex-col items-center p-20 w-full ">
      <div className="w-3/4">
        <h1 className=" text-3xl font-bold">Title {params}</h1>
        <p className=" text-md text-[#62615C]">
          Use this template to track your personal tasks. Click + New to create
          a new task directly on this board. Click an existing task to add
          additional context or subtasks.
        </p>
      </div>
      
      <div className="w-full flex justify-center">
      <div className="flex items-start  overflow-x-auto  mt-8 pb-28">
        <div className="flex gap-4  ">
          {columns.map(({ id, title }) => (
            <KanbanColumn key={id} title={title} id={id} deleteColumn={deleteColumn} updateColumnTitle={updateColumnTitle} />
          ))}
        </div>
        <button className="flex" onClick={addColumn}>
          <PlusIcon size="md" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default KanbanColumnPage;
