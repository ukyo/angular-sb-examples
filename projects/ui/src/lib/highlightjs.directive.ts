import { Directive, ElementRef, OnInit } from "@angular/core";
import { highlight, highlightAuto } from "highlight.js";

@Directive({
  selector: "code.language-html,code.language-ts,code.language-scss"
})
export class HighlightjsDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const { value } = highlightAuto(
      this.elementRef.nativeElement.innerHTML
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
    );
    this.elementRef.nativeElement.classList.add("hljs");
    this.elementRef.nativeElement.innerHTML = value;
  }
}
