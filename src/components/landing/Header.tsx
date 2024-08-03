import logo from "public/logo.svg";
import { ModeToggle } from "@/components/ModeToggle";
export default function Header() {
  return (
    <div className="w-screen h-28 flex flex-row items-center justify-end max-w-screen-xl z-10">
      <a href="/" className="mr-auto font-head ml-5 md:ml-8">
        <svg
          width="255"
          height="31"
          viewBox="0 0 255 31"
          fill="none"
          className="h-5 md:h-7 w-min"
        >
          <title>logo</title>
          <path
            d="M0.48 18.88C0.48 16.6667 0.933333 14.7067 1.84 13C2.77333 11.2933 4.02667 9.97333 5.6 9.04C7.2 8.08 8.96 7.6 10.88 7.6C12.6133 7.6 14.12 7.94667 15.4 8.64C16.7067 9.30667 17.7467 10.1467 18.52 11.16V7.96H23.12V30H18.52V26.72C17.7467 27.76 16.6933 28.6267 15.36 29.32C14.0267 30.0133 12.5067 30.36 10.8 30.36C8.90667 30.36 7.17333 29.88 5.6 28.92C4.02667 27.9333 2.77333 26.5733 1.84 24.84C0.933333 23.08 0.48 21.0933 0.48 18.88ZM18.52 18.96C18.52 17.44 18.2 16.12 17.56 15C16.9467 13.88 16.1333 13.0267 15.12 12.44C14.1067 11.8533 13.0133 11.56 11.84 11.56C10.6667 11.56 9.57333 11.8533 8.56 12.44C7.54667 13 6.72 13.84 6.08 14.96C5.46667 16.0533 5.16 17.36 5.16 18.88C5.16 20.4 5.46667 21.7333 6.08 22.88C6.72 24.0267 7.54667 24.9067 8.56 25.52C9.6 26.1067 10.6933 26.4 11.84 26.4C13.0133 26.4 14.1067 26.1067 15.12 25.52C16.1333 24.9333 16.9467 24.08 17.56 22.96C18.2 21.8133 18.52 20.48 18.52 18.96ZM32.4294 11.68V23.88C32.4294 24.7067 32.616 25.3067 32.9894 25.68C33.3894 26.0267 34.056 26.2 34.9894 26.2H37.7894V30H34.1894C32.136 30 30.5627 29.52 29.4694 28.56C28.376 27.6 27.8294 26.04 27.8294 23.88V11.68H25.2294V7.96H27.8294V2.48H32.4294V7.96H37.7894V11.68H32.4294ZM60.1922 18.44C60.1922 19.2667 60.1389 20.0133 60.0322 20.68H43.1922C43.3255 22.44 43.9789 23.8533 45.1522 24.92C46.3255 25.9867 47.7655 26.52 49.4722 26.52C51.9255 26.52 53.6589 25.4933 54.6722 23.44H59.5922C58.9255 25.4667 57.7122 27.1333 55.9522 28.44C54.2189 29.72 52.0589 30.36 49.4722 30.36C47.3655 30.36 45.4722 29.8933 43.7922 28.96C42.1389 28 40.8322 26.6667 39.8722 24.96C38.9389 23.2267 38.4722 21.2267 38.4722 18.96C38.4722 16.6933 38.9255 14.7067 39.8322 13C40.7655 11.2667 42.0589 9.93333 43.7122 9C45.3922 8.06667 47.3122 7.6 49.4722 7.6C51.5522 7.6 53.4055 8.05333 55.0322 8.96C56.6589 9.86667 57.9255 11.1467 58.8322 12.8C59.7389 14.4267 60.1922 16.3067 60.1922 18.44ZM55.4322 17C55.4055 15.32 54.8055 13.9733 53.6322 12.96C52.4589 11.9467 51.0055 11.44 49.2722 11.44C47.6989 11.44 46.3522 11.9467 45.2322 12.96C44.1122 13.9467 43.4455 15.2933 43.2322 17H55.4322ZM73.7997 7.6C75.533 7.6 77.0797 7.96 78.4397 8.68C79.8264 9.4 80.9064 10.4667 81.6797 11.88C82.453 13.2933 82.8397 15 82.8397 17V30H78.3197V17.68C78.3197 15.7067 77.8264 14.2 76.8397 13.16C75.853 12.0933 74.5064 11.56 72.7997 11.56C71.093 11.56 69.733 12.0933 68.7197 13.16C67.733 14.2 67.2397 15.7067 67.2397 17.68V30H62.6797V7.96H67.2397V10.48C67.9864 9.57333 68.933 8.86667 70.0797 8.36C71.253 7.85333 72.493 7.6 73.7997 7.6ZM88.5763 23.8C91.1363 21.5867 93.1496 19.7733 94.6163 18.36C96.1096 16.92 97.3496 15.4267 98.3363 13.88C99.3229 12.3333 99.8163 10.7867 99.8163 9.24C99.8163 7.64 99.4296 6.38666 98.6563 5.48C97.9096 4.57333 96.7229 4.12 95.0963 4.12C93.5229 4.12 92.2963 4.62667 91.4163 5.64C90.5629 6.62667 90.1096 7.96 90.0563 9.64H85.6563C85.7363 6.6 86.6429 4.28 88.3763 2.68C90.1363 1.05333 92.3629 0.239999 95.0563 0.239999C97.9629 0.239999 100.23 1.04 101.856 2.64C103.51 4.24 104.336 6.37333 104.336 9.04C104.336 10.96 103.843 12.8133 102.856 14.6C101.896 16.36 100.736 17.9467 99.3763 19.36C98.0429 20.7467 96.3363 22.36 94.2563 24.2L92.4563 25.8H105.136V29.6H85.6963V26.28L88.5763 23.8ZM107.142 15.04C107.142 10.4267 107.916 6.82666 109.462 4.24C111.036 1.62666 113.729 0.319998 117.542 0.319998C121.356 0.319998 124.036 1.62666 125.582 4.24C127.156 6.82666 127.942 10.4267 127.942 15.04C127.942 19.7067 127.156 23.36 125.582 26C124.036 28.6133 121.356 29.92 117.542 29.92C113.729 29.92 111.036 28.6133 109.462 26C107.916 23.36 107.142 19.7067 107.142 15.04ZM123.462 15.04C123.462 12.88 123.316 11.0533 123.022 9.56C122.756 8.06667 122.196 6.85333 121.342 5.92C120.489 4.96 119.222 4.48 117.542 4.48C115.862 4.48 114.596 4.96 113.742 5.92C112.889 6.85333 112.316 8.06667 112.022 9.56C111.756 11.0533 111.622 12.88 111.622 15.04C111.622 17.28 111.756 19.16 112.022 20.68C112.289 22.2 112.849 23.4267 113.702 24.36C114.582 25.2933 115.862 25.76 117.542 25.76C119.222 25.76 120.489 25.2933 121.342 24.36C122.222 23.4267 122.796 22.2 123.062 20.68C123.329 19.16 123.462 17.28 123.462 15.04ZM130.767 15.04C130.767 10.4267 131.541 6.82666 133.087 4.24C134.661 1.62666 137.354 0.319998 141.167 0.319998C144.981 0.319998 147.661 1.62666 149.207 4.24C150.781 6.82666 151.567 10.4267 151.567 15.04C151.567 19.7067 150.781 23.36 149.207 26C147.661 28.6133 144.981 29.92 141.167 29.92C137.354 29.92 134.661 28.6133 133.087 26C131.541 23.36 130.767 19.7067 130.767 15.04ZM147.087 15.04C147.087 12.88 146.941 11.0533 146.647 9.56C146.381 8.06667 145.821 6.85333 144.967 5.92C144.114 4.96 142.847 4.48 141.167 4.48C139.487 4.48 138.221 4.96 137.367 5.92C136.514 6.85333 135.941 8.06667 135.647 9.56C135.381 11.0533 135.247 12.88 135.247 15.04C135.247 17.28 135.381 19.16 135.647 20.68C135.914 22.2 136.474 23.4267 137.327 24.36C138.207 25.2933 139.487 25.76 141.167 25.76C142.847 25.76 144.114 25.2933 144.967 24.36C145.847 23.4267 146.421 22.2 146.687 20.68C146.954 19.16 147.087 17.28 147.087 15.04ZM173.192 4.76H159.792V12.72C160.352 11.9733 161.179 11.3467 162.272 10.84C163.392 10.3333 164.579 10.08 165.832 10.08C168.072 10.08 169.886 10.56 171.272 11.52C172.686 12.48 173.686 13.6933 174.272 15.16C174.886 16.6267 175.192 18.1733 175.192 19.8C175.192 21.7733 174.806 23.5333 174.032 25.08C173.286 26.6 172.152 27.8 170.632 28.68C169.139 29.56 167.299 30 165.112 30C162.206 30 159.872 29.28 158.112 27.84C156.352 26.4 155.299 24.4933 154.952 22.12H159.392C159.686 23.3733 160.339 24.3733 161.352 25.12C162.366 25.84 163.632 26.2 165.152 26.2C167.046 26.2 168.459 25.6267 169.392 24.48C170.352 23.3333 170.832 21.8133 170.832 19.92C170.832 18 170.352 16.5333 169.392 15.52C168.432 14.48 167.019 13.96 165.152 13.96C163.846 13.96 162.739 14.2933 161.832 14.96C160.952 15.6 160.312 16.48 159.912 17.6H155.592V0.76H173.192V4.76ZM185.41 18.88C185.41 16.6667 185.863 14.7067 186.77 13C187.703 11.2933 188.956 9.97333 190.53 9.04C192.13 8.08 193.903 7.6 195.85 7.6C197.29 7.6 198.703 7.92 200.09 8.56C201.503 9.17333 202.623 10 203.45 11.04V0.4H208.05V30H203.45V26.68C202.703 27.7467 201.663 28.6267 200.33 29.32C199.023 30.0133 197.516 30.36 195.81 30.36C193.89 30.36 192.13 29.88 190.53 28.92C188.956 27.9333 187.703 26.5733 186.77 24.84C185.863 23.08 185.41 21.0933 185.41 18.88ZM203.45 18.96C203.45 17.44 203.13 16.12 202.49 15C201.876 13.88 201.063 13.0267 200.05 12.44C199.036 11.8533 197.943 11.56 196.77 11.56C195.596 11.56 194.503 11.8533 193.49 12.44C192.476 13 191.65 13.84 191.01 14.96C190.396 16.0533 190.09 17.36 190.09 18.88C190.09 20.4 190.396 21.7333 191.01 22.88C191.65 24.0267 192.476 24.9067 193.49 25.52C194.53 26.1067 195.623 26.4 196.77 26.4C197.943 26.4 199.036 26.1067 200.05 25.52C201.063 24.9333 201.876 24.08 202.49 22.96C203.13 21.8133 203.45 20.48 203.45 18.96ZM232.239 18.44C232.239 19.2667 232.186 20.0133 232.079 20.68H215.239C215.372 22.44 216.026 23.8533 217.199 24.92C218.372 25.9867 219.812 26.52 221.519 26.52C223.972 26.52 225.706 25.4933 226.719 23.44H231.639C230.972 25.4667 229.759 27.1333 227.999 28.44C226.266 29.72 224.106 30.36 221.519 30.36C219.412 30.36 217.519 29.8933 215.839 28.96C214.186 28 212.879 26.6667 211.919 24.96C210.986 23.2267 210.519 21.2267 210.519 18.96C210.519 16.6933 210.972 14.7067 211.879 13C212.812 11.2667 214.106 9.93333 215.759 9C217.439 8.06667 219.359 7.6 221.519 7.6C223.599 7.6 225.452 8.05333 227.079 8.96C228.706 9.86667 229.972 11.1467 230.879 12.8C231.786 14.4267 232.239 16.3067 232.239 18.44ZM227.479 17C227.452 15.32 226.852 13.9733 225.679 12.96C224.506 11.9467 223.052 11.44 221.319 11.44C219.746 11.44 218.399 11.9467 217.279 12.96C216.159 13.9467 215.492 15.2933 215.279 17H227.479ZM243.247 25.92L249.487 7.96H254.327L245.927 30H240.487L232.127 7.96H237.007L243.247 25.92Z"
            className="fill-secondary-foreground"
          />
          <path
            d="M180.779 30.28C179.766 30.28 178.926 29.9733 178.259 29.36C177.619 28.72 177.299 27.9333 177.299 27C177.299 26.0667 177.619 25.2933 178.259 24.68C178.926 24.04 179.766 23.72 180.779 23.72C181.766 23.72 182.579 24.04 183.219 24.68C183.859 25.2933 184.179 26.0667 184.179 27C184.179 27.9333 183.859 28.72 183.219 29.36C182.579 29.9733 181.766 30.28 180.779 30.28Z"
            fill="#11E454"
          />
        </svg>
      </a>
      <a
        href="/projects"
        className="text-lg font-sans montserrat hover:text-primary md:text-2xl"
      >
        Projects
      </a>
      <a
        href="/blog"
        className="text-lg mr-5 ml-5 font-sans montserrat hover:text-primary md:text-2xl md:mr-10 md:ml-10"
      >
        Blog
      </a>
      <span className="mr-5">
        <ModeToggle></ModeToggle>
      </span>
    </div>
  );
}
