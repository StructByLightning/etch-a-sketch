import Head from "next/head";
import MainSection from "/sections/main/index.jsx";

export default function Home() {
  const description = "App made for ywecur.";
  const title = "Etch a sketch";

  return (
    <div className="root" >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:description" content={description}/>
        <meta property="og:title" content={title}/>
      </Head>

      <MainSection/>
    </div>
  );
}
