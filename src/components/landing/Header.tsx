import logo from "public/logo.svg";
export default function Header() {
  return (
    <div className="w-screen h-20 flex flex-row items-center justify-end max-w-screen-xl">
      <a href="/" className="mr-auto font-head text-xl ml-7">
        <img src={logo.src} className="h-5"></img>
      </a>
      <a href="/projects" className="text-lg">
        Projects
      </a>
      <a href="/blog" className="text-lg mr-7 ml-7">
        Blog
      </a>
    </div>
  );
}
