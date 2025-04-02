import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import ResetWelcome from "@/components/reset-welcome"
import VisitorCounter from "@/components/visitor-counter"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/sns_up.jpg?height=40&width=120"
                alt="Safensafe Management Logo"
                width={120}
                height={40}
                className=""
              />
            </Link>
            <p className="mb-6">
              Safensafe Management is a leading security services provider with a nationwide presence, delivering exceptional
              security solutions for over three decades.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#manned-guarding" className="hover:text-white">
                  Manned Guarding
                </Link>
              </li>
              <li>
                <Link href="/services#electronic-security" className="hover:text-white">
                  Electronic Security
                </Link>
              </li>
              <li>
                <Link href="/services#cash-management" className="hover:text-white">
                  Cash Management Services
                </Link>
              </li>
              <li>
                <Link href="/services#facility-management" className="hover:text-white">
                  Facility Management
                </Link>
              </li>
              <li>
                <Link href="/services#security-training" className="hover:text-white">
                  Security Training
                </Link>
              </li>
              <li>
                <Link href="/services#event-management" className="hover:text-white">
                  Event Management
                </Link>
              </li>
              <li>
                <Link href="/services#detective-services" className="hover:text-white">
                Detective Services
                </Link>
              </li>
              <li>
                <Link href="/services#executive-protection" className="hover:text-white">
                Executive Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Flat no 1 & 8 DDA Flats Near Post office, Badarpur New Delhi 110044, India</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+91-9971120778, +91-9990107776</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@snsindia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Safensafe Management. All rights reserved.</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
              <VisitorCounter />
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="text-sm hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-sm hover:text-white">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-sm hover:text-white">
                  Sitemap
                </Link>
                <ResetWelcome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

