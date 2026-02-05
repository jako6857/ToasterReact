import { useState } from "react";

export type ToastType = "success" | "warning" | "error";
interface ToastState {
  message: string;
  type: ToastType;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null);

  function showToast(
    message: string,
    type: ToastType = "success",
    duration: number = 3000
  ) {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, duration);
  }

  return {
    toast,
    showToast,
  };
}
