"use client";
import React, { useState } from "react";
import Status from "../ui/Status";
import TodoModal from "../ui/TaskModal";
import TaskCardHeader from "../TaskCard/TaskCardHeader";
import TaskCard from "../TaskCard/TaskCard";
import { useGetTasksQuery } from "@/app/redux/api/api";
import { Task } from "@/app/types/types";
import Loader from "../ui/Loader";
import { Toaster } from "sonner";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Priority from "../ui/Priority";
const MyDay = () => {
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const { data: tasks, isLoading } = useGetTasksQuery({
    priority,
    status,
  });

  return (
    <div className={`flex flex-col items-center justify-center `}>
      <Toaster />
      <div className="  rounded-md p-5 w-full lg:min-w-[50%] px-1 md:px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Image width={25} height={25} src={Logo} alt="Logo" />
            <h1 className="text-xl font-bold">
              My<span className="text-pink-500">Tasks</span>
            </h1>
          </div>
          <div className="space-x-2 flex items-center">
            <TodoModal />
            <Priority setPriority={setPriority} />
            <Status setStatus={setStatus} />
          </div>
        </div>

        <TaskCardHeader>
          {/* {tasks?.result?.map((task: Task) => (
            <TaskCard key={task.todoId} task={task} />
          ))} */}

          {tasks?.result
            ?.filter((task: Task) => task.status === "pending")
            .map((task: Task) => (
              <TaskCard key={task.todoId} task={task} />
            ))}
          {tasks?.result
            ?.filter((task: Task) => task.status === "completed")
            .map((task: Task) => (
              <TaskCard key={task.todoId} task={task} />
            ))}
          {isLoading && (
            <>
              <Loader />
              <Loader />
              <Loader />
            </>
          )}
        </TaskCardHeader>
      </div>
    </div>
  );
};

export default MyDay;
