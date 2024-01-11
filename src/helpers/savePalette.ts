import { toast } from "react-toastify";
import { equalsCheck } from "./equalsCheck";

// Toast styling
const toastStyle = {
  backgroundColor: "#1e1e1e",
  border: "solid 1px white",
};

// Create toast from react-toastify
const createToast = (message: string, type: "success" | "warning") => {
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

// Function to save a user palette to localStorage
export const savePalette = (hexArray: Array<string>) => {
  if (!localStorage.getItem("userPalette")) {
    localStorage.setItem("userPalette", JSON.stringify([hexArray]));

    createToast("Palette has been saved successfully", "success");
  } else {
    let userArr = JSON.parse(localStorage.getItem("userPalette")!);
    if (equalsCheck(userArr[userArr.length - 1], hexArray)) {
      createToast("Palette is allready saved", "warning");
    } else {
      userArr.push(hexArray);
      localStorage.setItem("userPalette", JSON.stringify(userArr));
      createToast("Palette has been saved successfully", "success");
    }
  }
};
