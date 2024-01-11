import { CSSProperties } from "react";
import Style from "./ColoredText.module.scss";

interface ColoredTextInterface {
  gradient: string;
  type: string;
  content: string;
  style?: CSSProperties;
}

export const ColoredText = ({
  type,
  gradient,
  content,
  style,
}: ColoredTextInterface) => {
  function getType() {
    switch (type) {
      case "h1":
        return (
          <h1 className={Style.text} style={{ background: gradient, ...style }}>
            {content}
          </h1>
        );

      case "h2":
        return (
          <h2 className={Style.text} style={{ background: gradient, ...style }}>
            {content}
          </h2>
        );

      case "h3":
        return (
          <h3 className={Style.text} style={{ background: gradient, ...style }}>
            {content}
          </h3>
        );

      case "h4":
        return (
          <h4 className={Style.text} style={{ background: gradient, ...style }}>
            {content}
          </h4>
        );

      case "span":
        return (
          <span
            className={Style.text}
            style={{ background: gradient, ...style }}
          >
            {content}
          </span>
        );

      case "p":
        return (
          <p className={Style.text} style={{ background: gradient, ...style }}>
            {content}
          </p>
        );
    }
  }

  return getType();
};
