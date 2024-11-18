import React from "react";
import Status from "../ui/Status";
import TodoModal from "../ui/TaskModal";
import TaskCardHeader from "../TaskCard/TaskCardHeader";
import TaskCard from "../TaskCard/TaskCard";

const MyDay = () => {
  return (
    <div className={`flex flex-col items-center justify-center `}>
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
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </TaskCardHeader>
      </div>
    </div>
  );
};

export default MyDay;
