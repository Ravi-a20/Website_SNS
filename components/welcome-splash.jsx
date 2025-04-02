"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield } from "lucide-react"

export default function WelcomeSplash() {
  const [showSplash, setShowSplash] = useState(false)
  const [hasVisited, setHasVisited] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const visited = localStorage.getItem("sns_visited")
    if (!visited) {
      setHasVisited(false)
      setShowSplash(true)
      // Set the flag for future visits
      localStorage.setItem("sns_visited", "true")
    }

    // Auto-hide splash after 3.5 seconds
    if (!visited) {
      const timer = setTimeout(() => {
        setShowSplash(false)
      }, 3500)

      return () => clearTimeout(timer)
    }
  }, [])

  // If they've visited before, don't show the splash
  if (hasVisited) return null

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900 text-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              className="mb-6 flex justify-center"
            >
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
                <Shield className="h-10 w-10 text-yellow-500" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                },
              }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Welcome to SNS Security
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.4,
                  ease: "easeOut",
                },
              }}
            >
              <p className="text-xl mb-3">Securing India's Future Since 1990</p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                For over three decades, we've been providing comprehensive security solutions to businesses and
                institutions across India, with a commitment to excellence and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                transition: {
                  duration: 2,
                  delay: 1.5,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                  repeat: 0,
                },
              }}
              className="mt-8 text-sm text-blue-300"
            >
              Loading your experience...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

