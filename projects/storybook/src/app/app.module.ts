import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoriesModule } from "../stories/stories.module";
import { FooButtonComponent } from './projects/my-ui/src/lib/foo-button/foo-button.component';

@NgModule({
  declarations: [AppComponent, FooButtonComponent],
  imports: [BrowserModule, StoriesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
