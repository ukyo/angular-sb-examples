const fs = require("fs");
const path = require("path");

module.exports = function(source) {
  const [, templateUrl] = source.match(/templateUrl: "([^"]+)"/);
  const [, className] = source.match(/export class ([A-Z]\w+Component)/);
  source += `

  ${className}.sources = {
    template: \`${fs
      .readFileSync(path.join(this.context, templateUrl), "utf8")
      .replace(/`/g, "\\`")}\`,
    component: \`${source.replace(/`/g, "\\`")}\`
  };
  `;
  return source;
};
