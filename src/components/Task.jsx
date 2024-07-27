import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

export default function Task({ title, SelectProject, id, setProjectState }) {
  return (
    <div className="p-2 px-4 flex justify-between flex-col md:flex-row items-center gap-2  md:gap-0 hover:bg-stone-700 rounded cursor-pointer transition">
      <p className="text-sm md:text-md flex-1" onClick={() => SelectProject(id)}>
        {title}
      </p>
      <button
        className="bg-stone-500 p-1 rounded-full text-stone-200 flex items-center justify-center hover:bg-stone-600 w-5 h-5 text-sm transition"
        onClick={() =>
          setProjectState((prev) => {
            return {
              ...prev,
              SelectedProjectId: undefined,
              projects: prev.projects.filter((pro) => pro.id !== id),
            };
          })
        }
      >
        <RiDeleteBin7Line />
      </button>
    </div>
  );
}
