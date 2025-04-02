"use client"

import React, { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function StaggerChildren({ children, delay = 0, staggerDelay = 0.1, className = "", once = true }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Clone children and wrap each in a motion.div with the child variants
  const staggeredChildren = React.Children.map(children, (child) => {
    return <motion.div variants={childVariants}>{child}</motion.div>
  })

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className={className}>
      {staggeredChildren}
    </motion.div>
  )
}

