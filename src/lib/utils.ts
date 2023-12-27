import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Console log only in dev mode
 */
export function logDev(...info: any | unknown[]) {
  if (process.env.NODE_ENV !== "production") {
    console.log(...info);
  }
}

/**
 * Utils for classname
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Enable client-slide logic only
 */
export function canUseDOM(): boolean {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
