"use client";

import { ReactNode } from "react";

const Button = ({
  children,
  action,
}: {
  children: ReactNode;
  action: () => void;
}) => {
  return (
    <button
      onClick={action}
      className="px-4 py-2 rounded border-2 border-green-500 "
    >
      {children}
    </button>
  );
};

export default Button;
