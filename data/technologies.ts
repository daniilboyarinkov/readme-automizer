export interface ITechnology {
  label?: string;
  url?: string;
  img?: string;
}

// topTechnologies
export const REACT = {
  label: "React",
  url: "https://reactjs.org/",
  img: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
};

export const REDUX = {
  label: "Redux",
  url: "https://redux.js.org/",
  img: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png",
};

export const TYPESCRIPT = {
  label: "TypeScript",
  url: "https://www.typescriptlang.org/",
  img: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
};

export const JAVASCRIPT = {
  label: "JavaScript",
  url: "https://learn.javascript.ru/",
  img: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
};

// restTechnologies

export const ESLINT = {
  label: "Eslint",
  url: "https://eslint.org/",
  img: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/eslint/eslint-original.svg",
};

export const TAILWIND = {
  label: "TailwindCSS",
  url: "https://tailwindcss.com/",
  img: "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
};

export const BOOTSTRAP = {
  label: "Bootstrap",
  url: "https://getbootstrap.com/",
  img: "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
};

export const SASS = {
  label: "SASS",
  url: "https://sass-lang.com/",
  img: "https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png",
};

export const CSS = {
  label: "CSS",
  url: "https://www.w3schools.com/css/",
  img: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
};

export const HTML = {
  label: "HTML",
  url: "https://www.w3schools.com/html/",
  img: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
};

export const FLUTTER = {
  label: "Flutter",
  url: "https://flutter.dev/",
  img: "https://user-images.githubusercontent.com/25181517/186150365-da1eccce-6201-487c-8649-45e9e99435fd.png",
};

export const DART = {
  label: "Dart",
  url: "https://dart.dev/",
  img: "https://user-images.githubusercontent.com/25181517/186150304-1568ffdf-4c62-4bdc-9cf1-8d8efcea7c5b.png",
};

export const CSHARP = {
  label: "C#",
  url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  img: "https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png",
};

export const PYTHON = {
  label: "Python",
  url: "https://www.python.org/",
  img: "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
};

export const GIT = {
  label: "Git",
  url: "https://git-scm.com/",
  img: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
};

export const VITE = {
  label: "Vite",
  url: "https://vitejs.dev/",
  img: "https://vitejs.dev/logo.svg",
};

// extra

export const PRETTIER: ITechnology = {
  label: "Prettier",
  url: "https://prettier.io/",
  img: "https://prettier.io/icon.png",
};

export const VSCODE: ITechnology = {
  label: "Visual Studio Code",
  url: "https://code.visualstudio.com/docs/getstarted/settings",
  img: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg",
};

export const REACT_SPRING: ITechnology = {
  label: "React Spring",
  url: "https://react-spring.dev/",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVLqoQ3gJtuOOxW161CwfpSnM0ncE8YPiDUwE8xFWSA&s",
};

export const EMAIL_JS: ITechnology = {
  label: "Email JS",
  url: "https://www.emailjs.com/",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxyHLwTpsmDCPvZ37d2wWoq-rk9Tqt6u500FiKoPVSw&s",
};

export const YARN: ITechnology = {
  label: "Yarn",
  url: "https://yarnpkg.com/",
  img: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/yarn/yarn-original.svg",
};

export const STYLELINT: ITechnology = {
  label: "Stylelint",
  url: "https://stylelint.io/",
  img: "https://stylelint.io/img/light.svg",
};

export const USE_GESTURE: ITechnology = {
  label: "useGesture",
  url: "https://use-gesture.netlify.app/",
  img: "https://use-gesture.netlify.app/static/8be59c286e5edb5be43cd0e42addfcd1/logo-nav-dark.png",
};

export const topTechnologies: ITechnology[] = [REACT, REDUX, TYPESCRIPT];

export const restTechnologies: ITechnology[] = [
  ESLINT,
  TAILWIND,
  BOOTSTRAP,
  SASS,
  CSS,
  HTML,
  FLUTTER,
  DART,
  CSHARP,
  PYTHON,
  GIT,
  VITE,
];

// <a href={url}>
//   <img
//     src={img}
//     width="40"
//     height="40"
//     alt={label}
//   />
// </a>;
