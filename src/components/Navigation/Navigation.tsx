import style from "./navigation.module.scss";
import { ColoredText } from "../ColoredText/ColoredText";
import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
import { createGradient } from "../../helpers/createGradient";
import { ColoredNavLink } from "../ColoredNavlink/ColoredNavlink";

export const Navigation = () => {
  const { hexArray } = useContext(ColorContext);
  const links = [
    { href: "/", title: "Random Pallette" },
    { href: "/pallettes", title: "My Pallettes" },
  ];
  return (
    <nav className={style.navbar}>
      <ColoredText
        type="h2"
        content={"Colorizer Pallette Generator"}
        gradient={createGradient(hexArray[0], hexArray[2])}
      />

      <ul>
        {links?.map((link) => (
          <li>
            <ColoredNavLink
              path={link.href}
              title={link.title}
              gradient={createGradient(hexArray[0], hexArray[2])}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
