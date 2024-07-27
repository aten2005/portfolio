import github from "/icons/github.svg?url";
import linkedin from "/icons/linkedin.svg?url";
import twitter from "/icons/twitter.svg?url";
import discord from "/icons/discord.svg?url";
import instagram from "/icons/instagram.svg?url";
import mail from "/icons/mail.svg?url";
export default function Socials() {
  return (
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
  );
}
