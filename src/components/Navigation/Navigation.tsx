import style from "./navigation.module.scss";
import { ColoredText } from "../ColoredText/ColoredText";
import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
import { createGradient } from "../../helpers/createGradient";
import { ColoredNavLink } from "../ColoredNavlink/ColoredNavlink";

export const Navigation = () => {
  const { hexArray, activeHex } = useContext(ColorContext);
  const links = [
    { href: "/", title: "Random Pallette" },
    { href: "/pallettes", title: "My Pallettes" },
  ];
  return (
    <nav
      className={style.navbar}
      style={{
        background: !activeHex
          ? createGradient(hexArray[0], hexArray[2])
          : createGradient(activeHex[0], activeHex[2]),
      }}
    >
      <div>
        <ColoredText
          type="h2"
          content={"Colorizer Pallette Generator"}
          gradient={
            !activeHex
              ? createGradient(hexArray[0], hexArray[2])
              : createGradient(activeHex[0], activeHex[2])
          }
        />

        <ul>
          {links?.map((link) => (
            <li>
              <ColoredNavLink
                path={link.href}
                title={link.title}
                gradient={
                  !activeHex
                    ? createGradient(hexArray[0], hexArray[2])
                    : createGradient(activeHex[0], activeHex[2])
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
