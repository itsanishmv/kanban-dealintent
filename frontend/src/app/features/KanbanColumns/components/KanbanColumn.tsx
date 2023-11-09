import React, { useState } from "react";
import DeleteIcon from "@/app/components/elements/DeleteIcon";
import PlusIcon from "@/app/components/elements/PlusIcon";
import KanbanColumnItem from "./KanbanColumnItem";
import { nanoid } from "nanoid/non-secure";
type Props = {
  id: string;
  title: string;
  deleteColumn: (e: any) => void;
};

const KanbanColumn = (props: Props) => {
  const { id, title, deleteColumn } = props;
  const [tasks, setTasks] = useState([]);
  function createNewTask() {
    const newTask = {
      id: nanoid(),
      title: `task ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
    }
    function deleteTask(id) {
        const newTask = tasks.filter((task) => task.id !== id)
        setTasks(newTask)
    }
  function columnTitleColor() {
    if (title === "To do") {
      return "bg-[#FFE2DD] text-[#5D1715] ";
    } else if (title === "In progress") {
      return "bg-[#FDECC8] text-[#837058]";
    } else if (title === "Completed") {
      return "bg-[#DBEDDB] text-[#1C3829]";
    } else {
      return "bg-[#FADEC9]";
    }
  }
  
  return (
    <div className="border shadow-md h-[350px] w-[300px] rounded-lg  ">
      <div className=" flex justify-between p-2">
        <div className={`${columnTitleColor()} w-1/2 rounded-md px-2`}>
          <h4 className="">{title}</h4>
        </div>
        <div className="cursor-pointer" onClick={() => deleteColumn(id)}>
          <DeleteIcon size="md" />
        </div>
      </div>
      <div className="overflow-y-auto h-full no-scrollbar">
        <div className="flex flex-col gap-1 ">
          {tasks.map(({ id, title }) => (
            <KanbanColumnItem key={id} id={id} title={title} deleteTask={deleteTask} />
          ))}
          <div
            onClick={createNewTask}
            className="flex items-center px-2 text-[grey] opacity-50 cursor-pointer"
          >
            <PlusIcon size={"sm"} />
            <h4 className="text-xs">New</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;
