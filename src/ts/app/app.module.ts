import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Logger, simpleLogger } from "./services/logger";
import { ColorsMutable } from "./services/colors-mutable";
//import { ColorsImmutable } from "./services/colors-immutable";
import { ColorsToken } from "./tokens/colors-token";

import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./pipes/capitalize.pipes";

import "../../scss/styles.scss";

// const useImmutable = true;
// //factory : memilih service mana yang akan dipakai
// const colorsFactory = (logger: Logger) => {
//     if(useImmutable){
//         return new ColorsImmutable(logger);
//     }
//     else{
//         return new Colors(logger);
//     }
// }

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, CapitalizePipe],
    bootstrap: [AppComponent],
    providers: [
        { provide: Logger, useValue: simpleLogger },
        { provide: ColorsToken, useClass: ColorsMutable },
    ],
})
export class AppModule { }
