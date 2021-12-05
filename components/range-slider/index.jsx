import React, { useState, useRef } from "react";

import css from "./index.module.scss";

export default function RangeSlider({
  label = "",
  onChange = () => {},
  min = 0,
  max = 0,
}) {
  const inputHolder = useRef();
  const input = useRef();


  return (
    <div className={css.rangeSlider}>
      <div className={css.label}>{label}</div>
      <div className={css.endpoint}>{min}</div>
      <input type="range" min={min} max={max} className={css.input} onChange={(event) => {
        onChange(event.target.value);
      }}/>
      <div className={css.endpoint}>{max}</div>
    </div>
  );
}
