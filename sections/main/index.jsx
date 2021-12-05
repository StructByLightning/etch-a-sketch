import EtchASketch from "@/components/etch-a-sketch";
import EtchASketchCanvas from "@/components/etch-a-sketch-canvas";
import css from "./index.module.scss";

export default function mainSection() {
  return (
    <section className={css.main}>
      <div className={`container ${css.container}`}>
        <EtchASketchCanvas/>
        <EtchASketch/>
      </div>
    </section>
  );
}

