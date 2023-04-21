import {
  ESLINT,
  ITechnology,
  PRETTIER,
  REACT,
  REACT_SPRING,
  REDUX,
  SASS,
  TAILWIND,
  TYPESCRIPT,
  USE_GESTURE,
  VITE,
  VSCODE,
  YARN,
  renderTechnology,
} from "./technologies.ts";

export interface IProject {
  label?: string;
  description?: string;
  url?: string;
  previewImg?: string;
  technologies?: ITechnology[];
}

export const CC: IProject = {
  label: "𝙲𝚞𝚛𝚛𝚎𝚗𝚗𝚌𝚢 𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛",
  description: "𝙲𝙲 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚜 𝚌𝚘𝚛𝚛𝚎𝚗𝚌𝚢",
  url: "https://github.com/daniilboyarinkov/kozhindev-test-exchanges",
  previewImg:
    "https://user-images.githubusercontent.com/89917619/216560389-93b459db-ca23-4d2c-90ed-15c39a164f01.png",
  technologies: [TYPESCRIPT, REACT, REDUX, TAILWIND, ESLINT, PRETTIER, SASS],
};

export const DS: IProject = {
  label: "𝙳𝚎𝚖𝚘 𝚂𝚑𝚘𝚙",
  description: "",
  url: "https://github.com/daniilboyarinkov/demo-shop",
  previewImg:
    "https://user-images.githubusercontent.com/89917619/213543101-2d16d6c1-44f3-44b7-95d8-5aee333fcedd.png",
  technologies: [TYPESCRIPT, REACT, REDUX, TAILWIND, ESLINT, SASS, VITE],
};

export const CS: IProject = {
  label: "𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛 𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚘𝚛",
  description: "𝙲𝙶 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚎𝚜 𝚊 𝚞𝚗𝚒𝚚𝚞𝚎 𝚌𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛 𝚏𝚘𝚛 𝚢𝚘𝚞.",
  url: "https://github.com/daniilboyarinkov/CharacterGenerator",
  previewImg:
    "https://raw.githubusercontent.com/daniilboyarinkov/CharacterGenerator/master/for_readme/2-1.jpg",
  technologies: [REACT, REDUX, ESLINT, PRETTIER, VSCODE, REACT_SPRING, YARN],
};

export const GD: IProject = {
  label: "𝙶𝚠𝚎𝚗𝚝 𝙳𝚎𝚌𝚔",
  description: "",
  url: "https://github.com/daniilboyarinkov/Gwent-Intro-Deck",
  previewImg:
    "https://raw.githubusercontent.com/daniilboyarinkov/Gwent-Intro-Deck/master/for_readme/3.jpg",
  technologies: [REACT, ESLINT, PRETTIER, REACT_SPRING, USE_GESTURE],
};

export const FIFTEEN: IProject = {
  label: "𝟷𝟻",
  description: "",
  url: "https://github.com/daniilboyarinkov/15PuzzleGame",
  previewImg:
    "https://user-images.githubusercontent.com/89917619/208254676-3fcbf6a9-b89c-4d89-be7a-358301df13e0.jpg",
  technologies: [REACT, REDUX],
};

export const projects: IProject[] = [CC, DS, CS, GD, FIFTEEN];

export const renderProject = (project: IProject) => `
<h3> ${project.label} </h3>

${project.description}

<a href="${project.url}" target="_blank">
  <img width="100%" alt="preview" src="${project.previewImg}">
</a>
<details>
  <summary>Technologies:</summary>
  ${project.technologies?.map(renderTechnology).join("\n")}
</details>
`;
