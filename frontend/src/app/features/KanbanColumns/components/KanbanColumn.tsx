import React, { useState } from "react";
import DeleteIcon from "@/app/components/elements/DeleteIcon";
import PlusIcon from "@/app/components/elements/PlusIcon";
import EditIcon from "@/app/components/elements/EditIcon";
import KanbanColumnItem from "./KanbanColumnItem";
import { nanoid } from "nanoid/non-secure";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import {
  DndContext,
  DragOverlay,
  useSensors,
  useSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { createPortal } from "react-dom";
type Props = {
  id: string;
  title: string;
  deleteColumn: (e: any) => void;
  updateColumnTitle: (e: any) => void;
};

const KanbanColumn = (props: Props) => {
  const { id, title, deleteColumn, updateColumnTitle } = props;
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const [columnTitle, setColumnTitle] = useState();
  const taskId = tasks?.map((task) => task.id);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(mouseSensor);

  function createNewTask() {
    const newTask = {
      id: nanoid(),
      title: `task ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
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
  function updateColumnItem(id, title) {
    const updatedColumnItemTitle = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title };
      } else {
        return task;
      }
    });

    if (title !== "") {
      setTasks(updatedColumnItemTitle);
    }
  }
  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current.type === "Task") {
      setActiveTask(event.active.data.current.task);
    }
  }
  function onDragEnd(event  : DragEndEvent) {
   
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;
    setTasks((tasks) => {
      const activeTaskIndex = tasks.findIndex((task) => task.id === active.id);
      const overTaskIndex = tasks.findIndex((task) => task.id === over.id);

      return arrayMove(tasks, activeTaskIndex, overTaskIndex);
    });
  }

  return (
    <div className="border shadow-md h-[350px] w-[300px] rounded-lg  ">
      <div className=" flex justify-between p-2">
        <div className={`${columnTitleColor()} w-1/2 rounded-md px-2 relative`}>
          {isEditable && (
            <input
              className="outline-none p-2 border-2 rounded-md top-8 absolute shadow-lg z-20 left-0"
              type="text"
              onBlur={() => {
                updateColumnTitle(id, columnTitle);
                setIsEditable(false);
              }}
              onChange={(e) => setColumnTitle(e.target.value)}
            />
          )}
          <h4 className="">{title}</h4>
        </div>
        <div className="cursor-pointer flex items-center justify-around w-1/4 opacity-50">
          <span onClick={() => setIsEditable(true)} className="">
            <EditIcon size="sm" />
          </span>
          <span onClick={() => deleteColumn(id)}>
            {" "}
            <DeleteIcon size="sm" />
          </span>
        </div>
      </div>
      <div className="overflow-y-auto h-full no-scrollbar">
        <div className="flex flex-col gap-1 ">
          <DndContext
            sensors={sensors}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          >
            <SortableContext items={taskId}>
              {tasks?.map(({ id, title }) => (
                <KanbanColumnItem
                  key={id}
                  id={id}
                  title={title}
                  deleteTask={deleteTask}
                  updateColumnItem={updateColumnItem}
                />
              ))}
            </SortableContext>
            {
              <DragOverlay>
                              {activeTask && (
                                  <div className="shadow-xl">
                                      <KanbanColumnItem
                    key={activeTask.id}
                    id={activeTask.id}
                    title={activeTask.title}
                    deleteTask={deleteTask}
                    updateColumnItem={updateColumnItem}
                  />  
                                  </div>
                
                )}
              </DragOverlay>
            }
          </DndContext>
          <div
            onClick={createNewTask}
            className="flex items-center px-2 text-[grey] hover:opacity-100 opacity-50 cursor-pointer"
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
