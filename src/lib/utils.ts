import { NativeNames } from "@/types/countries";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a debounced version of a function.
 * @param population The population of target country
 * @returns A formated country string
 */
export function formatPopulation(population: number) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Creates a debounced version of a function.
 * @param nativeNames The nativeNames object of target country
 * @returns An array of all common type of all nativeNames
 */
export function getCommonNames(nativeNames: NativeNames): string[] {
  const commonNames: string[] = [];
  for (const key in nativeNames) {
    if (nativeNames.hasOwnProperty(key)) {
      commonNames.push(nativeNames[key].common);
    }
  }
  return commonNames;
}

/**
 * Creates a debounced version of a function.
 * @param fn The original function to be debounced.
 * @param delay The delay (in milliseconds) before invoking the debounced function.
 * @returns A debounced function.
 */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 300,
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
