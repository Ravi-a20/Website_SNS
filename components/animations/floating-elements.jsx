"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Lock,
  Bell,
  Eye,
  FileCheck,
  Users,
  AlertTriangle,
  Key,
  Fingerprint,
  Scan,
  Wifi,
  Camera,
} from "lucide-react"

export default function FloatingElements({
  // Customizable parameters
  count = 20, // Number of floating elements
  minSize = 15, // Minimum size in pixels
  maxSize = 40, // Maximum size in pixels
  minOpacity = 0.1, // Minimum opacity (0-1)
  maxOpacity = 0.4, // Maximum opacity (0-1)
  color = "white", // Color of icons (can be any valid CSS color)
  className = "", // Additional CSS classes
}) {
  const [mounted, setMounted] = useState(false)

  // Available icons
  const icons = [Shield, Lock, Bell, Eye, FileCheck, Users, AlertTriangle, Key, Fingerprint, Scan, Wifi, Camera]

  // Generate elements
  const generateElements = () => {
    const elements = []

    for (let i = 0; i < count; i++) {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)]
      const size = Math.random() * (maxSize - minSize) + minSize
      const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity

      elements.push({
        id: i,
        icon: IconComponent,
        size,
        opacity,
        initialX: Math.random() * 100, // Initial X position (%)
        initialY: Math.random() * 100, // Initial Y position (%)
        animationType: Math.floor(Math.random() * 4), // Random animation type (0-3)
      })
    }

    return elements
  }

  const elements = generateElements()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {elements.map((element) => {
        const IconComponent = element.icon

        // Different animation variants based on the element's animationType
        let animateProps = {}
        let transitionProps = {}

        switch (element.animationType) {
          case 0: // Floating up and down with rotation
            animateProps = {
              y: [0, -30, 0, 30, 0],
              x: [0, 15, 0, -15, 0],
              rotate: [0, 180, 360],
            }
            transitionProps = {
              duration: 20 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
            break

          case 1: // Pulsing with slight movement
            animateProps = {
              scale: [1, 1.2, 1],
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
            }
            transitionProps = {
              duration: 15 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
            break

          case 2: // Circular motion
            animateProps = {
              x: [0, 30, 0, -30, 0],
              y: [0, 30, 0, -30, 0],
            }
            transitionProps = {
              duration: 25 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }
            break

          case 3: // Figure-8 pattern with rotation
          default:
            animateProps = {
              x: [0, 40, 0, -40, 0],
              y: [0, -30, 0, -30, 0],
              rotate: [0, 180, 360, 180, 0],
            }
            transitionProps = {
              duration: 30 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }
            break
        }

        return (
          <motion.div
            key={element.id}
            className={`absolute ${color === "white" ? "text-white/30" : color}`}
            style={{
              left: `${element.initialX}%`,
              top: `${element.initialY}%`,
              opacity: element.opacity,
              width: element.size,
              height: element.size,
            }}
            animate={animateProps}
            transition={transitionProps}
          >
            <IconComponent />
          </motion.div>
        )
      })}
    </div>
  )
}

