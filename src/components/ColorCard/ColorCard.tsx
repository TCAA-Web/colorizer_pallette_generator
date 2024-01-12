import style from "./colorcard.module.scss";
import icon from "../../assets/icons8-clipboard-64.png";
import { useState } from "react";

interface ColorCardInterface {
  hexValue: string;
}

export const ColorCard = ({ hexValue }: ColorCardInterface) => {
  const [showText, setShowText] = useState(false);

  const clickHandler = () => {
    navigator.clipboard.writeText(hexValue);
    setShowText(true);
    let timeout = setTimeout(() => {
      setShowText(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  return (
    <div className={style.cardWrapper}>
      <div style={{ backgroundColor: hexValue }} className={style.card}></div>
      <div className={style.innerWrapper}>
        <p onClick={clickHandler} className={style.cardTitle}>
          {hexValue}
        </p>
        <img onClick={clickHandler} src={icon} alt="clipboard copy"></img>
      </div>

      <p
        className={style.clipboardText}
        style={showText ? { opacity: 1 } : { opacity: 0 }}
      >
        Copied to clipboard
      </p>
    </div>
  );
};
