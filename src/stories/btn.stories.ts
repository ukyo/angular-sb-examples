import { storiesOf, moduleMetadata } from "@storybook/angular";
import { Component } from "@angular/core";
import { UiModule } from "../../projects/ui/src/lib/ui.module";

@Component({
  selector: "",
  template: `
    <div>
      <uky-btn size="small">hello</uky-btn>
      <uky-btn>hello</uky-btn>
      <uky-btn size="large">hello</uky-btn>
    </div>
  `,
  styles: []
})
export class BtnStoriesComponent {}

storiesOf("Button", module)
  .addDecorator(
    moduleMetadata({
      imports: [UiModule]
    })
  )
  .add("mybtn", () => ({
    component: BtnStoriesComponent
  }));
