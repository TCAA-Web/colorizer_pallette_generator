import { useContext, useEffect, useState } from "react";
import { ColorCardGrid } from "../../components/ColorCardGrid/ColorCardGrid";
import { Button } from "../../components/Button/Button";
import style from "./UserPage.module.scss";
import { ColorContext } from "../../context/ColorContext";
import { createGradient } from "../../helpers/createGradient";
import { createToast } from "../../helpers/createToast";
import { ColoredText } from "../../components/ColoredText/ColoredText";

export const UserPage = () => {
  const { setActiveHex, activeHex, hexArray } = useContext(ColorContext);
  const [userPalettes, setUserPalettes] = useState<Array<Array<string>> | null>(
    null
  );

  useEffect(() => {
    if (localStorage.getItem("userPalette")) {
      let reversedArray = JSON.parse(
        localStorage.getItem("userPalette")!
      ).reverse();
      setUserPalettes(reversedArray);
    }
  }, []);

  const handleSetActive = (palette: string[]) => {
    setActiveHex(palette);
    createToast("Palette set as active color scheme", "success");
  };

  const handleDelete = (index: number) => {
    let clone = userPalettes?.map((palette) => palette);
    clone?.splice(index, 1);
    setUserPalettes(clone!);
    localStorage.setItem("userPalette", JSON.stringify(clone));
    createToast("Palette deleted", "success");
  };

  const gradient = () => {
    return !activeHex
      ? createGradient(hexArray[0], hexArray[2])
      : createGradient(activeHex[0], activeHex[2]);
  };

  return (
    <section>
      {userPalettes?.map((palette: string[], index: number) => {
        return (
          <div key={index} className={style.paletteGrid}>
            <ColorCardGrid
              styles={style.userPageContainer}
              hexColors={palette}
            />
            <div className={style.innerGrid}>
              <Button
                title={"Set active"}
                gradient={gradient()}
                clickHandler={() => handleSetActive(palette)}
              />
              <Button
                title={"Delete"}
                gradient={gradient()}
                clickHandler={() => handleDelete(index)}
              />
            </div>
          </div>
        );
      })}
      {!userPalettes && (
        <ColoredText
          type="h3"
          content="No palettes saved"
          gradient={gradient()}
        />
      )}
    </section>
  );
};
