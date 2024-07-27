import profile from "/profile.jpg?url";
import Typewriter from "typewriter-effect";
import github from "/icons/github.svg?url";
import linkedin from "/icons/linkedin.svg?url";
import twitter from "/icons/twitter.svg?url";
import discord from "/icons/discord.svg?url";
import instagram from "/icons/instagram.svg?url";
import mail from "/icons/mail.svg?url";
export default function Hero() {
  return (
    <div className="h-[calc(100dvh-5rem)]">
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
      <div className="flex flex-row space-x-5 md:space-x-9 justify-center mt-24 ">
        <a href="https://linkedin.com/in/aten2005">
          <img src={linkedin} alt="linkedin" className="h-6 md:h-8" />
        </a>
        <a href="https://github.com/aten2005">
          <img src={github} alt="github" className="h-6 md:h-8" />
        </a>
        <a href="https://x.com/aten_2005">
          <img src={twitter} alt="twitter" className="h-6 md:h-8" />
        </a>
        <a href="">
          <img src={discord} alt="discord" className="h-6 md:h-8" />
        </a>
        <a href="">
          <img src={instagram} alt="instagram" className="h-6 md:h-8" />
        </a>
        <a href="mailto:archisman0306@gmail.com">
          <img src={mail} alt="mail" className="h-6 md:h-8" />
        </a>
      </div>
    </div>
  );
}
