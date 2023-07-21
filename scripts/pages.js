const ghpages = require("gh-pages");
const build_path = './out';

const args = process.argv.slice(2);
const username = args[0];
const repoURL = `https://github.com/${username}/${username}.github.io.git`;
const branch = args[1];

console.log(`Deploying to ${repoURL} branch ${branch}`);

ghpages.publish(
  build_path,
  {
    branch: branch,
    repo: repoURL,
    dotfiles: true,
  },
  (err) => {
    if (err) console.error("ERROR: ", err);
    else console.log("PUBLISHED via gh-pages");
  }
);