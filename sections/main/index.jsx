import EtchASketch from "@/components/etch-a-sketch";
import css from "./index.module.scss";

export default function mainSection() {
  return (
    <section className={css.main}>
      <div className={`container ${css.container}`}>
        <EtchASketch/>
      </div>
    </section>
  );
}

