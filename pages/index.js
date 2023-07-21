import MarqueeComponent from "../components/Marquee";
import TitleCard from "../components/common/TitleCard";

import SEO from "../components/common/SEO";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      {/* <MarqueeComponent /> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TitleCard
          graphic={
            <Image width={200} height={147} src="/2023.svg" alt="2023" />
          }
        />
      </div>
      <Footer />
    </>
  );
}
