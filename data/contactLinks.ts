export interface IContactLink {
  label?: string;
  url?: string;
  img?: string;
}

export const CODEWARS = {
  label: "CodeWars",
  url: "https://www.codewars.com/users/BitDittoWit",
  img: "https://img.shields.io/badge/Codewars-000000?style=for-the-badge&logo=Codewars&logoColor=white",
};

export const CODEPEN = {
  label: "CodePen",
  url: "https://codepen.io/daniilboyarinkov",
  img: "https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white",
};

export const CODESANDBOX = {
  label: "CodeSandbox",
  url: "https://codesandbox.io/search?query=danielboyarinkov&page=1&configure%5BhitsPerPage%5D=12",
  img: "https://img.shields.io/badge/Codesandbox-000000?style=for-the-badge&logo=codesandbox&logoColor=white",
};

export const LEETCODE = {
  label: "LeetCode",
  url: "https://leetcode.com/daniilboyarinkov/",
  img: "https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06",
};

export const TELEGRAM = {
  label: "Telegram",
  url: "https://t.me/BitDittoWit",
  img: "https://img.shields.io/badge/Telegram-000000?style=for-the-badge&logo=telegram&logoColor=white",
};

// Badges

export const CODEWARS_BADGE: IContactLink = {
  label: "CodeWars",
  url: "https://www.codewars.com/users/BitDittoWit",
  img: "https://www.codewars.com/users/BitDittoWit/badges/small",
};

export const LEETCODE_BADGE: IContactLink = {
  label: "LeetCode",
  url: "https://leetcode.com/daniilboyarinkov/",
  img: "https://leetcard.jacoblin.cool/daniilboyarinkov?ext=heatmap&theme=light",
};

export const contactLinks: IContactLink[] = [
  CODEWARS,
  CODEPEN,
  CODESANDBOX,
  LEETCODE,
  TELEGRAM,
];

// <!--    label    -->
// <a href={url} target="_blank">
//   <img src={img} alt={label} />
// </a>
