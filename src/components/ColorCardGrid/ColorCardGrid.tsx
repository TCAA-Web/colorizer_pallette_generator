import { ColorCard } from "../ColorCard/ColorCard";
import style from "./colorCardGrid.module.scss";
interface ColorCardGridInterface {
  hexColors: Array<string>;
  styles?: string;
}

export const ColorCardGrid = ({
  hexColors,
  styles,
}: ColorCardGridInterface) => {
  return (
    <div className={`${style.cardGrid} ${styles}`}>
      {hexColors.map((color: string, i) => (
        <ColorCard key={i} hexValue={color} />
      ))}
    </div>
  );
};
