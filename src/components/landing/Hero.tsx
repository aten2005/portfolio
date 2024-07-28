import profile from "/profile.jpg?url";
import Typewriter from "typewriter-effect";
import wave from "/emojis/wave.svg?url";
import { cn } from "@/lib/utils";
interface HeroProps {
  className: string;
}
export default function Hero({ className }: HeroProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-around space-y-7 md:flex-row-reverse z-10",
        className,
      )}
    >
      <img
        src={profile}
        alt="profile"
        className="rounded-full w-64 md:w-[22rem] border-4 border-solid"
      />
      <div className="md:mr-8 lg:mr-12">
        <p className="text-4xl/[3.25rem] font-medium poppins md:text-5xl/[4.5rem] lg:text-6xl">
          Hey <img src={wave} alt="wave" className="h-8 md:h-12 inline-block" />
          <br />
          I'm{" "}
          <span className="underline underline-offset-[0.5rem] decoration-primary decoration-[.2rem]">
            Archisman Das
          </span>
          <br />
          <Typewriter
            aria-label="Learner, Developer, Engineer"
            options={{
              strings: ["Learner", "Developer", "Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
    </div>
  );
}
