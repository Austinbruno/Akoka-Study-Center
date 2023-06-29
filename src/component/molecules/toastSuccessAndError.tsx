import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

interface ToastProps {
  type: "success" | "error";
  message: string;
}

const ToastSuccessAndError: React.FC<ToastProps> = ({ type, message }) => {
  const [hideToast, setHideToast] = useState(true);

  const toastClass = type === "success" ? "bg-green-500" : "bg-red-500";
  const hideToastClx = hideToast ? "block" : "hidden";

  const handleToast = () => {
    setHideToast(false);
  };

  return (
    <div
      className={`flex justify-between sm:m-[10px_5px] md:m-[20px_20px] xl:m-[20px_90px] items-center sm:w-[300px] md:w-[220px] p-4 text-white rounded-md shadow-md ${hideToastClx} ${toastClass}`}
    >
      <p>{message}</p>

      <ImCancelCircle size={20} onClick={handleToast} className="cursor-pointer" />
    </div>
  );
};

export default ToastSuccessAndError;
