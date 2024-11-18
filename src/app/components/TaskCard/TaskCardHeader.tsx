import { ReactNode } from "react";
import { BiCheckbox } from "react-icons/bi";

const TaskCardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto">
      <table className="shadow-md w-full border mx-auto border-gray-100 my-3 md:my-6">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-3 px-6  border-b text-end">
              <BiCheckbox className="text-2xl" />
            </th>
            <th className="py-3 px-6 text-left border-b">Name Of Task</th>
            <th className="py-3 px-6 text-left border-b">Priority</th>
            <th className="py-3 px-6 text-left border-b">Status</th>
            <th className="py-3 px-6 text-left border-b"> Edit</th>
            <th className="py-3 px-6 text-left border-b">Delete</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TaskCardHeader;
