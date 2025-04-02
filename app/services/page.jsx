import Image from "next/image"
import Link from "next/link"
import { Shield, Monitor, Banknote, Building2, GraduationCap, CalendarDays, Search, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import ParallaxScroll from "@/components/animations/parallax-scroll"
import TextReveal from "@/components/animations/text-reveal"

export default function ServicesPage() {
  // Service data
  const services = [
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: <Shield className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Professional security personnel trained to protect your premises, assets, and people with vigilance and expertise.",
      details:
        "Our manned guarding services provide trained security personnel who are equipped to handle various security challenges. We offer customized security solutions for corporate offices, industrial facilities, residential complexes, educational institutions, healthcare facilities, and more. All our security guards undergo rigorous training and background checks to ensure the highest standards of service.",
    },
    {
      id: "electronic-security",
      title: "Electronic Security",
      icon: <Monitor className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Advanced surveillance systems, access control, and alarm solutions to enhance your security infrastructure.",
      details:
        "Our electronic security solutions include CCTV surveillance, access control systems, intrusion detection systems, fire alarm systems, and integrated security management systems. We design, install, and maintain these systems to provide comprehensive protection for your premises. Our solutions are scalable and can be customized to meet the specific requirements of different industries and environments.",
    },
    {
      id: "cash-management",
      title: "Cash Management Services",
      icon: <Banknote className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Secure cash handling, transportation, and processing services for financial institutions and businesses.",
      details:
        "Our cash management services ensure the safe and efficient handling of cash for banks, financial institutions, retail chains, and businesses. We offer cash transportation, ATM replenishment, cash processing, and vault services. Our armored vehicles, trained personnel, and advanced technology ensure the highest level of security for your cash assets.",
    },
    {
      id: "facility-management",
      title: "Facility Management",
      icon: <Building2 className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive facility management services to maintain and optimize your property's operations and security.",
      details:
        "Our facility management services cover a wide range of functions including housekeeping, maintenance, front office management, and more. We help organizations maintain clean, safe, and efficient facilities while allowing them to focus on their core business activities. Our integrated approach ensures seamless coordination between different facility management functions.",
    },
    {
      id: "security-training",
      title: "Security Training",
      icon: <GraduationCap className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional training programs for security personnel to enhance their skills and knowledge.",
      details:
        "We offer comprehensive security training programs for security professionals, corporate employees, and individuals. Our training covers various aspects of security including threat assessment, emergency response, first aid, fire safety, and more. Our experienced trainers use practical scenarios and hands-on exercises to ensure effective learning.",
    },
    {
      id: "event-management",
      title: "Event Management",
      icon: <CalendarDays className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Specialized security services for events, conferences, and public gatherings to ensure safety and order.",
      details:
        "Our event security services provide comprehensive protection for various types of events including corporate conferences, exhibitions, concerts, sports events, and VIP functions. We conduct thorough risk assessments, develop security plans, and deploy trained personnel to ensure the safety of attendees and smooth operation of events.",
    },
    {
      id: "detective-services",
      title: "Detective Services",
      icon: <Search className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Professional investigation services to address corporate fraud, background verification, and other security concerns.",
      details:
        "Our detective services include corporate investigations, background checks, due diligence, asset verification, and more. Our experienced investigators use advanced techniques and technology to gather information and evidence. We maintain strict confidentiality and adhere to legal and ethical standards in all our investigations.",
    },
    {
      id: "executive-protection",
      title: "Executive Protection",
      icon: <UserCheck className="h-10 w-10 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Specialized security services for executives, VIPs, and high-profile individuals to ensure their safety.",
      details:
        "Our executive protection services provide comprehensive security for corporate executives, VIPs, celebrities, and high-net-worth individuals. We conduct threat assessments, develop security protocols, and deploy trained close protection officers. Our services include secure transportation, residential security, travel security, and event security.",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Security Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive security solutions tailored to meet the diverse needs of businesses and institutions
                across India
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`#${service.id}`}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 text-sm"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <TextReveal
                text="Comprehensive Security Solutions"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              />
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our wide range of security services designed to protect what matters most to you
              </p>
            </div>
          </FadeIn>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <p className="text-gray-700 mb-8">{service.details}</p>
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                      <Button className="bg-blue-700 hover:bg-blue-800 transition-transform duration-300 hover:-translate-y-1">
                        Request This Service
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} delay={0.3}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/90 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-blue-700 text-white p-12 rounded-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Customized Security Solution?</h2>
                <p className="text-xl mb-10 max-w-3xl mx-auto">
                  Contact our team today to discuss your specific security requirements and discover how SNS India can
                  help protect what matters most to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 transition-transform duration-300 hover:-translate-y-1"
                    >
                      Request a Free Consultation
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-blue-600 transition-transform duration-300 hover:-translate-y-1"
                    >
                      Learn About Our Company
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide security services to some of India's most prestigious companies and institutions
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <Image
                    src={`/placeholder.svg?height=80&width=80`}
                    alt={`Client Logo ${i}`}
                    width={80}
                    height={80}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our security services
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <StaggerChildren className="space-y-6">
              {[
                {
                  question: "How quickly can you deploy security personnel?",
                  answer:
                    "We can typically deploy security personnel within 24-48 hours for standard requirements. For emergency situations, we offer expedited deployment options. Our extensive network of trained security professionals allows us to respond quickly to your security needs.",
                },
                {
                  question: "Are your security guards trained and certified?",
                  answer:
                    "Yes, all our security guards undergo comprehensive training and certification as per industry standards and regulatory requirements. They are trained in various aspects of security including threat assessment, emergency response, first aid, and customer service.",
                },
                {
                  question: "Do you provide customized security solutions?",
                  answer:
                    "Absolutely. We understand that each client has unique security requirements. Our team conducts a thorough assessment of your premises and security needs to develop a customized security solution that addresses your specific challenges and concerns.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "We serve a wide range of industries including corporate, retail, healthcare, education, hospitality, manufacturing, logistics, banking and financial services, residential communities, and government institutions. Our security solutions are adaptable to the specific requirements of different sectors.",
                },
                {
                  question: "How do you ensure the quality of your services?",
                  answer:
                    "We have a robust quality assurance process that includes regular inspections, performance evaluations, client feedback mechanisms, and continuous training programs. Our supervisory team conducts regular site visits to ensure that our security personnel are performing their duties effectively.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </div>
  )
}

