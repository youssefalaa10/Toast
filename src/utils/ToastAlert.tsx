import React from "react";
import { useToast } from "../ToastContext";

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-0 right-0 p-6 rounded-full space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast-item rounded-full flex justify-between items-center w-full  mt-2 p-4  shadow-lg text-white ${
            toast.type === "success"
              ? "bg-green-500"
              : toast.type === "error"
              ? "bg-red-500"
              : "bg-gray-700"
          }`}
        >
          {toast.message}
          <i className="pi pi-times"></i>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
