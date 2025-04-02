"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxScroll({ children, speed = 0.5, className = "", direction = "up" }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Adjust the transform based on direction
  const yRange = direction === "up" ? [0, -100 * speed] : [0, 100 * speed]
  const y = useTransform(scrollYProgress, [0, 1], yRange)

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}

