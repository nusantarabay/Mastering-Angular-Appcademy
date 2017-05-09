import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Logger } from "./services/logger";
import { Colors } from "./services/colors";
import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./pipes/capitalize.pipes";

import "../../scss/styles.scss";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, CapitalizePipe],
    bootstrap: [AppComponent],
    providers: [Logger, Colors],
})
export class AppModule { }
