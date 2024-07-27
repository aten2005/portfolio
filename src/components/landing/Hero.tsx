import profile from "/profile.jpg?url";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-around space-y-7 md:flex-row-reverse mt-12 md:mt-36">
      <img
        src={profile}
        alt="profile"
        className="rounded-full w-64 md:w-[22rem] border-4 border-solid"
      />
      <div className="md:mr-8">
        <p className="text-4xl/[3.25rem] font-medium poppins md:text-6xl/[5rem] ">
          Hey👋
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
