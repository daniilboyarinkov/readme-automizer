import {
  CODEWARS_BADGE,
  IContactLink,
  LEETCODE_BADGE,
  contactLinks,
  renderLink,
} from "./data/contactLinks.ts";
import { projects, renderProject } from "./data/projects.ts";
import {
  renderTechnology,
  restTechnologies,
  topTechnologies,
} from "./data/technologies.ts";
import fs from "fs";

const profileViews: IContactLink = {
  label: "Profile views",
  img: "https://komarev.com/ghpvc/?username=daniilboyarinkov&style=plastic&color=000000",
  url: "https://github.com/daniilboyarinkov",
};

const separator = `
<br/>
<br/>
<br/>
<br/>
<br/>
`;

export const renderMainREADME = () => `
<div id="header" align="center">
  
  <div id="badges">
    ${contactLinks.map(renderLink).join("\n")}
  </div>
  
  <div align="right">
    ${renderLink(profileViews)}
  </div>
</div>

${separator}

<h3 align="left">𝚆𝚎𝚋 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚘𝚗:</h3>

<div align="center">
  ${topTechnologies.map(renderTechnology).join("\n")}
</div>
  
<details align="right">
  <summary>𝙰𝚕𝚜𝚘 𝚐𝚘𝚘𝚍 𝚊𝚝...</summary>
  ${restTechnologies.map(renderTechnology).join("\n")}
</details>  

${separator}
${separator}

<div align="right">
  ${renderLink(CODEWARS_BADGE)}
 </div>

<div align="left">
  ${renderLink(LEETCODE_BADGE)}
</div>
  
${separator}
${separator}
  
<!------------------------------------------------------------>

<div align="center">
  <details>
    <summary>
      <h2>
        𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜
      </h2>
    </summary>
    
    ${projects.map(renderProject).join("\n")}
  </details>
</div>

<!------------------------------------------------------------>

${separator}

`;

fs.writeFile("output.md", renderMainREADME(), () => "");
