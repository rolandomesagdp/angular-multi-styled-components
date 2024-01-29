import { InjectionToken } from "@angular/core";

export const CONFIGURATOR_APPEARANCE = new InjectionToken<ConfiguratorAppearance>('squared');

export type ConfiguratorAppearance = "squared" | "rounded"
