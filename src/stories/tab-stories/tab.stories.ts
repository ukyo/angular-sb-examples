import { storiesOf, moduleMetadata } from "@storybook/angular";
import { UiModule } from "../../../projects/ui/src/lib/ui.module";
import { withSources } from "../../../addons/sources";
import { TabStoriesComponent } from "./tab-stories.component";

storiesOf("Tab", module)
  .addDecorator(withSources)
  .addDecorator(
    moduleMetadata({
      imports: [UiModule]
    })
  )
  .add("tabs", () => ({
    component: TabStoriesComponent
  }));
