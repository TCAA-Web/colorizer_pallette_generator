import style from "./colorcard.module.scss";

interface ColorCardInterface {
  hexValue: string;
}

export const ColorCard = ({ hexValue }: ColorCardInterface) => {
  return (
    <div className={style.cardWrapper}>
      <div style={{ backgroundColor: hexValue }} className={style.card}></div>
      <p className={style.cardTitle}>{hexValue}</p>
    </div>
  );
};
