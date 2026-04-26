import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "astro-high-contrast";

export function useHighContrast() {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }
    localStorage.setItem(STORAGE_KEY, String(enabled));
  }, [enabled]);

  const toggle = useCallback(() => setEnabled((v) => !v), []);

  return { enabled, toggle };
}
