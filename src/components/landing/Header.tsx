import logo from "public/logo.svg";
export default function Header() {
  return (
    <div className="w-screen h-20 flex flex-row items-center justify-end max-w-screen-xl">
      <a href="/" className="mr-auto font-head ml-5 md:ml-8">
        <img src={logo.src} className="h-5 md:h-7"></img>
      </a>
      <a
        href="/projects"
        className="text-lg font-sans montserrat hover:text-primary md:text-2xl"
      >
        Projects
      </a>
      <a
        href="/blog"
        className="text-lg mr-7 ml-7 font-sans montserrat hover:text-primary md:text-2xl md:mr-10 md:ml-10"
      >
        Blog
      </a>
    </div>
  );
}
