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

/**
 * Checks if `value` is an empty object or collection.
 * Objects are considered empty if they have no own enumerable string keyed properties.
 * Arrays are considered empty if they have a `length` of `0`.
 *
 */
export function isEmpty(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export function createRequestUrl(url: string, params: Record<string, any>) {
  let requestUrl = new URL(url);
  Object.entries(params).forEach(([key, value]) => {
    if (!isEmpty(value)) {
      requestUrl.searchParams.append(key, value);
    }
  });
  return requestUrl.href;
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function debounce<F extends (...args: any[]) => any>(fn: F, delay = 500) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>): Promise<ReturnType<F>> => {
    return new Promise((resolve) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        resolve(fn(...args));
      }, delay);
    });
  };
}
