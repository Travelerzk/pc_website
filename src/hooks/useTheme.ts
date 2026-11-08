import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const THEME_EVENT = "themechange";
const STORAGE_KEY = "theme";
const THEME_COLOR = { dark: "#05030a", light: "#f7f4ed" } as const;

export function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function syncThemeColor(theme: Theme) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLOR[theme]);
}

export function setTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  syncThemeColor(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable in private mode; the in-memory theme still applies.
  }

  // Drop a preview override (?theme=light|dark) so the saved choice survives reloads.
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has("theme")) {
      url.searchParams.delete("theme");
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  } catch {
    // Ignore malformed URLs; the theme itself is already applied.
  }

  window.dispatchEvent(new Event(THEME_EVENT));
}

export function useTheme(): Theme {
  const [theme, setThemeState] = useState<Theme>(readTheme);

  useEffect(() => {
    const sync = () => setThemeState(readTheme());
    window.addEventListener(THEME_EVENT, sync);

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const followSystem = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") return;
      } catch {
        return;
      }
      const next: Theme = media.matches ? "light" : "dark";
      const root = document.documentElement;
      root.dataset.theme = next;
      root.style.colorScheme = next;
      syncThemeColor(next);
      setThemeState(next);
    };

    media.addEventListener("change", followSystem);
    return () => {
      window.removeEventListener(THEME_EVENT, sync);
      media.removeEventListener("change", followSystem);
    };
  }, []);

  return theme;
}
