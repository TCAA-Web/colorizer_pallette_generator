import { ColorCard } from "../ColorCard/ColorCard";
import style from "./colorCardGrid.module.scss";
interface ColorCardGridInterface {
  hexColors: Array<string>;
}

export const ColorCardGrid = ({ hexColors }: ColorCardGridInterface) => {
  return (
    <div className={style.cardGrid}>
      {hexColors.map((color: string, i) => (
        <ColorCard key={i} hexValue={color} />
      ))}
    </div>
  );
};
