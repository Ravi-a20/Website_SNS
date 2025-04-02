"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function VisitorCounter() {
  const [count, setCount] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/visitor-count", {
          method: "POST",
        })
        const data = await response.json()
        if (data.count) {
          setCount(data.count)
        }
      } catch (error) {
        console.error("Error updating visitor count:", error)
        // Fallback to just getting the count without incrementing
        getVisitorCount()
      } finally {
        setIsLoading(false)
      }
    }

    const getVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitor-count")
        const data = await response.json()
        if (data.count) {
          setCount(data.count)
        }
      } catch (error) {
        console.error("Error getting visitor count:", error)
      } finally {
        setIsLoading(false)
      }
    }

    // Only increment on client-side
    if (typeof window !== "undefined") {
      // Check if this is a new session
      const hasVisited = sessionStorage.getItem("has_visited")
      if (!hasVisited) {
        // First visit in this session, increment the counter
        incrementVisitorCount()
        sessionStorage.setItem("has_visited", "true")
      } else {
        // Already visited in this session, just get the count
        getVisitorCount()
      }
    }
  }, [])

  if (isLoading || count === null) {
    return <div className="text-sm text-gray-500">Loading visitor count...</div>
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">Total Visitors:</span>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium"
      >
        {count.toLocaleString()}
      </motion.div>
    </div>
  )
}

