import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string") return [input];
      if (Array.isArray(input)) return input;
      if (typeof input === "object") {
        return Object.entries(input)
          .filter(([, val]) => Boolean(val))
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}

export function openEnrollmentForm(url: string | null): void {
  if (!url) {
    alert(
      "Enrollment is opening soon. Please check back or contact us on WhatsApp for details."
    );
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
