import { createContext, useEffect, useState } from "react";
import {
  colorArrayInner,
  colorArrayInterface,
} from "../interfaces/colorArrayInterface";
import { rgbToHex } from "../helpers/rgbToHex";

type ColorContextType = string;

interface ColorInterface {
  activeHex: string;
  setActiveHex: (theme: ColorContextType) => void;
  getNewColors: () => void;
  colorArray: colorArrayInterface;
  setColorArray: (color: colorArrayInterface) => void;
  hexArray: Array<string>;
  setHexArray: (arr: Array<string>) => void;
}

const defaultValues = {
  activeHex: "",
  setActiveHex: () => {},
  getNewColors: () => {},
  colorArray: { result: [] },
  setColorArray: () => {},
  hexArray: [],
  setHexArray: () => {},
};

export const ColorContext = createContext<ColorInterface>(defaultValues);

export const ColorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeHex, setActiveHex] = useState<ColorContextType>("");
  const [hexArray, setHexArray] = useState<Array<string>>([""]);
  const [colorArray, setColorArray] = useState<colorArrayInterface>({
    result: [],
  });

  const getNewColors = () => {
    let url = "http://colormind.io/api/";
    let options = {
      method: "POST",
      body: JSON.stringify({ model: "default" }),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((colors) => setColorArray(colors))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    let hexArray = colorArray.result.map((color: colorArrayInner) =>
      rgbToHex(color[0], color[1], color[2])
    );
    setHexArray(hexArray);
  }, [colorArray]);

  return (
    <ColorContext.Provider
      value={{
        activeHex,
        setActiveHex,
        getNewColors,
        colorArray,
        setColorArray,
        hexArray,
        setHexArray,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
