import { ReactNode } from "react";

const TaskCardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-x-auto ">
      <table className=" shadow-md w-full border mx-auto border-gray-100  my-6">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-3 px-6 text-left border-b">Name</th>
            <th className="py-3 px-6 text-left border-b">Age</th>
            <th className="py-3 px-6 text-left border-b">Gender</th>
            <th className="py-3 px-6  border-b text-end">Address</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TaskCardHeader;
