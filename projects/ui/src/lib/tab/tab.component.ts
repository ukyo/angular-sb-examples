import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "uky-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent implements OnInit {
  @Input()
  isSelected: boolean;
  @Output()
  select = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
