let os = require("os");

module.exports = {
  skipJsErrors: true,
  hostname: os.hostname(),
  baseUrl: "https://www.redmine.org",
  selectorTimeout: 5000,
  assertionTimeout: 5000,
};
