import { Component, OnInit } from "@angular/core";

@Component({
  inputs: ["userInput"],
  selector: "app-fonts",
  templateUrl: "./fonts.component.html",
  styleUrls: ["./fonts.component.scss"]
})
export class FontsComponent implements OnInit {
  fonts = [
    {
      font: "roboto-slab"
    },
    {
      font: "ubuntu"
    },
    {
      font: "playfair-display"
    },
    {
      font: "quicksand"
    },
    {
      font: "inria-serif"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
