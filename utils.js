import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

/**
 *
 * @example
 * const readmeContent = await getRepoReadmeData("15PuzzleGame");
 * console.log(readmeContent);
 */
export const getRepoReadmeData = async (repoName) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${process.env.GH_USERNAME}/${repoName}/contents/README.md`
    );
    const repoData = await response.json();
    const readmeDataUrl = repoData.download_url;

    const readmeResponse = await fetch(readmeDataUrl);
    const readmeData = await readmeResponse.text();

    return readmeData;
  } catch (err) {
    console.error(err);
  }
};

/**
 * @example
 * const repos = await getAllUserRepos();
 * console.log(repos);
 */
export const getAllUserRepos = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${process.env.GH_USERNAME}/repos`
    );
    const data = await response.json();

    return data.map((repo) => ({
      name: repo.name,
      url: repo.url,
    }));
  } catch (err) {
    console.error(err);
  }
};
