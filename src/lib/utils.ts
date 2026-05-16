import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parsePhoneForTel(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function parsePhoneForZalo(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function staggerDelay(index: number, base: number = 0.1): string {
  return `${index * base}s`;
}
