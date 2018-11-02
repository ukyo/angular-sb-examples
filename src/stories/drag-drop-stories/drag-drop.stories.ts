import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { withSources } from "../../../addons/sources";
import { DragDropStoriesComponent } from "./drag-drop-stories.component";

storiesOf("DragDrop", module)
  .addDecorator(withSources)
  .addDecorator(
    moduleMetadata({
      imports: [DragDropModule]
    })
  )
  .add("hoge", () => ({
    component: DragDropStoriesComponent
  }));
