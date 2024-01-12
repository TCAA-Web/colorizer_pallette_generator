import style from "../Button/button.module.scss";

interface ButtonInterface {
  clickHandler: () => void;
  gradient: string;
  title: string;
}

export const Button = ({ clickHandler, gradient, title }: ButtonInterface) => {
  return (
    <button
      className={style.buttonPrimary}
      onClick={clickHandler}
      style={{
        background: gradient,
      }}
    >
      <span>{title}</span>
    </button>
  );
};
