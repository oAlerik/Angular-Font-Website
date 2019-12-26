import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeadingComponent } from './heading/heading.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { FontsComponent } from './fonts/fonts.component';

@NgModule({
  declarations: [AppComponent, HeadingComponent, TextFieldComponent, FontsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
