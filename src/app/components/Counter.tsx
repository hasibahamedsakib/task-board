"use client";

import Button from "./ui/Button";
import {
  decrement,
  increment,
  incrementByCustomValue,
} from "../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex justify-center items-center h-screen space-x-4">
        <Button action={() => dispatch(decrement())}>Decrement</Button>
        <h1 className="text-4xl font-bold text-center ">{counter}</h1>
        <Button action={() => dispatch(increment())}>Increment</Button>
        <Button action={() => dispatch(incrementByCustomValue(8))}>
          Custom Increment 8
        </Button>
      </div>
    </div>
  );
};

export default Counter;
