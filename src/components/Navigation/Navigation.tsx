import style from "./navigation.module.scss";
import { ColoredText } from "../ColoredText/ColoredText";
import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
import { createGradient } from "../../helpers/createGradient";
import { ColoredNavLink } from "../ColoredNavlink/ColoredNavlink";

export const Navigation = () => {
  const { hexArray, activeHex } = useContext(ColorContext);
  const links = [
    { href: "/", title: "Random Palette" },
    { href: "/palettes", title: "My Palettes" },
  ];

  const gradient = () => {
    return !activeHex
      ? createGradient(hexArray[0], hexArray[2])
      : createGradient(activeHex[0], activeHex[2]);
  };
  return (
    <nav
      className={style.navbar}
      style={{
        background: gradient(),
      }}
    >
      <div>
        <ColoredText
          type="h2"
          content={"Colorizer Palette Generator"}
          gradient={gradient()}
        />

        <ul>
          {links?.map((link, i) => (
            <li key={i}>
              <ColoredNavLink
                path={link.href}
                title={link.title}
                gradient={gradient()}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
