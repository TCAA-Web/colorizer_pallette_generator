import { toast } from "react-toastify";

// Toast styling
const toastStyle = {
  backgroundColor: "#1e1e1e",
  border: "solid 1px white",
};

// Create toast from react-toastify
export const createToast = (message: string, type: "success" | "warning") => {
  if (type === "success")
    return toast.success(message, {
      style: { ...toastStyle },
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
    });
  if (type === "warning")
    return toast.warning(message, {
      style: { ...toastStyle },
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
    });
};
