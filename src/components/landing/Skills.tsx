import Skillcard from "@/components/landing/SkillCard";
export default function Skills() {
  return (
    <div className="w-full max-w-screen-xl">
      <p className="font-head poppins ml-7 md:ml-10 text-4xl md:text-5xl lg:text-6xl underline underline-offset-[0.5rem] decoration-primary decoration-[.2rem]">
        Skills
      </p>
      <div className="h-96 px-7 md:px-10">
        <Skillcard></Skillcard>
        <Skillcard></Skillcard>
        <Skillcard></Skillcard>
      </div>
    </div>
  );
}
