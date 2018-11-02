import { storiesOf, moduleMetadata } from "@storybook/angular";
import { UiModule } from "../../../projects/ui/src/lib/ui.module";
import { BtnStoriesComponent } from "./btn-stories.component";
import { withSources } from "../../../addons/sources";

storiesOf("Button", module)
  .addDecorator(withSources)
  .addDecorator(
    moduleMetadata({
      imports: [UiModule]
    })
  )
  .add("mybtn", () => ({
    component: BtnStoriesComponent
  }));
