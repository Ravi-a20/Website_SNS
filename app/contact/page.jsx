"use client"

import { useSearchParams } from "next/navigation"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")

  const services = [
    "Manned Guarding",
    "Electronic Security",
    "Cash Management Services",
    "Facility Management",
    "Security Training",
    "Event Management",
    "Detective Services",
    "Executive Protection",
    "Other Services",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn direction="up">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for any inquiries about our security services or to request a customized
            solution.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <FadeIn direction="right">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm services={services} initialService={serviceParam} />
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={0.3}>
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-all duration-300">
              <StaggerChildren className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-700 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Corporate Office</h3>
                    <p className="text-gray-600">123 Business Park, New Delhi - 110001, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-700 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      1800-XXX-XXXX (Toll Free)
                      <br />
                      +91-XX-XXXX-XXXX
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-700 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@snsindia.com
                      <br />
                      support@snsindia.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-700 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </StaggerChildren>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Regional Offices</h3>
              <StaggerChildren className="space-y-4">
                {[
                  {
                    name: "Mumbai Office",
                    address: "456 Business Hub, Mumbai - 400001",
                    phone: "+91-XX-XXXX-XXXX",
                  },
                  {
                    name: "Bangalore Office",
                    address: "789 Tech Park, Bangalore - 560001",
                    phone: "+91-XX-XXXX-XXXX",
                  },
                  {
                    name: "Chennai Office",
                    address: "101 Business Center, Chennai - 600001",
                    phone: "+91-XX-XXXX-XXXX",
                  },
                ].map((office, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
                  >
                    <h4 className="font-semibold">{office.name}</h4>
                    <p className="text-gray-600">{office.address}</p>
                    <p className="text-gray-600">Phone: {office.phone}</p>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn direction="up">
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Locations</h2>
          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center hover:shadow-lg transition-all duration-500">
            <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <div className="bg-blue-50 p-8 rounded-lg text-center mb-12 hover:shadow-md transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our customer support team is available 24/7 to address any urgent security concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918XXXXXXXXXX"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
            >
              <Phone className="mr-2 h-4 w-4" /> Call Emergency Helpline
            </a>
            <a
              href="mailto:support@snsindia.com"
              className="border border-blue-700 text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
            >
              <Mail className="mr-2 h-4 w-4" /> Email Support Team
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

