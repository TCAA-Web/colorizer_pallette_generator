import { toast } from "react-toastify";
import { equalsCheck } from "./equalsCheck";

// Function to save a user palette to localStorage
export const savePalette = (hexArray: Array<string>) => {
  if (!localStorage.getItem("userPalette")) {
    localStorage.setItem("userPalette", JSON.stringify([hexArray]));
    toast.success("Palette has been saved successfully", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
    });
  } else {
    let userArr = JSON.parse(localStorage.getItem("userPalette")!);
    if (equalsCheck(userArr[userArr.length - 1], hexArray)) {
      toast.error("Palette is allready saved", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "dark",
      });
    } else {
      userArr.push(hexArray);
      localStorage.setItem("userPalette", JSON.stringify(userArr));
      toast.success("Palette has been saved successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "dark",
      });
    }
  }
};
