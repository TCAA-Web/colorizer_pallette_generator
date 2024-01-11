import { NavLink } from "react-router-dom";
import style from "./ColoredNavLink.module.scss";

interface ColoredNavLinkInterface {
  path: string;
  title: string;
  gradient: string;
}

export const ColoredNavLink = ({
  path,
  title,
  gradient,
}: ColoredNavLinkInterface) => {
  return (
    <NavLink style={{ background: gradient }} className={style.link} to={path}>
      <span>{title}</span>
    </NavLink>
  );
};
