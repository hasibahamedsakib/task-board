"use client";
import React from "react";
import Status from "../ui/Status";
import TodoModal from "../ui/TaskModal";
import TaskCardHeader from "../TaskCard/TaskCardHeader";
import TaskCard from "../TaskCard/TaskCard";
import { useGetTasksQuery } from "@/app/redux/api/api";
import { Task } from "@/app/types/types";
import Loader from "../ui/Loader";
import { Toaster } from "sonner";

const MyDay = () => {
  const { data: tasks, isLoading } = useGetTasksQuery(null);

  return (
    <div className={`flex flex-col items-center justify-center `}>
      <Toaster />
      <div className=" border-2 border-pink-500 rounded-md p-5 min-w-[50%]">
        <div className="flex items-center justify-between">
          <div>
            <TodoModal />
          </div>
          <div>
            <h1 className="text-2xl font-bold">My Day</h1>
          </div>
          <div>
            <Status />
          </div>
        </div>

        <TaskCardHeader>
          {tasks?.result?.map((task: Task) => (
            <TaskCard key={task.todoId} task={task} />
          ))}
          {isLoading && <Loader />}
        </TaskCardHeader>
      </div>
    </div>
  );
};

export default MyDay;
