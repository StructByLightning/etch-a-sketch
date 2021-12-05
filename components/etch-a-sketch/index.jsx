import { useState, useRef } from "react";
import Tile from "./tile/index.jsx";
import RangeSlider from "/components/range-slider/index.jsx";
import css from "./index.module.scss";

export default function EtchASketch() {
  const [size, setSize] = useState(10);
  const [rainbow, setRainbow] = useState(true);
  let tiles = [];

  let style = {"--size": `${size}`};

  for (let i = 0; i < size * size; i++){
    tiles.push(<Tile key={i} rainbow={rainbow}/>);
  }

  return (
    <div className={css.etchASketch}>
      <div className={css.tiles} style={style} >
        {tiles.map((tile) => tile)}
      </div>
      <div className={css.controls}>
        <RangeSlider
          label="Size"
          min={5}
          max={20}
          onChange={(value) => setSize(value)}
        />
        <RangeSlider
          label="Rainbow Mode"
          min={0}
          max={1}
          onChange={(value) => setRainbow(value === "1")}
        />
      </div>
    </div>
  );
}

