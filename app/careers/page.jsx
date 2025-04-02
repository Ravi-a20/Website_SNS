"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import ParallaxScroll from "@/components/animations/parallax-scroll"
import TextReveal from "@/components/animations/text-reveal"
import CareerForm from "@/components/career-form"

export default function CareersPage() {
  // Available positions
  const positions = [
    {
      title: "Security Guard",
      location: "Multiple Locations",
      type: "Full-time",
      description:
        "Responsible for monitoring premises, controlling access, and ensuring safety protocols are followed.",
      requirements: [
        "10th or 12th pass",
        "Physical fitness",
        "Basic communication skills",
        "Willingness to work in shifts",
      ],
    },
    {
      title: "Field Officer",
      location: "Delhi, Mumbai, Bangalore",
      type: "Full-time",
      description:
        "Oversee security operations at client sites, manage security personnel, and ensure compliance with protocols.",
      requirements: [
        "Graduate in any discipline",
        "2+ years of experience in security management",
        "Strong leadership and communication skills",
        "Valid driving license",
      ],
    },
    {
      title: "Office Manager",
      location: "Regional Offices",
      type: "Full-time",
      description: "Manage administrative functions, coordinate with clients, and support security operations.",
      requirements: [
        "Graduate in Business Administration or related field",
        "3+ years of office management experience",
        "Excellent organizational and interpersonal skills",
        "Proficiency in MS Office",
      ],
    },
    {
      title: "Armed Security Personnel",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Provide armed security services for high-value assets, cash transportation, and VIP protection.",
      requirements: [
        "Ex-servicemen preferred",
        "Valid arms license",
        "Experience in handling firearms",
        "Clean background record",
      ],
    },
    {
      title: "Event Security Staff",
      location: "Pan India",
      type: "Contract",
      description: "Provide security services for events, manage crowds, and ensure safety of attendees.",
      requirements: [
        "10th pass or higher",
        "Good physical fitness",
        "Experience in crowd management",
        "Ability to work under pressure",
      ],
    },
    {
      title: "Detective/Investigator",
      location: "Major Cities",
      type: "Full-time",
      description: "Conduct investigations, gather intelligence, and prepare detailed reports for clients.",
      requirements: [
        "Graduate in any discipline",
        "Experience in investigation or law enforcement",
        "Analytical and problem-solving skills",
        "Discretion and confidentiality",
      ],
    },
    {
      title: "Residential Security Staff",
      location: "Multiple Locations",
      type: "Full-time",
      description:
        "Provide security services for residential complexes, monitor entry/exit, and ensure resident safety.",
      requirements: [
        "10th pass or higher",
        "Good communication skills",
        "Customer service orientation",
        "Ability to maintain visitor logs and records",
      ],
    },
    {
      title: "Security Trainer",
      location: "Training Centers",
      type: "Full-time",
      description: "Train security personnel on protocols, emergency response, and security equipment handling.",
      requirements: [
        "Graduate with security background",
        "5+ years in security operations",
        "Training certification preferred",
        "Excellent communication and presentation skills",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
        <ParallaxScroll speed={0.2} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </ParallaxScroll>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-blue-100 mb-8">
                Build a rewarding career in the security industry with SNS India, one of the country's leading security
                service providers
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                onClick={() => {
                  const formSection = document.getElementById("application-form")
                  formSection.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Apply Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <TextReveal text="Why Join SNS India?" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" />
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the benefits of building your career with one of India's most trusted security service
                providers
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerChildren>
              {[
                {
                  title: "Professional Growth",
                  description:
                    "We provide continuous training and development opportunities to help you advance in your career.",
                  icon: "/placeholder.svg?height=80&width=80",
                },
                {
                  title: "Competitive Compensation",
                  description:
                    "We offer attractive salary packages and benefits that recognize your skills and contribution.",
                  icon: "/placeholder.svg?height=80&width=80",
                },
                {
                  title: "Job Security",
                  description:
                    "As a growing organization with a nationwide presence, we provide stable employment opportunities.",
                  icon: "/placeholder.svg?height=80&width=80",
                },
                {
                  title: "Diverse Opportunities",
                  description:
                    "With operations across various sectors, you can explore different areas of the security industry.",
                  icon: "/placeholder.svg?height=80&width=80",
                },
                {
                  title: "Recognition & Rewards",
                  description: "We recognize and reward exceptional performance through various incentive programs.",
                  icon: "/placeholder.svg?height=80&width=80",
                },
                {
                  title: "Work-Life Balance",
                  description:
                    "We value your personal time and strive to create a healthy work environment for all employees.",
                  icon: "/placeholder.svg?height=80&width=80",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Image src={benefit.icon || "/placeholder.svg"} alt={benefit.title} width={40} height={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job opportunities and find a role that matches your skills and career aspirations
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <StaggerChildren>
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">
                    <span className="font-medium">Location:</span> {position.location}
                  </p>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                    onClick={() => {
                      const formSection = document.getElementById("application-form")
                      const positionSelect = document.getElementById("position")
                      if (positionSelect) {
                        // Find the option with this position title and select it
                        for (let i = 0; i < positionSelect.options.length; i++) {
                          if (positionSelect.options[i].text === position.title) {
                            positionSelect.selectedIndex = i
                            break
                          }
                        }
                      }
                      formSection.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Apply for this Position
                  </Button>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Form</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fill out the form below to apply for a position at SNS India. We'll review your application and get back
                to you soon.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <CareerForm positions={positions.map((p) => p.title)} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Employee Testimonials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our team members about their experience working with SNS India
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <StaggerChildren>
              {[
                {
                  name: "Rajiv Sharma",
                  position: "Security Supervisor",
                  years: "5 years with SNS",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "Joining SNS India was one of the best decisions of my career. I started as a security guard and have grown to become a supervisor through the company's training and development programs.",
                },
                {
                  name: "Priya Patel",
                  position: "Office Manager",
                  years: "3 years with SNS",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "The work environment at SNS India is professional yet supportive. The management values our input and there are ample opportunities for career advancement.",
                },
                {
                  name: "Sunil Kumar",
                  position: "Field Officer",
                  years: "7 years with SNS",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "What I appreciate most about working with SNS India is the emphasis on continuous learning and professional development. The company invests in its employees.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-blue-700">{testimonial.position}</p>
                      <p className="text-gray-500 text-sm">{testimonial.years}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career with SNS India?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join our team of security professionals and build a rewarding career in the security industry.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900"
              onClick={() => {
                const formSection = document.getElementById("application-form")
                formSection.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Apply Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

