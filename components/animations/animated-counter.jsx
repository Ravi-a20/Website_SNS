"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import CountUp from "@/components/animations/count-up"

export default function AnimatedCounter({ stat }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      className="p-4"
    >
      <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
        <CountUp end={stat.value} suffix={stat.suffix} />
      </div>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  )
}

