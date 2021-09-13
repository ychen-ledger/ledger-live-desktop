const rimraf = require("rimraf");
const fs = require("fs");
const path = require("path");

const initialize = async userData => {
  const userDataPath = path.join(__dirname, "/temp");
  if (fs.existsSync(`${userDataPath}`)) {
    rimraf.sync(userDataPath);
  }

  fs.mkdirSync(userDataPath, { recursive: true });

  if (userData) {
    const jsonFile = path.resolve("playwright/setups/", `${userData}.json`);
    fs.copyFileSync(jsonFile, `${userDataPath}/app.json`);
  }

  return path.join(__dirname, "/temp");
};

module.exports = initialize;
