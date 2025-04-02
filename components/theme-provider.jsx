"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "light", setTheme: () => {} })

export function ThemeProvider({ children, defaultTheme = "light", attribute = "class" }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    // Remove old value
    root.classList.remove("light", "dark")

    // Add new value
    if (attribute === "class") {
      root.classList.add(theme)
    }
  }, [theme, attribute])

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

