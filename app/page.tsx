"use client";

import Hero from "@/app/components/sections/Hero/Hero";
import About from "@/app/components/sections/About/About";
import Contact from "@/app/components/sections/Contact/Contact";
import Steps from "./components/sections/Steps/Steps";
import Powerhouse from "./components/sections/Powerhouse/Powerhouse";
import Team from "./components/sections/Team/Team";
import FAQSection from "./components/sections/FAQSection/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Steps />
      <Powerhouse />
      <Team />
      <Contact />
      <FAQSection />
    </>
  );
}
