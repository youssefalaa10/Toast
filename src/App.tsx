import React from "react";
import Toast from "./utils/ToastButtons";
import { ToastProvider } from "./ToastContext";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <div className="container py-3">
        <Toast />
      </div>
    </ToastProvider>
  );
};

export default App;
