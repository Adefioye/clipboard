import Image from "next/image";
import Hero from "./components/Hero";
import BasicInfo from "./components/BasicInfo";
import Functionalities from "./components/Functionalities";
import AccessAnywhere from "./components/AccessAnywhere";
import SuperChargeWorkFlow from "./components/SuperChargeWorkFlow";
import References from "./components/References";
import Clipboard from "./components/Clipboard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Hero />
      <BasicInfo />
      <Functionalities />
      <AccessAnywhere />
      <SuperChargeWorkFlow />
      <References />
      <Clipboard />
      <Footer />
    </main>
  );
}
