import { InjectionToken } from "@angular/core";

export const CONFIGURATOR_APPEARANCE = new InjectionToken<ConfiguratorAppearance>('squared');
export interface ColorConfig {
   productColor: string;
   productGeneralConditions: string;
}

export type ConfiguratorAppearance = "squared" | "rounded"