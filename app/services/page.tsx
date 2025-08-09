"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { 
  Phone, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Star,
  Shield,
  Clock,
  Award,
  Home as HomeIcon,
  Wrench,
  Zap,
  Hammer,
  Umbrella,
  Building,
  AlertTriangle
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

function CountUpNumber({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
          setCount(0)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(end * easeOut))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl font-black text-[#E76F51] mb-2">
      {count}{suffix}
    </div>
  )
}

function HeroSection() {
  return (
    <section 
      className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.9), rgba(75, 82, 93, 0.8)), url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2006&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Complete <span className="text-[#A8DADC]">Roofing</span>
            <span className="block text-[#E76F51]">Solutions</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete replacements, we provide comprehensive 
            roofing services with premium materials and expert craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: (555) 123-ROOF
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#003366] backdrop-blur font-bold px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Estimate
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <CountUpNumber end={24} suffix="/7" />
              <p className="text-white/90 font-semibold">Emergency Service</p>
            </div>
            <div className="text-center">
              <CountUpNumber end={100} suffix="%" />
              <p className="text-white/90 font-semibold">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <CountUpNumber end={15} suffix="+" />
              <p className="text-white/90 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesOverviewSection() {
  const services = [
    {
      icon: HomeIcon,
      title: "Roof Replacement",
      description: "Complete roof replacement with premium materials and expert installation for maximum durability and curb appeal.",
      features: ["Premium Materials", "Expert Installation", "Lifetime Warranty", "Insurance Claims Assistance"],
      pricing: "Starting at $8,500",
      popular: true
    },
    {
      icon: Wrench,
      title: "Roof Repair",
      description: "Fast, reliable repairs for leaks, storm damage, and general wear. Emergency service available 24/7.",
      features: ["24/7 Emergency Service", "Same-Day Repairs", "Quality Materials", "Guaranteed Workmanship"],
      pricing: "Starting at $350",
      popular: false
    },
    {
      icon: Zap,
      title: "Storm Damage Restoration",
      description: "Comprehensive storm damage assessment and restoration with full insurance claim assistance.",
      features: ["Insurance Claim Help", "Emergency Tarping", "Full Restoration", "Fast Response"],
      pricing: "Insurance Covered",
      popular: false
    },
    {
      icon: Hammer,
      title: "New Construction",
      description: "Professional roofing for new homes and commercial buildings with modern materials and techniques.",
      features: ["Modern Materials", "Code Compliance", "Project Management", "On-Time Delivery"],
      pricing: "Custom Quote",
      popular: false
    },
    {
      icon: Umbrella,
      title: "Gutter Services",
      description: "Complete gutter installation, repair, and maintenance to protect your home's foundation.",
      features: ["Seamless Gutters", "Leaf Guards", "Downspout Extensions", "Maintenance Plans"],
      pricing: "Starting at $1,200",
      popular: false
    },
    {
      icon: Building,
      title: "Commercial Roofing",
      description: "Specialized commercial roofing solutions for businesses, warehouses, and industrial facilities.",
      features: ["Flat Roof Systems", "Metal Roofing", "Maintenance Plans", "Minimal Disruption"],
      pricing: "Custom Quote",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
            Our Roofing Services
          </h2>
          <p className="text-xl text-[#4B525D] max-w-3xl mx-auto leading-relaxed">
            Comprehensive roofing solutions for residential and commercial properties. 
            Every service backed by our lifetime warranty and satisfaction guarantee.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift bg-white border-[#E5E7EB] relative overflow-hidden group">
              {service.popular && (
                <div className="absolute top-4 right-4 bg-[#E76F51] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#4B525D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#003366]">{service.title}</h3>
                <p className="text-[#4B525D] mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-[#4B525D]">
                      <CheckCircle className="h-4 w-4 text-[#E76F51] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#003366]">{service.pricing}</span>
                    <div className="flex items-center text-sm text-[#4B525D]">
                      <Star className="h-4 w-4 text-[#E76F51] mr-1" />
                      5.0 Rating
                    </div>
                  </div>
                  <Button className="w-full bg-[#003366] hover:bg-[#003366]/90 text-white font-semibold">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function EmergencySection() {
  return (
    <section className="py-24 bg-[#E76F51] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E76F51] to-[#E76F51]/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Emergency Roofing Service
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Storm damage? Sudden leak? Don&apos;t wait - our emergency response team 
            is available 24/7 to protect your home and prevent further damage.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Clock className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-white/80">Emergency crews dispatched within 30 minutes</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Damage Prevention</h3>
              <p className="text-white/80">Emergency tarping to prevent further damage</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Insurance Help</h3>
              <p className="text-white/80">Full assistance with insurance claims</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-[#E76F51] hover:bg-white/90 font-black px-12 py-4 text-xl">
            <Phone className="mr-2 h-6 w-6" />
            Call Emergency Line: (555) 911-ROOF
          </Button>
          
          <p className="mt-6 text-white/80 text-sm">
            Available 24/7 • No extra emergency fees • Licensed & Insured
          </p>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Free Inspection",
      description: "Comprehensive roof assessment with detailed photos and damage documentation."
    },
    {
      number: "02", 
      title: "Detailed Estimate",
      description: "Transparent pricing with material options and timeline for your project."
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Expert installation using premium materials with daily progress updates."
    },
    {
      number: "04",
      title: "Final Walkthrough",
      description: "Complete inspection and cleanup with lifetime warranty documentation."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
            Our Proven Process
          </h2>
          <p className="text-xl text-[#4B525D] max-w-2xl mx-auto">
            From initial inspection to final walkthrough, we ensure every step 
            meets our high standards for quality and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#4B525D] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[#E5E7EB] -translate-x-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#003366]">{step.title}</h3>
              <p className="text-[#4B525D] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Free Inspection
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverviewSection />
      <EmergencySection />
      <ProcessSection />
      <Footer />
    </div>
  );
}