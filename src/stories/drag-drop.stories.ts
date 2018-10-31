import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";

@Component({
  selector: "",
  template: `
    <div cdkDropList (cdkDropListDropped)="drop($event)">
      <div class="example-box" *ngFor="let x of list" cdkDrag>{{x}}</div>
    </div>
  `,
  styles: [
    `
      .cdk-drag-preview {
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drag-animating {
        transition: transform 100ms ease-in;
      }

      .cdk-drop-list-dragging div:not(.cdk-drag-placeholder) {
        transition: transform 100ms ease-in;
      }
    `
  ]
})
export class DragDropStoryComponent {
  list = ["hoge", "fuga", "👾👾👾"];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}

storiesOf("DragDrop", module)
  .addDecorator(
    moduleMetadata({
      imports: [DragDropModule]
    })
  )
  .add("hoge", () => ({
    component: DragDropStoryComponent
  }));
