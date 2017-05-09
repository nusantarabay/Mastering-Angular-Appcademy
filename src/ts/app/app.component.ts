import { Component } from "@angular/core";
import { Logger } from "./services/logger";
import { Colors } from "./services/colors";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
})
export class AppComponent {

    public colors: String[] = [];  

    constructor(private colorsSvc: Colors) {
        this.colorsSvc.addColor("red");
        this.colorsSvc.addColor("white");
        this.colorsSvc.addColor("blue");
        this.colors = this.colorsSvc.getAll();
    }
}
