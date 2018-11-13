import { storiesOf, moduleMetadata } from "@storybook/angular";
import { StoriesModule } from "../stories.module";
import { ButtonStoryComponent } from "./button-story/button-story.component";
import { IconButtonStoryComponent } from "./icon-button-story/icon-button-story.component";
import { withSources } from "addons/sources";
import { withScreenshot } from "storybook-chrome-screenshot";

storiesOf("Button", module)
  .addDecorator(withSources)
  // .addDecorator(withScreenshot())
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule],
    }),
  )
  .add(
    "button",
    withScreenshot()(() => ({
      component: ButtonStoryComponent,
    })),
  )
  .add(
    "icon-button",
    withScreenshot()(() => ({
      component: IconButtonStoryComponent,
    })),
  );
