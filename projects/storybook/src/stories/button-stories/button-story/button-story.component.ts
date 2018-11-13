import { Component, OnInit } from "@angular/core";
import { action } from "@storybook/addon-actions";

@Component({
  selector: "sb-button-story",
  templateUrl: "./button-story.component.html",
  styleUrls: ["./button-story.component.scss"]
})
export class ButtonStoryComponent implements OnInit {
  log = action("click");
  constructor() {}

  ngOnInit() {
    `hello`;
  }

  async hello() {
    this.log(await Promise.resolve());
  }
}

export class Foo {}
