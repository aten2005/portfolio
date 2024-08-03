import SkillCard from "@/components/landing/SkillCard";
import python from "/icons/python.png?url";
import cpp from "/icons/cpp.png?url";
import js from "/icons/js.png?url";
import react from "/icons/react.png?url";
import nextjs from "/icons/nextjs.png?url";
import astro from "/icons/astro.png?url";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <div className="w-screen max-w-screen-xl">
      <span className="underline underline-offset-[0.3rem] decoration-primary decoration-[.2rem]">
        <p className="text-head poppins text-4xl md:text-5xl lg:text-6xl mr-auto ml-8 md:ml-5">
          Skills
        </p>
      </span>
      <div className="flex flex-row justify-center items-center p-5 flex-wrap">
        <SkillCard iconUrl={python} label="Python"></SkillCard>
        <SkillCard iconUrl={cpp} label="C / C++"></SkillCard>
        <SkillCard iconUrl={js} label="Javascript"></SkillCard>
        <SkillCard iconUrl={react} label="React"></SkillCard>
        <SkillCard iconUrl={nextjs} label="NextJS"></SkillCard>
        <SkillCard iconUrl={astro} label="Astro"></SkillCard>
      </div>
    </div>
  );
}
