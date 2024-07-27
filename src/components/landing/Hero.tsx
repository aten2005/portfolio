import profile from "public/profile.jpg";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-around space-y-7">
      <img
        src={profile.src}
        alt="profile-picture"
        className="rounded-full w-72 border-4 border-solid border-secondary"
      />
      <div>
        <p className="text-4xl font-medium font-head">
          Hey👋
          <br />
          I'm{" "}
          <span className="underline underline-offset-8 decoration-primary">
            Archisman Das
          </span>
        </p>
        <ul>
          <li>Learner</li>
          <li>Developer</li>
          <li>Engineer</li>
        </ul>
      </div>
    </div>
  );
}
