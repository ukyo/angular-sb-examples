import { storiesOf, moduleMetadata } from "@storybook/angular";
import { Component } from "@angular/core";
import { UiModule } from "../../projects/ui/src/lib/ui.module";

@Component({
  selector: "",
  template: `
    <div>
      <uky-tab>hello</uky-tab>
      <uky-tab [isSelected]="true">hello</uky-tab>
    </div>
  `,
  styles: []
})
export class BtnStoriesComponent {}

storiesOf("Tab", module)
  .addDecorator(
    moduleMetadata({
      imports: [UiModule]
    })
  )
  .add("tabs", () => ({
    component: BtnStoriesComponent
  }));
