"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  direction = "up",
  distance = 50,
  className = "",
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView || hasAnimated) {
      controls.start("visible")
      if (once) setHasAnimated(true)
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls, hasAnimated, once])

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance }
      case "down":
        return { x: 0, y: -distance }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      case "none":
        return { x: 0, y: 0 }
      default:
        return { x: 0, y: distance }
    }
  }

  const { x, y } = getDirectionOffset()

  const variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

