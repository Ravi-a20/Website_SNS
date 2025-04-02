"use client"

import { Button } from "@/components/ui/button"

export default function ResetWelcome() {
  const handleReset = () => {
    localStorage.removeItem("sns_visited")
    window.location.reload()
  }

  return (
    <Button onClick={handleReset} variant="outline" size="sm" className="text-xs">
      Reset Welcome Screen
    </Button>
  )
}

