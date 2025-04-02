import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
// import ParallaxScroll from "@/components/animations/parallax-scroll"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Safensafe Management</h1>
            <p className="text-xl text-gray-600">
              A leading security services provider with a nationwide presence, delivering exceptional security solutions
              for over three decades.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <FadeIn direction="right">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in the 2002, Safensafe Management began as a small security firm with a vision to transform the
              security services landscape in India. Over the years, we have grown to become one of the country's popular
              security services providers, with operations spanning across 11+ major cities and states.
            </p>
            <p className="text-lg text-gray-600">
              Our journey has been marked by a steadfast commitment to excellence, innovation, and customer
              satisfaction. We have continuously evolved our services and solutions to meet the changing security needs
              of our clients, while maintaining the highest standards of professionalism and integrity.
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={0.3}>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Safensafe Management History"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </FadeIn>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-20">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide comprehensive, reliable, and innovative security solutions that protect our clients' assets,
                people, and interests, while contributing to a safer society.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.4}>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be India's most trusted security services provider, recognized for our excellence, integrity, and
                commitment to creating a secure environment for all.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mb-20">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and define who we are as an organization.
            </p>
          </div>
        </FadeIn>
        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity",
              description:
                "We uphold the highest standards of honesty, ethics, and transparency in all our interactions and operations.",
            },
            {
              title: "Excellence",
              description:
                "We strive for excellence in everything we do, continuously improving our services and exceeding client expectations.",
            },
            {
              title: "Reliability",
              description:
                "We are dependable partners who deliver on our promises and maintain consistent quality in our services.",
            },
            {
              title: "Innovation",
              description:
                "We embrace innovation and leverage technology to enhance our security solutions and stay ahead of emerging threats.",
            },
            {
              title: "Teamwork",
              description:
                "We foster collaboration, respect, and mutual support among our team members to achieve common goals.",
            },
            {
              title: "Social Responsibility",
              description:
                "We are committed to making a positive impact on society and contributing to the well-being of our communities.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
            >
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>

      <FadeIn direction="up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who guide our organization.
          </p>
        </div>
      </FadeIn>
      <StaggerChildren className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            name: "Dilip Pandey",
            title: "Co-Founder",
            description: "Leading the company with 25+ years of experience in security and information industry.",
            image: "/papa_1011.jpg"
          },
          {
            name: "Uday Shankar Mishra",
            title: "Co-Founder",
            description: "Leading the company with 27+ years of experience in security industry.",
            image: "/mama_101.jpg"
            // image: "/placeholder.svg?height=200&width=200"
          },
          {
            name: "Om Prakash Mishra",
            title: "Manager and Sr Field Officer", 
            description: "Managing new recruits and ground duties.", 
            image: "/placeholder.svg?height=200&width=200"
          
          },
          // { 
          //   name: "Emily Davis", 
          //   title: "COO", 
          //   description: "Ensuring smooth operations with strong leadership.", 
          //   image: "/placeholder.svg?height=200&width=200"
          // },
          // { 
          //   name: "Michael Brown", 
          //   title: "VP of Marketing", 
          //   description: "Building brand awareness and customer engagement.", 
          //   image: "/placeholder.svg?height=200&width=200" 
          // },
          // { 
          //   name: "Sarah Wilson", 
          //   title: "Head of HR", 
          //   description: "Fostering company culture and employee growth.", 
          //   image: "/placeholder.svg?height=200&width=200" 
          // }
        ].map((executive, i) => (
          <div key={i} className="text-center group">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={executive.image}
                alt={executive.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold">{executive.name}</h3>
            <p className="text-blue-700 mb-2">{executive.title}</p>
            <p className="text-gray-600 text-sm">
              {executive.description}
            </p>
          </div>
        ))}
      </StaggerChildren>

      <FadeIn direction="up">
        <div className="bg-blue-700 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Explore career opportunities at Safensafe Management
            and be part of our mission to create a safer society.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 transition-transform duration-300 hover:-translate-y-1">
            View Career Opportunities <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </FadeIn>
    </div>
  )
}

