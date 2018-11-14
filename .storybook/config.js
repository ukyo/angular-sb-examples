import { configure, addDecorator } from "@storybook/angular";

// automatically import all files ending in *.stories.ts
const req = require.context("../projects/storybook/src/stories", true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
