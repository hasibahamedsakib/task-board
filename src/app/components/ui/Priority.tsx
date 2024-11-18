"use client";

import React, { useEffect, useRef, useState } from "react";

const Priority = ({
  setPriority,
}: {
  setPriority: (priority: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ["high", "medium", "low"];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !(dropDownRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit ">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className=" border-2 border-primary px-2 py-1 md:px-6 sm:py-2 text-sm sm:text-base rounded"
      >
        Priority
      </button>
      <ul
        className={`${
          open ? "visible" : "invisible"
        } absolute top-12 z-50 w-full space-y-1 bg-white`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`rounded-sm border-2 border-primary px-4 py-1 ${
              open ? "opacity-100 duration-500" : "opacity-0 duration-150"
            } bg-white capitalize`}
            style={{ transform: `translateY(${open ? 0 : (idx + 1) * 10}px)` }}
          >
            <button onClick={() => setPriority(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Priority;
