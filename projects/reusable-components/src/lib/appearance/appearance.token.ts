import { InjectionToken } from "@angular/core";

export const APPLICATION_APPEARANCE = new InjectionToken<ApplicationAppearance>('squared', {
    factory: () => "squared"
});

export type ApplicationAppearance = "squared" | "rounded"
