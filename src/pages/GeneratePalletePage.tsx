import { useContext, useEffect } from "react";
import { Button } from "../components/Button/Button";
import { ColorCardGrid } from "../components/ColorCardGrid/ColorCardGrid";
import { ColorContext } from "../context/ColorContext";
import { createGradient } from "../helpers/createGradient";
import { ColoredText } from "../components/ColoredText/ColoredText";

export const GeneratePalletePage = () => {
  const { getNewColors, hexArray } = useContext(ColorContext);

  useEffect(() => {
    getNewColors();
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
        <ColorCardGrid hexColors={hexArray} />
        <div>
          <Button
            gradient={createGradient(hexArray[0], hexArray[2])}
            title={"Generate"}
            clickHandler={getNewColors}
          />
        </div>
      </section>
    </>
  );
};
