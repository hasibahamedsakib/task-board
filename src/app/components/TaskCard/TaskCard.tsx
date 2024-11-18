import {
  useDeleteTaskMutation,
  useEditTaskMutation,
} from "@/app/redux/api/api";
import { Task } from "@/app/types/types";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditModal from "../EditModal/EditModal";

const TaskCard = ({
  task: { todoId, name, priority, status },
}: {
  task: Task;
}) => {
  const [editTask] = useEditTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteTask = async () => {
    await deleteTask(todoId);
  };
  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTask = {
      id: todoId,
      updatedTask: { status: e.target.checked ? "completed" : "pending" },
    };
    await editTask(updatedTask);
  };
  const handleEditTask = () => {
    setOpenModal(true);
  };
  return (
    <>
      <tr className={`hover:bg-gray-50 transition duration-300 `}>
        <td className="py-4 px-6 border-b">
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            id="myCheckbox"
            checked={status === "completed"}
            className="flex h-5 w-5 items-center rounded-full  border-2 border-primary bg-primary text-white focus:border-primary focus:ring-primary"
          />
        </td>
        <td
          className={`py-4 px-6 border-b font-medium text-primary capitalize ${
            status === "completed" && "line-through text-red-500"
          }`}
        >
          {name}
        </td>
        <td className="py-4 px-6 border-b font-medium text-primary capitalize">
          {priority}
        </td>
        <td className="py-4 px-6 border-b font-medium text-primary capitalize">
          {status}
        </td>
        <td className="py-4 px-6 border-b text-right">
          <FaEdit
            className="text-xl cursor-pointer text-primary "
            onClick={handleEditTask}
          />
        </td>
        <td className="py-4 px-6 border-b text-right">
          <FaTrash
            className=" text-primary text-xl cursor-pointer hover:text-red-500 transition-all duration-300"
            onClick={handleDeleteTask}
          />
        </td>
      </tr>
      {openModal && (
        <EditModal
          currentTask={{ todoId, name, priority, status }}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default TaskCard;
