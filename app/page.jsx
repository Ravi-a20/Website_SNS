import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Shield, Users, Building, Phone, CheckCircle, Award, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import CountUp from "@/components/animations/count-up"
import StaggerChildren from "@/components/animations/stagger-children"
import ParallaxScroll from "@/components/animations/parallax-scroll"
import TextReveal from "@/components/animations/text-reveal"
import Carousel from "@/components/animations/carousel"
import FloatingElements from "@/components/animations/floating-elements"
import ScrollReveal from "@/components/animations/scroll-reveal"
import AnimatedCounter from "@/components/animations/animated-counter"
import ParticleBackground from "@/components/animations/particle-background"

export default function Home() {
  // Service data for quick links
  const services = [
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: <Shield className="h-7 w-7 text-blue-700" />,
      description:
        "Professional security personnel trained to protect your premises, assets, and people with vigilance and expertise.",
    },
    {
      id: "electronic-security",
      title: "Electronic Security",
      icon: <Building className="h-7 w-7 text-blue-700" />,
      description:
        "Advanced surveillance systems, access control, and alarm solutions to enhance your security infrastructure.",
    },
    {
      id: "cash-management",
      title: "Cash Management Services",
      icon: <Users className="h-7 w-7 text-blue-700" />,
      description:
        "Secure cash handling, transportation, and processing services for financial institutions and businesses.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Operations Director, Tech Solutions Ltd",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Safensafe Management has been our security partner for over 5 years. Their professionalism and attention to detail have significantly enhanced our security posture. We highly recommend their services.",
    },
    {
      name: "Priya Sharma",
      position: "Facility Manager, Global Finance Corp",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The electronic security solutions provided by Safensafe Management have transformed how we monitor and secure our premises. Their team's expertise and responsive support make them a valuable partner.",
    },
    {
      name: "Vikram Singh",
      position: "CEO, Retail Chain Group",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "We've been impressed with Safensafe Management's cash management services. Their attention to security protocols and efficiency has made them an integral part of our operations.",
    },
  ]

  // Stats data
  const stats = [
    { value: 22, suffix: "+", label: "Years of Experience" },
    { value: 250, suffix: "+", label: "Clients Nationwide" },
    { value: 1500, suffix: "+", label: "Trained Security Personnel" },
    { value: 11, suffix: "+", label: "Cities Covered" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        {/* Enhanced background animations */}
        <ParticleBackground color="#ffffff" particleCount={70} particleSize={2} speed={0.5} linkDistance={150} />

        {/* Floating security icons */}
        <FloatingElements count={25} minSize={20} maxSize={50} minOpacity={0.15} maxOpacity={0.35} />

        <ParallaxScroll speed={0.2} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </ParallaxScroll>
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center relative z-10">
          <Carousel
            slides={[
              <div key="slide1" className="flex flex-col items-center h-full justify-center">
                <FadeIn direction="down" duration={0.8}>
                  <TextReveal text="Securing India's Future" className="text-4xl md:text-6xl font-bold mb-6" />
                </FadeIn>
                <FadeIn direction="up" delay={0.3} duration={0.8}>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl">
                    Providing comprehensive security solutions and services across India for over 30 years
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.5} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services">
                      <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                        Our Services <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                        Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>,
              <div key="slide2" className="flex flex-col items-center h-full justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Security Services"
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-2xl mb-8 max-w-full"
                />
                <FadeIn direction="up" delay={0.3} duration={0.8}>
                  <TextReveal text="Trusted Security Partner" className="text-4xl md:text-6xl font-bold mb-6" />
                </FadeIn>
                <FadeIn direction="up" delay={0.5} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services">
                      <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>,
              <div key="slide3" className="flex flex-col items-center h-full justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Security Technology"
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-2xl mb-8 max-w-full"
                />
                <FadeIn direction="up" delay={0.3} duration={0.8}>
                  <TextReveal text="Excellence in Security" className="text-4xl md:text-6xl font-bold mb-6" />
                </FadeIn>
                <FadeIn direction="up" delay={0.5} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services">
                      <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                        Our Approach <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>,
            ]}
            autoPlayInterval={7000}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-xl shadow-lg -mt-20 py-8 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <AnimatedCounter key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Security Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions tailored to meet the diverse needs of businesses and institutions
                across India
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services#${service.id}`} className="flex items-center text-blue-700 font-medium group">
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </StaggerChildren>

          <FadeIn direction="up" delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  View All Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Security Team"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>

            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Safensafe Management?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  With over two decades of experience in the security industry, we have established ourselves as a
                  trusted partner for businesses and institutions across India.
                </p>
              </FadeIn>

              <StaggerChildren className="space-y-4">
                {[
                  {
                    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                    title: "Experienced Team",
                    description: "Our security personnel undergo rigorous training and background checks.",
                  },
                  {
                    icon: <Award className="h-5 w-5 text-green-500" />,
                    title: "Industry Certifications",
                    description: "We maintain the highest standards with industry-recognized certifications.",
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-green-500" />,
                    title: "24/7 Support",
                    description: "Our team is available round-the-clock to address any security concerns.",
                  },
                  {
                    icon: <Shield className="h-5 w-5 text-green-500" />,
                    title: "Customized Solutions",
                    description: "We tailor our security services to meet your specific requirements.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </StaggerChildren>

              <FadeIn direction="up" delay={0.6}>
                <div className="mt-8">
                  <Link href="/about">
                    <Button className="bg-blue-700 hover:bg-blue-800 transition-transform duration-300 hover:-translate-y-1">
                      Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from businesses and organizations that trust Safensafe Management for their security needs
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative">
                  <div className="absolute -top-5 left-8">
                    <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Safensafe Management</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Safensafe Management is one of the country's leading security services providers with a nationwide presence. For
                  over three decades, we have been delivering exceptional security solutions to businesses, government
                  institutions, and individuals.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of highly trained professionals is committed to maintaining the highest standards of security
                  and service excellence, making us the trusted partner for all your security needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-bold text-xl">
                        <CountUp end={22} suffix="+" />
                      </span>
                    </div>
                    <span className="text-gray-700">Years of Experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-bold text-xl">
                        <CountUp end={11} suffix="+" />
                      </span>
                    </div>
                    <span className="text-gray-700">Cities Covered</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-bold text-xl">
                        <CountUp end={250} suffix="+" />
                      </span>
                    </div>
                    <span className="text-gray-700">Clients Served</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Safensafe Management Headquarters"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white relative overflow-hidden">
        <ParallaxScroll speed={0.3} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </ParallaxScroll>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Contact our team today to discuss your security requirements and discover how Safensafe Management can help protect
              what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 transition-transform duration-300 hover:-translate-y-1"
                >
                  Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+918XXXXXXXXXX">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-blue-600 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

