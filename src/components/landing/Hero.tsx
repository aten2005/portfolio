import profile from "public/profile.jpg";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-around space-y-7 md:flex-row-reverse mt-20 md:mt-36">
      <img
        src={profile.src}
        alt="profile-picture"
        className="rounded-full w-64 md:w-72 border-4 border-solid"
      />
      <div className="md:mr-8">
        <p className="text-4xl/[3.25rem] font-medium poppins md:text-6xl/[5rem] ">
          Hey👋
          <br />
          I'm{" "}
          <span className="underline underline-offset-8 decoration-primary">
            Archisman Das
          </span>
          <br />
          <Typewriter
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
