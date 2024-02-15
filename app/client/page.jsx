"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-md bg-blue-500 text-slate-50 hover:bg-blue-400"
        >
          -
        </button>
        <p className="text-4xl">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-md bg-red-500 text-slate-50 hover:bg-red-400"
        >
          +
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          className="btn btn-md bg-orange-500 text-slate-50 hover:bg-orange-400 "
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ClientPage;
