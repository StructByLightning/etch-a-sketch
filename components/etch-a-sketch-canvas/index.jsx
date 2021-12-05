import { useState, useRef } from "react";
import RangeSlider from "/components/range-slider/index.jsx";
import css from "./index.module.scss";

const CANVAS_SIZE = 1000;
function randint(max) {
  return Math.floor(Math.random() * max);
}



export default function EtchASketch() {
  const [size, setSize] = useState(10);
  const [rainbow, setRainbow] = useState(true);
  const [pos, setPos] = useState([0, 0]);
  const [hue, setHue] = useState(0);

  let canvas = useRef();

  let style = { "--size": `${size}` };

  function draw(event) {
    const ctx = event.target.getContext("2d");
    const rect = event.target.getBoundingClientRect();

    //convert global coords into relative
    const oldX = Math.floor((pos[0] - rect.left) / (rect.width / CANVAS_SIZE));
    const oldY = Math.floor((pos[1] - rect.top) / (rect.width / CANVAS_SIZE));
    const newX = Math.floor((event.clientX - rect.left) / (rect.width / CANVAS_SIZE));
    const newY = Math.floor((event.clientY - rect.top) / (rect.width / CANVAS_SIZE));

    ctx.beginPath();

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = `hsl(${hue},50%, 50%)`;
    if (rainbow) {
      let h = hue + 3;
      if (h > 360) {
        h = 0;
      }
      setHue(h);
    }

    ctx.moveTo(oldX, oldY);
    setPos([event.clientX, event.clientY]);
    ctx.lineTo(newX, newY);
    ctx.stroke();
  }

  return (
    <div className={css.etchASketch}>
      <canvas
        ref={canvas}
        style={style}
        onMouseMove={(event) => draw(event)}
        onMouseDown={(event) => setPos([event.clientX, event.clientY])}
        onMouseEnter={(event) => setPos([event.clientX, event.clientY])}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
      />
      <div className={css.controls}>
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

