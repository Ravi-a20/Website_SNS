"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

export default function CountUp({ end, duration = 2, prefix = "", suffix = "", className = "", decimals = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime
      let animationFrame

      const startAnimation = (timestamp) => {
        startTime = timestamp
        animate(timestamp)
      }

      const animate = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const currentCount = progress * end
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(startAnimation)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

