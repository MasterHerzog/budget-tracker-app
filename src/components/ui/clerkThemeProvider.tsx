"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "@/contexts/themeContext";

interface ClerkThemeProviderProps {
  children: React.ReactNode;
}

export default function ClerkThemeProvider({
  children,
}: ClerkThemeProviderProps) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? dark : undefined,
        variables: {
          colorPrimary: theme === "dark" ? "#10b981" : "#059669",
          colorBackground: theme === "dark" ? "#171c26" : "#ffffff",
          colorInputBackground: theme === "dark" ? "#2a3240" : "#f9fafb",
          colorInputText: theme === "dark" ? "#e2e8f0" : "#1f2937",
          borderRadius: "0.75rem",
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: theme === "dark" ? "#10b981" : "#059669",
            "&:hover": {
              backgroundColor: theme === "dark" ? "#059669" : "#047857",
            },
          },
          card: {
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            backgroundColor: "transparent",
            backdropFilter: "blur(16px)",
            border:
              theme === "dark"
                ? "1px solid rgba(100, 116, 139, 0.3)"
                : "1px solid rgba(229, 231, 235, 0.3)",
          },
          headerTitle: {
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
          },
          headerSubtitle: {
            color: theme === "dark" ? "#9ca3af" : "#6b7280",
          },
          socialButtonsBlockButton: {
            border:
              theme === "dark"
                ? "1px solid rgba(100, 116, 139, 0.3)"
                : "1px solid rgba(229, 231, 235, 0.3)",
            backgroundColor:
              theme === "dark"
                ? "rgba(42, 50, 64, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(8px)",
          },
          dividerLine: {
            backgroundColor:
              theme === "dark"
                ? "rgba(100, 116, 139, 0.3)"
                : "rgba(229, 231, 235, 0.3)",
          },
          formFieldInput: {
            backgroundColor:
              theme === "dark"
                ? "rgba(42, 50, 64, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
            border:
              theme === "dark"
                ? "1px solid rgba(100, 116, 139, 0.3)"
                : "1px solid rgba(229, 231, 235, 0.3)",
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
