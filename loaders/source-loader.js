const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const {
  findResources,
  collectDeepNodes
} = require("@ngtools/webpack/src/transformers");

function findTemplatePath(sourceFile) {
  const resources = findResources(sourceFile);
  let templateUrl = "";
  resources.some(r => {
    return r.resourcePaths.some(s => {
      if (!/html|md$/.test(s)) return false;
      templateUrl = s;
      return true;
    });
  });
  return templateUrl;
}

function findComponentClassName(sourceFile) {
  const classDeclarations = collectDeepNodes(
    sourceFile,
    ts.SyntaxKind.ClassDeclaration
  );
  let className;
  classDeclarations.some(cd => {
    return cd.decorators.some(d => {
      if (d.expression.expression.escapedText !== "Component") return false;
      className = cd.name.escapedText;
      return true;
    });
  });
  return className;
}

module.exports = function(source) {
  const sourceFile = ts.createSourceFile(
    "temp.ts",
    source,
    ts.ScriptTarget.ES2015
  );
  source += `

  ${findComponentClassName(sourceFile)}.sources = {
    template: \`${fs
      .readFileSync(
        path.join(this.context, findTemplatePath(sourceFile)),
        "utf8"
      )
      .replace(/`/g, "\\`")}\`,
    component: \`${source.replace(/`/g, "\\`")}\`
  };
  `;
  return source;
};
