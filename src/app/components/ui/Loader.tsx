import React from "react";

const Loader = () => {
  return (
    <tr className="animate-pulse hover:bg-gray-50 transition duration-300">
      <td className="py-4 px-6 border-b">
        <div className="h-5 w-5 rounded-full bg-gray-200"></div>
      </td>
      <td className="py-4 px-6 border-b">
        <div className="h-5 w-full bg-gray-200"></div>
      </td>
      <td className="py-4 px-6 border-b">
        <div className="h-5 w-full bg-gray-200"></div>
      </td>
      <td className="py-4 px-6 border-b">
        <div className="h-5 w-full bg-gray-200"></div>
      </td>
      <td className="py-4 px-6 border-b text-right">
        <div className="h-7 w-7 bg-gray-200 rounded"></div>
      </td>
      <td className="py-4 px-6 border-b text-right">
        <div className="h-7 w-7 bg-gray-200 rounded"></div>
      </td>
    </tr>
  );
};

export default Loader;
