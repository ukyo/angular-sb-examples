import { NgModule } from "@angular/core";
import { UiComponent } from "./ui.component";
import { BtnComponent } from "./btn/btn.component";
import { TabComponent } from "./tab/tab.component";
import { TabGroupComponent } from "./tab-group/tab-group.component";

@NgModule({
  imports: [],
  declarations: [UiComponent, BtnComponent, TabComponent, TabGroupComponent],
  exports: [UiComponent, BtnComponent, TabComponent, TabGroupComponent]
})
export class UiModule {}
