import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "uky-drag-drop-stories",
  templateUrl: "./drag-drop-stories.component.html",
  styleUrls: ["./drag-drop-stories.component.scss"]
})
export class DragDropStoriesComponent {
  list = ["hoge", "fuga", "👾👾👾"];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}
