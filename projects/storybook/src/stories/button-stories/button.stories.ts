import { storiesOf, moduleMetadata } from "@storybook/angular";
import { StoriesModule } from "../stories.module";
import { ButtonStoryComponent } from "./button-story/button-story.component";
import { IconButtonStoryComponent } from "./icon-button-story/icon-button-story.component";
import { withSources } from "addons/sources";

storiesOf("Button", module)
  .addDecorator(withSources)
  .addDecorator(
    moduleMetadata({
      imports: [StoriesModule],
    }),
  )
  .add("button", () => ({
    component: ButtonStoryComponent,
  }))
  .add("icon-button", () => ({
    component: IconButtonStoryComponent,
  }));
