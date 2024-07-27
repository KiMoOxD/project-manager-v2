import React, { useState } from "react";
import Tasks from "./Tasks";
import { MdArrowBackIosNew } from "react-icons/md";
import { ImSpinner10 } from "react-icons/im";
import { useProjects } from "../context/ProjectContextProvider";

let timer = 500;

export default function SideBar() {
  let { projectState, setProjectState } = useProjects();
  let [btnContent, setBtnContent] = useState({
    new: "+ Add Project",
    select: `Go Back`,
  });

  let Btn = projectState.SelectedProjectId ? (
    <div className="flex justify-center md:justify-end">
      <button
        className="flex justify-center items-center md:hidden mb-3 w-10 h-9 text-sm bg-stone-800 rounded-md text-stone-50 hover:bg-stone-600 transition"
        onClick={() => {
          setBtnContent((prev) => ({ ...prev, select: "loading..." }));
          setTimeout(() => {
            setBtnContent((prev) => ({ ...prev, select: "Go Back" }));
            setProjectState((prev) => {
              return { ...prev, SelectedProjectId: undefined };
            });
          }, timer);
        }}
      >
        {" "}
        {btnContent.select !== "loading..." && <MdArrowBackIosNew />}
        {btnContent.select === "loading..." && (
          <ImSpinner10 className="animate-spin" />
        )}
      </button>
      <button
        className="hidden md:flex self-end  gap-1 justify-center items-center mb-3 w-32 h-9 text-sm bg-stone-800 rounded-md text-stone-50 hover:bg-stone-500 transition s"
        onClick={() => {
          setBtnContent((prev) => ({ ...prev, select: "loading..." }));
          setTimeout(() => {
            setBtnContent((prev) => ({ ...prev, select: "Go Back" }));
            setProjectState((prev) => {
              return { ...prev, SelectedProjectId: undefined };
            });
          }, timer);
        }}
      >
        {" "}
        {btnContent.select !== "loading..." && <MdArrowBackIosNew />}
        {btnContent.select === "loading..." && (
          <ImSpinner10 className="animate-spin" />
        )}
        {btnContent.select !== "loading..." && btnContent.select}
      </button>
    </div>
  ) : (
    <div className="flex justify-center md:justify-end">
      <button
        className="flex justify-center items-center md:hidden mb-3 w-10 h-9 text-sm bg-stone-800 rounded-md text-stone-50 hover:bg-stone-600 transition"
        onClick={() => {
          setBtnContent((prev) => ({ ...prev, new: "loading..." }));
          setTimeout(() => {
            setBtnContent((prev) => ({ ...prev, new: "+ Add Project" }));
            setProjectState((prev) => {
              return { ...prev, SelectedProjectId: null };
            });
          }, timer);
        }}
      >
        {btnContent.new === "loading..." && (
          <ImSpinner10 className="animate-spin" />
        )}
        {btnContent.new !== "loading..." && "+"}
      </button>
      <button
        className="hidden md:flex self-end gap-1 justify-center items-center mb-3 w-32 h-9 text-sm bg-stone-800 rounded-md text-stone-50 hover:bg-stone-500 transition"
        onClick={() => {
          setBtnContent((prev) => ({ ...prev, new: "loading..." }));
          setTimeout(() => {
            setBtnContent((prev) => ({ ...prev, new: "+ Add Project" }));
            setProjectState((prev) => {
              return { ...prev, SelectedProjectId: null };
            });
          }, timer);
        }}
      >
        {btnContent.new === "loading..." && (
          <ImSpinner10 className="animate-spin" />
        )}
        {btnContent.new !== "loading..." && btnContent.new}
      </button>
    </div>
  );

  return (
    <div className="w-1/3 h-screen bg-stone-900 p-2 md:p-5 flex flex-col text-stone-50">
      <h1 className="text-xl md:text-3xl mb-5 text-center md:text-left text-stone-200">
        Your Projects.
      </h1>
      {Btn}
      <hr />
      <Tasks />
    </div>
  );
}
