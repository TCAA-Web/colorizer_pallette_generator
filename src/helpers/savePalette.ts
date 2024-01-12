import { createToast } from "./createToast";
import { equalsCheck } from "./equalsCheck";

// Function to save a user palette to localStorage
export const savePalette = (hexArray: Array<string>) => {
  if (!localStorage.getItem("userPalette")) {
    localStorage.setItem("userPalette", JSON.stringify([hexArray]));

    createToast("Palette has been saved successfully", "success");
  } else {
    let userArr = JSON.parse(localStorage.getItem("userPalette")!);
    if (equalsCheck(userArr[userArr.length - 1], hexArray)) {
      createToast("Palette is already saved", "warning");
    } else {
      userArr.push(hexArray);
      localStorage.setItem("userPalette", JSON.stringify(userArr));
      createToast("Palette has been saved successfully", "success");
    }
  }
};
