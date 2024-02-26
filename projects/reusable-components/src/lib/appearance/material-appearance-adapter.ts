import { Inject, Injectable } from "@angular/core";
import { ApplicationAppearance, APPLICATION_APPEARANCE } from "./appearance.token";

@Injectable()
export class MaterialAppearanceAdapter {

    get squaredRadius(): string {
        return "0px"
    }

    get roundedRadius(): string {
        return "26px";
    }

    get appearanceRadius(): string {
        if(this.appearance === "rounded") return this.roundedRadius;
        return this.squaredRadius;
    }

    constructor(@Inject(APPLICATION_APPEARANCE) private appearance: ApplicationAppearance) { 
        console.log(`Adapting to a ${appearance} appearance`);
    }
    
    adapt(): void {
        document.documentElement.style
        .setProperty('--mdc-outlined-text-field-container-shape', this.appearanceRadius);
    }
}