import { NgModule } from "@angular/core";
import { MyUiComponent } from "./my-ui.component";
import { ButtonComponent } from "./button/button.component";
import { IconButtonComponent } from "./icon-button/icon-button.component";

@NgModule({
  declarations: [MyUiComponent, ButtonComponent, IconButtonComponent],
  imports: [],
  exports: [MyUiComponent, ButtonComponent, IconButtonComponent]
})
export class MyUiModule {}
