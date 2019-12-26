import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html",
  styleUrls: ["./text-field.component.scss"]
})
export class TextFieldComponent implements OnInit {
  placeholderText: string = "";
  randomTexts = [
    "Han shot first",
    "What's on your mind?",
    "Interior crocodile alligator",
    "Android > iOS",
    "Lorem ipsum sit dolor amet",
    "I'm walkin' here!",
    "Bond. James Bond.",
    "Here's Johnny!",
    "*Cat noises*"
  ];
  randNum: number = Math.floor(Math.random() * this.randomTexts.length);

  constructor() {}

  ngOnInit() {
    this.placeholderText = this.randomTexts[this.randNum];
  }
}
