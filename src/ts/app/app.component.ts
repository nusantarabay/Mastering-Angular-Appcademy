import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
})
export class AppComponent {

    public message: string = "Color Tool";
    public colors: string[] = [
        "red","green","black","orange","blue",
    ];
    public newColor:string ="";

    public addColor(){
        this.colors.push(this.newColor);
        this.newColor="";
    }
}
