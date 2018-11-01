import { storiesOf, moduleMetadata } from "@storybook/angular";
import { Component } from "@angular/core";
import { UiModule } from "../../../projects/ui/src/lib/ui.module";
import { BtnStoriesComponent } from "./btn-stories.component";

storiesOf("Button", module)
  .addDecorator(
    moduleMetadata({
      imports: [UiModule]
    })
  )
  .add("mybtn", () => ({
    component: BtnStoriesComponent
  }));
