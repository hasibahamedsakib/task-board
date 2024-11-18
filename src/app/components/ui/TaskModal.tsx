"use client";

import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
const TaskModal = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <div className="w-full mx-auto flex items-center justify-center">
      {/* Pay Button */}
      <button
        onClick={() => setOpenModal(true)}
        className="border-2 border-black text-black p-2 rounded flex items-center justify-center gap-2"
      >
        <IoIosAddCircleOutline className="text-lg" />
        Add Task
      </button>
      <div
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } duration-300 inset-0 w-full h-full bg-black bg-opacity-50`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute  w-full h-auto max-w-md flex justify-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "translate-y-0 opacity-1 duration-300"
              : "translate-y-32 opacity-0 duration-100"
          }`}
        >
          <div className="p-3 md:p-4 lg:p-6 lg:py-8">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="mr-0 mx-auto flex text-black border-2 border-black  rounded-full absolute top-1 right-1 "
            >
              <MdOutlineClose className="text-xl" />
            </button>

            <form className="space-y-4 rounded-lg p-3 w-full sm:min-w-[350px]">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name of Task</label>
                <input
                  className="bg-transparent flex h-10 w-full rounded-md border px-3"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <select className="bg-transparent flex h-10 w-full rounded-md border px-3">
                  <option>Select priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <select className="bg-transparent flex h-10 w-full rounded-md border px-3">
                  <option>Select status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="in-progress">In Progress</option>
                </select>
              </div>
              <button className="w-full bg-primary text-white p-2 rounded hover:bg-black transition-all duration-300">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
