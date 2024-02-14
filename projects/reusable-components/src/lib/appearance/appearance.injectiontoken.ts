import { InjectionToken } from "@angular/core";

export const CONFIGURATOR_APPEARANCE = new InjectionToken<ConfiguratorAppearance>('squared', {
    providedIn: "root",
    factory: () => "squared"
});

export type ConfiguratorAppearance = "squared" | "rounded"
