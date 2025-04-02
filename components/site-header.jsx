"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [quoteDropdownOpen, setQuoteDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Service pricing data
  const servicePricing = [
    { name: "Manned Guarding", price: "₹15,000", unit: "per guard/month" },
    { name: "Electronic Security", price: "₹25,000", unit: "starting package" },
    { name: "Cash Management", price: "₹35,000", unit: "per month" },
    { name: "Facility Management", price: "₹40,000", unit: "per month" },
    { name: "Security Training", price: "₹5,000", unit: "per person" },
    { name: "Event Management", price: "₹20,000", unit: "per event" },
    { name: "Detective Services", price: "₹30,000", unit: "per case" },
    { name: "Executive Protection", price: "₹50,000", unit: "per month" },
  ]

  // Detect if device is mobile
  const isMobile = () => {
    if (typeof window !== "undefined") {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    return false
  }

  // Handle phone click based on device
  const handlePhoneClick = () => {
    if (isMobile()) {
      window.location.href = "tel:1800XXXXXXX"
    } else {
      // For desktop, you could open a contact modal, copy to clipboard, etc.
      navigator.clipboard.writeText("1800-XXX-XXXX")
      alert("Phone number copied to clipboard: 1800-XXX-XXXX")
    }
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image src="/placeholder.svg?height=40&width=120" alt="SNS India Logo" width={120} height={40} priority />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Link href={item.href} className="text-sm font-medium text-gray-900 hover:text-blue-700 relative group">
                  {item.label}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center">
              <button
                onClick={handlePhoneClick}
                className="flex items-center hover:text-blue-700 transition-colors duration-300"
              >
                <Phone className="h-4 w-4 text-blue-700 mr-2" />
                <span className="text-sm font-medium">1800-XXX-XXXX</span>
              </button>
            </div>

            <div className="relative">
              <Button
                className="bg-blue-700 hover:bg-blue-800 transition-transform duration-300 hover:-translate-y-1 flex items-center"
                onMouseEnter={() => setQuoteDropdownOpen(true)}
                onMouseLeave={() => setQuoteDropdownOpen(false)}
              >
                Get a Quote <ChevronDown className="ml-1 h-4 w-4" />
              </Button>

              <AnimatePresence>
                {quoteDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 overflow-hidden"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setQuoteDropdownOpen(true)}
                    onMouseLeave={() => setQuoteDropdownOpen(false)}
                  >
                    <div className="p-4 bg-blue-50 border-b border-blue-100">
                      <h3 className="font-bold text-blue-800">Service Pricing Estimates</h3>
                      <p className="text-xs text-blue-600">Starting prices, may vary based on requirements</p>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {servicePricing.map((service, index) => (
                        <div
                          key={index}
                          className="p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{service.name}</span>
                            <span className="text-sm font-bold text-blue-700">{service.price}</span>
                          </div>
                          <div className="text-xs text-gray-500">{service.unit}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-gray-50">
                      <Link
                        href="/contact"
                        className="block w-full text-center text-sm text-blue-700 hover:text-blue-800 font-medium"
                      >
                        Request Detailed Quote
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-900 hover:text-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-4 border-t"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <a href="tel:1800XXXXXXX" className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-700 mr-2" />
                    <span className="text-sm font-medium">1800-XXX-XXXX</span>
                  </a>
                </div>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800">Get a Quote</Button>
                </Link>

                {/* Mobile Service Pricing */}
                <div className="mt-4 bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium text-sm mb-2">Service Pricing Estimates</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {servicePricing.slice(0, 4).map((service, index) => (
                      <div key={index} className="flex justify-between text-xs">
                        <span>{service.name}</span>
                        <span className="font-medium">{service.price}</span>
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className="text-xs text-blue-700 block mt-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View all services...
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

