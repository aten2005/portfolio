interface SkillcardProps {
  iconUrl: string;
  label: string;
}

export default function Skillcard({ iconUrl, label }: SkillcardProps) {
  return (
    <div className="bg-muted aspect-square h-28 md:h-32 lg:h-48 rounded-lg flex flex-col justify-center items-center mx-3 my-3">
      <img
        src={iconUrl}
        alt=""
        className="w-16 h-16 md:h-20 md:w-20 lg:w-28 lg:h-28 mx-auto"
      />
      <p className="text-xl montserrat mt-1">{label}</p>
    </div>
  );
}
