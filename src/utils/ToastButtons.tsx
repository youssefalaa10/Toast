import React from "react";
import { useToast } from "../ToastContext";
import ToastContainer from "./ToastAlert";

const Toast: React.FC = () => {
  const { addToast, dismissAll } = useToast();

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
          onClick={() => addToast("default", "Default toast.")}
        >
          Default
        </button>
        <button
          className="px-4 py-2 rounded bg-green-300 hover:bg-green-400 text-gray-800"
          onClick={() => addToast("success", "Success toast.")}
        >
          Success
        </button>
        <button
          className="px-4 py-2 rounded bg-red-300 hover:bg-red-400 text-gray-800"
          onClick={() => addToast("error", "Error toast.")}
        >
          Error
        </button>
        <button
          className="px-4 py-2 rounded bg-yellow-300 hover:bg-yellow-400 text-gray-800"
          onClick={() => dismissAll()}
        >
          Dismiss All
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
