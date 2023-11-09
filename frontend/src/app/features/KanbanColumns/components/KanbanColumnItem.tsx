import React, { useState } from "react";
import DeleteIcon from "@/app/components/elements/DeleteIcon";
type Props = {
  id: string;
  title: string;
deleteTask: (e:any) => void;
  updateColumnItem : (e : any)=> void
};

const KanbanColumnItem = (props: Props) => {
  const { id, title, deleteTask , updateColumnItem } = props;
    const [isEditable, setIsEditable] = useState(false);
    const [itemTitle , setItemTitle] = useState()

  return (
    <div className="flex items-center pr-2 w-full justify-between  border rounded-md bg-[#F7F7F7] text-[#615F5A] shadow-sm ">
      {isEditable ? (
        <input
                  onBlur={() => {
                      updateColumnItem(id, itemTitle)
                      setIsEditable(false)
                  }}
                  onChange={(e)=> setItemTitle(e.target.value)}
          className="outline-none border-2 peer w-full h-full p-2 pl-3"
          type="text"
        />
      ) : (
        <h4
          onClick={() => setIsEditable(true)}
          className="text-sm peer  w-full h-full p-2 pl-3"
        >
          {title}
        </h4>
      )}

      <div
        className="cursor-pointer text-sm hover:text-red-500 hidden hover:flex peer-hover:block"
        onClick={() => deleteTask(id)}
      >
        <DeleteIcon size="sm" />
      </div>
    </div>
  );
};
export default KanbanColumnItem;
