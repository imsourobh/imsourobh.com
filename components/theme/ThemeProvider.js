"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider defaultTheme="dark" enableSystem={true} {...props}>
      {children}
    </NextThemesProvider>
  );
}
