import { useContext, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { ColorCardGrid } from "../../components/ColorCardGrid/ColorCardGrid";
import { ColorContext } from "../../context/ColorContext";
import { createGradient } from "../../helpers/createGradient";
import { ColoredText } from "../../components/ColoredText/ColoredText";
import { savePalette } from "../../helpers/savePalette";
import style from "./Frontpage.module.scss";

export const FrontPage = () => {
  const { getNewColors, hexArray, setActiveHex } = useContext(ColorContext);

  useEffect(() => {
    getNewColors();
    setActiveHex(null);
  }, []);

  return (
    <>
      <section>
        <ColoredText
          type="h2"
          gradient={createGradient(hexArray[0], hexArray[2])}
          content={"Your new colors"}
          style={{ fontSize: "5rem", marginBottom: "5vh" }}
        />
        <div className={style.cardGridWrapper}>
          <ColorCardGrid hexColors={hexArray} />
        </div>
        <div className={style.buttonContainer}>
          <Button
            gradient={createGradient(hexArray[0], hexArray[2])}
            title={"Generate"}
            clickHandler={getNewColors}
          />
          <Button
            gradient={createGradient(hexArray[0], hexArray[2])}
            title={"Save this one"}
            clickHandler={() => savePalette(hexArray)}
          />
        </div>
      </section>
    </>
  );
};
