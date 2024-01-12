import { useContext, useEffect, useState } from "react";
import { ColorCardGrid } from "../../components/ColorCardGrid/ColorCardGrid";
import { Button } from "../../components/Button/Button";
import style from "./UserPage.module.scss";
import { ColorContext } from "../../context/ColorContext";
import { createGradient } from "../../helpers/createGradient";
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
    // Get items from localstorage
  }, []);

  console.log(userPalettes);

  const handleSetActive = (palette: string[]) => {
    setActiveHex(palette);
  };

  const handleDelete = () => {
    console.log("DELETE");
  };

  return (
    <section>
      {userPalettes?.map((palette) => {
        return (
          <div className={style.paletteGrid}>
            <ColorCardGrid hexColors={palette} />
            <div className={style.innerGrid}>
              <Button
                title={"Set active"}
                gradient={
                  !activeHex
                    ? createGradient(hexArray[0], hexArray[2])
                    : createGradient(activeHex[0], activeHex[2])
                }
                clickHandler={() => handleSetActive(palette)}
              />
              <Button
                title={"Delete"}
                gradient={
                  !activeHex
                    ? createGradient(hexArray[0], hexArray[2])
                    : createGradient(activeHex[0], activeHex[2])
                }
                clickHandler={handleDelete}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};
