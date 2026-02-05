import styles from "../styles/Toast.module.scss";
import type { ToastType } from "../hooks/useToast";

interface ToastProps {
  message: string;
  type: ToastType;
}

export default function Toast({ message, type }: ToastProps) {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}
    </div>
  );
}
