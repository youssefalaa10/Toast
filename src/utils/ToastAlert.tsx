import React from "react";
import { useToast } from "../ToastContext";

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-0 right-0 p-6 space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast-item p-4 rounded shadow-lg text-white ${
            toast.type === "success"
              ? "bg-green-500"
              : toast.type === "error"
              ? "bg-red-500"
              : "bg-gray-700"
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
