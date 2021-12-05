import { useState } from "react";
import css from "./index.module.scss";

function randint(max){
  return Math.floor(Math.random() * max);
}

export default function Tile({rainbow = false}) {
  const [flipped, setFlipped] = useState(false);

  let style = {"--tile-color": "var(--rose-gold-dark)"};

  if (flipped && rainbow){
    style["--tile-color"] = `rgb(${randint(255)},${randint(255)},${randint(255)})`;
  } else if (flipped){
    style["--tile-color"] = "var(--rose-gold-light)";
  }

  return (
    <div
      className={css.tile}
      style={style}
      onMouseOver={() => {
        if (!flipped){
          setFlipped(true);
        }
      }}
    ></div>
  );
}

