const base = require("./base.cjs");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base,
  env: {
    ...base.env,
    node: true
  }
};
