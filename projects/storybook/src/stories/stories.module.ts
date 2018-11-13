import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyUiModule } from "my-ui";

@NgModule({
  exports: [CommonModule, MyUiModule]
})
export class StoriesModule {}
