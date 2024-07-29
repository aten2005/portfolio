import github from "/icons/github.svg?url";
import linkedin from "/icons/linkedin.svg?url";
import twitter from "/icons/twitter.svg?url";
import discord from "/icons/discord.svg?url";
import instagram from "/icons/instagram.svg?url";
import mail from "/icons/mail.svg?url";
import { cn } from "@/lib/utils";

interface SocialsProps {
  orientation: "horizontal" | "vertical";
  className: string;
}
export default function Socials({ orientation, className }: SocialsProps) {
  return (
    <div
      className={cn(
        "flex justify-center z-10",
        orientation == "horizontal"
          ? "flex-row space-x-5 md:space-x-9"
          : "flex-col space-y-5 md:space-y-9",
        className,
      )}
    >
      <a href="https://linkedin.com/in/aten2005">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="h-6 md:h-8 fill-secondary-foreground"
        >
          <title>linkedin</title>
          <g clip-path="url(#clip0_39_653)">
            <path d="M7.44877 10.2947H1.02472C0.73961 10.2947 0.508591 10.5258 0.508591 10.8108V31.4486C0.508591 31.7337 0.73961 31.9647 1.02472 31.9647H7.44877C7.73388 31.9647 7.9649 31.7337 7.9649 31.4486V10.8108C7.9649 10.5258 7.73388 10.2947 7.44877 10.2947Z" />
            <path d="M4.23907 0.0352173C1.90163 0.0352173 0 1.93478 0 4.26964C0 6.60554 1.90163 8.50582 4.23907 8.50582C6.57466 8.50582 8.47473 6.60544 8.47473 4.26964C8.47484 1.93478 6.57466 0.0352173 4.23907 0.0352173Z" />
            <path d="M23.7888 9.7818C21.2087 9.7818 19.3014 10.891 18.1445 12.1512V10.8109C18.1445 10.5259 17.9135 10.2947 17.6284 10.2947H11.4762C11.1911 10.2947 10.9601 10.5259 10.9601 10.8109V31.4486C10.9601 31.7337 11.1911 31.9647 11.4762 31.9647H17.8862C18.1714 31.9647 18.4024 31.7337 18.4024 31.4486V21.2377C18.4024 17.7969 19.337 16.4564 21.7355 16.4564C24.3478 16.4564 24.5554 18.6053 24.5554 21.4147V31.4487C24.5554 31.7338 24.7864 31.9648 25.0715 31.9648H31.4839C31.769 31.9648 32 31.7338 32 31.4487V20.1285C32 15.0121 31.0244 9.7818 23.7888 9.7818Z" />
          </g>
          <defs>
            <clipPath id="clip0_39_653">
              <rect width="32" height="32" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a href="https://github.com/aten2005">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="h-6 md:h-8 fill-secondary-foreground"
        >
          <title>github</title>
          <g clipPath="url(#clip0_39_640)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 0C24.8368 0 32 7.34389 32 16.4047C32 23.6511 27.4208 29.7983 21.0672 31.9695C20.256 32.1311 19.968 31.6188 19.968 31.182C19.968 30.6412 19.9872 28.8749 19.9872 26.6797C19.9872 25.1501 19.4752 24.1518 18.9008 23.643C22.464 23.2366 26.208 21.8492 26.208 15.5484C26.208 13.7564 25.5872 12.2941 24.56 11.1453C24.7264 10.7309 25.2752 9.06233 24.4032 6.80313C24.4032 6.80313 23.0624 6.36356 20.008 8.48516C18.7296 8.12196 17.36 7.93921 16 7.93281C14.64 7.93921 13.272 8.12196 11.9952 8.48516C8.9376 6.36356 7.5936 6.80313 7.5936 6.80313C6.7248 9.06233 7.2736 10.7309 7.4384 11.1453C6.416 12.2941 5.79041 13.7564 5.79041 15.5484C5.79041 21.8332 9.52641 23.2419 13.08 23.6563C12.6224 24.0659 12.208 24.7884 12.064 25.8492C11.152 26.2684 8.8352 26.9939 7.408 24.4867C7.408 24.4867 6.5616 22.9105 4.9552 22.7953C4.9552 22.7953 3.3952 22.7746 4.8464 23.7922C4.8464 23.7922 5.8944 24.2962 6.6224 26.1922C6.6224 26.1922 7.56161 29.1201 12.0128 28.1281C12.0208 29.4993 12.0352 30.7916 12.0352 31.182C12.0352 31.6156 11.7408 32.1231 10.9424 31.9711C4.584 29.8031 0 23.6527 0 16.4047C0 7.34389 7.1648 0 16 0Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_640">
              <rect width="32" height="32" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a href="https://x.com/aten_2005">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="h-6 md:h-8 fill-secondary-foreground"
        >
          <title>twitter</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.064 28.7997C22.1392 28.7997 28.744 18.9494 28.744 10.4083C28.744 10.1279 28.744 9.84959 28.7248 9.57234C30.0096 8.65868 31.1184 7.52426 32 6.22625C30.8032 6.74924 29.5312 7.09222 28.2304 7.24343C29.6 6.43532 30.6256 5.16573 31.1168 3.66765C29.8272 4.42063 28.4176 4.95205 26.9472 5.23718C24.4608 2.63483 20.3024 2.50875 17.6576 4.95672C15.9536 6.53513 15.2288 8.88853 15.7584 11.1333C10.48 10.8718 5.5616 8.41756 2.2272 4.38015C0.4848 7.33377 1.376 11.1109 4.2608 13.0075C3.216 12.9776 2.1936 12.7006 1.28 12.1997V12.2817C1.2816 15.3582 3.4848 18.0073 6.5472 18.6169C5.5808 18.8768 4.5664 18.9145 3.584 18.727C4.4432 21.3609 6.9088 23.1649 9.7168 23.2169C7.392 25.0158 4.52 25.9927 1.5632 25.9895C1.0416 25.9879 0.52 25.958 0 25.8966C3.0032 27.7932 6.496 28.7997 10.064 28.795"
          />
        </svg>
      </a>
      <a href="#">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="h-6 md:h-8 fill-secondary-foreground"
        >
          <title>discord</title>
          <path d="M27.0849 5.59611C25.0142 4.62474 22.8088 3.909 20.4855 3.5C20.1993 4.01125 19.8626 4.70995 19.6438 5.27232C17.1858 4.89741 14.7448 4.89741 12.3374 5.27232C12.1017 4.70995 11.765 4.01125 11.4788 3.5C9.15553 3.909 6.95013 4.62474 4.87941 5.59611C0.704311 11.9696 -0.42364 18.1899 0.131918 24.3078C2.90971 26.4039 5.58649 27.665 8.2296 28.5C8.88616 27.5968 9.45856 26.6254 9.96361 25.62C9.00401 25.2621 8.09491 24.802 7.23633 24.2737C7.47202 24.1033 7.69087 23.9158 7.90973 23.7454C13.1791 26.2335 18.8862 26.2335 24.0882 23.7454C24.3071 23.9329 24.5259 24.1033 24.7616 24.2737C23.903 24.802 22.9771 25.2451 22.0344 25.62C22.5394 26.6254 23.1118 27.5968 23.7684 28.5C26.4115 27.665 29.1051 26.4039 31.866 24.3078C32.5226 17.2015 30.7381 11.0494 27.1185 5.59611H27.0849ZM10.6707 20.5586C9.08818 20.5586 7.79188 19.076 7.79188 17.2526C7.79188 15.4291 9.05451 13.9465 10.6707 13.9465C12.2869 13.9465 13.5663 15.4291 13.5495 17.2526C13.5495 19.059 12.2869 20.5586 10.6707 20.5586ZM21.2936 20.5586C19.7111 20.5586 18.4148 19.076 18.4148 17.2526C18.4148 15.4291 19.6774 13.9465 21.2936 13.9465C22.9098 13.9465 24.1892 15.4291 24.1724 17.2526C24.1724 19.059 22.9098 20.5586 21.2936 20.5586Z" />
        </svg>
      </a>
      <a href="#">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="h-6 md:h-8 fill-secondary-foreground"
        >
          <title>instagram</title>
          <g clipPath="url(#clip0_39_638)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-7.62939e-06 6.4C-7.62939e-06 2.86538 2.86537 0 6.39999 0H25.6C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H6.39999C2.86537 32 -7.62939e-06 29.1346 -7.62939e-06 25.6V6.4ZM6.39999 3.2C4.63268 3.2 3.19999 4.63269 3.19999 6.4V25.6C3.19999 27.3674 4.63268 28.8 6.39999 28.8H25.6C27.3674 28.8 28.8 27.3674 28.8 25.6V6.4C28.8 4.63269 27.3674 3.2 25.6 3.2H6.39999ZM16 11.2C13.349 11.2 11.2 13.349 11.2 16C11.2 18.651 13.349 20.8 16 20.8C18.651 20.8 20.8 18.651 20.8 16C20.8 13.349 18.651 11.2 16 11.2ZM7.99999 16C7.99999 11.5817 11.5817 8 16 8C20.4182 8 24 11.5817 24 16C24 20.4182 20.4182 24 16 24C11.5817 24 7.99999 20.4182 7.99999 16ZM24.8 9.6C26.1254 9.6 27.2 8.52549 27.2 7.2C27.2 5.87451 26.1254 4.8 24.8 4.8C23.4746 4.8 22.4 5.87451 22.4 7.2C22.4 8.52549 23.4746 9.6 24.8 9.6Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_638">
              <rect width="32" height="32" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a href="mailto:archisman0306@gmail.com">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 md:h-8"
        >
          <title>mail</title>
          <path
            d="M3.42863 7.67151L16 16.9429L28.5714 7.67151"
            className="stroke-secondary-foreground"
            strokeWidth="2.94642"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 5.00006H5.00004C3.26429 5.00006 1.85719 6.40716 1.85719 8.14291V23.8571C1.85719 25.5929 3.26429 27 5.00004 27H27C28.7357 27 30.1428 25.5929 30.1428 23.8571V8.14291C30.1428 6.40716 28.7357 5.00006 27 5.00006Z"
            className="stroke-secondary-foreground"
            strokeWidth="2.94642"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
