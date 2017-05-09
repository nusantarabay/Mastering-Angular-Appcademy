import { Injectable } from "@angular/core";
import { Logger } from "./logger"
@Injectable()
export class Colors {

    private colorList: String[] = [];

    constructor(private logger: Logger){}

    //underscore for private string
    public getAll(){
        this.logger.log("Retrieve color list");
        return this.colorList;
    }
    
    public addColor(color: String){
        this.logger.log("added to color list: " +color);
        this.colorList.push(color);
    }
}
