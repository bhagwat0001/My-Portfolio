// src/config/config.ts

export interface OtlpConfig {
  enabled: boolean;
  endpoint: string;
  serviceName: string;
  activitySourceName?: string;
  enableTracing?: boolean;
  enableMetrics?: boolean;
  enableConsoleExporter?: boolean;
  enableLogging?: boolean;
  enableRuntimeInstrumentation?: boolean;
}

const parseBool = (value: unknown, defaultVal: boolean): boolean => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const v = value.trim().toLowerCase();
    if (v === "true") return true;
    if (v === "false") return false;
  }
  return defaultVal;
};

export const defaultOtlpConfig: OtlpConfig = {
  enabled: true,
  endpoint: "http://localhost:4000",
  serviceName:  "MyPortfolioApp",
  activitySourceName: "FieldWebAppSource",
  enableTracing:  true,
  enableMetrics:true,
  enableConsoleExporter: true,
  enableLogging: true,
  enableRuntimeInstrumentation:true,
};

export {};
