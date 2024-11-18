"use client";

import { useEditTaskMutation } from "@/app/redux/api/api";
import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Task } from "@/app/types/types";
import { toast } from "sonner";

interface TaskModalProps {
  currentTask?: Task;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

const EditModal = ({
  currentTask,
  openModal,
  setOpenModal,
}: TaskModalProps) => {
  const [editTask, { isSuccess }] = useEditTaskMutation();
  const { register, handleSubmit, setValue, reset } = useForm<Partial<Task>>();

  useEffect(() => {
    if (currentTask) {
      setValue("name", currentTask.name);
      setValue("priority", currentTask.priority);
      setValue("status", currentTask.status);
    } else {
      reset();
    }
  }, [currentTask, setValue, reset]);

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

  const handleEditTask = async (data: Partial<Task>) => {
    console.log(data);
    const updatedTask = {
      id: currentTask?.todoId,
      updatedTask: data,
    };
    await editTask(updatedTask).unwrap();
    reset();
    setOpenModal(false);
  };
  if (isSuccess) {
    toast.success("Task updated successfully");
  }
  return (
    <div
      className={`fixed flex justify-center items-center z-[100] ${
        openModal ? "visible opacity-1" : "invisible opacity-0"
      } duration-300 inset-0 w-full h-full bg-black bg-opacity-50`}
    >
      <div
        onClick={(e_) => e_.stopPropagation()}
        className={`absolute w-full h-auto max-w-md flex justify-center bg-white drop-shadow-2xl rounded-lg ${
          openModal
            ? "translate-y-0 opacity-1 duration-300"
            : "translate-y-32 opacity-0 duration-100"
        }`}
      >
        <div className="p-3 md:p-4 lg:p-6 lg:py-8">
          <button
            onClick={() => setOpenModal(false)}
            className="mr-0 mx-auto flex text-primary border-2 border-primary rounded-full absolute top-1 right-1"
          >
            <MdOutlineClose className="text-xl" />
          </button>

          <form
            onSubmit={handleSubmit(handleEditTask)}
            className="space-y-4 rounded-lg p-3 w-full sm:min-w-[350px]"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Name of Task</label>
              <input
                {...register("name")}
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Priority</label>
              <select
                {...register("priority")}
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
              >
                <option value="">Select priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                {...register("status")}
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
              >
                <option value="">Select status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <button className="w-full bg-primary text-white p-2 rounded hover:bg-black transition-all duration-300">
              {currentTask ? "Edit Task" : "Add Task"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
