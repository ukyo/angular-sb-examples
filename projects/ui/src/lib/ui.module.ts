import { NgModule } from "@angular/core";
import { UiComponent } from "./ui.component";
import { BtnComponent } from "./btn/btn.component";
import { TabComponent } from "./tab/tab.component";
import { TabGroupComponent } from "./tab-group/tab-group.component";
import { HighlightjsDirective } from "./highlightjs.directive";

@NgModule({
  imports: [],
  declarations: [
    UiComponent,
    BtnComponent,
    TabComponent,
    TabGroupComponent,
    HighlightjsDirective
  ],
  exports: [
    UiComponent,
    BtnComponent,
    TabComponent,
    TabGroupComponent,
    HighlightjsDirective
  ]
})
export class UiModule {}
