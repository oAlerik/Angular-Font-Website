import { Component, OnInit } from "@angular/core";

@Component({
  inputs: ["userInput"],
  selector: "app-fonts",
  templateUrl: "./fonts.component.html",
  styleUrls: ["./fonts.component.scss"]
})
export class FontsComponent implements OnInit {
  fonts = [
    "roboto-slab",
    "ubuntu",
    "playfair-display",
    "quicksand",
    "inria-serif"
  ];

  constructor() {}

  ngOnInit() {}
}
