"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Calendar,
  Star
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { services, serviceAreas } from "@/lib/servicesobjects"

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
    <div ref={ref} className="text-4xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
  )
}

function HeroSection() {
  const ServiceIcon = services[0].icon
  
  return (
    <section className="min-h-screen lg:h-screen flex">
      <div className="flex-1 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Complete <span className="text-white/90">Service Solutions</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8">
            From plumbing and electrical to HVAC and general repairs - we&apos;re your trusted 
            one-stop solution for all home maintenance needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="px-8 bg-white text-primary hover:bg-white/90">
              <Phone className="mr-2 h-4 w-4" />
              Call Now: (555) 123-4567
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-white/30 text-white hover:bg-white/10">
              Get Free Estimate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center p-8 lg:p-16">
        <div className="text-center text-white">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ServiceIcon className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Professional Service</h2>
          <p className="text-white/90">Quality workmanship you can trust</p>
        </div>
      </div>
    </section>
  )
}


function ProfessionalServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Professional for your home services
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary font-medium">Repair and Installation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary font-medium">Plumbing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary font-medium">Maintenance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary font-medium">Budget-friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary font-medium">Home Security Services</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary font-medium">Eco-friendly solutions</span>
              </div>
            </div>
            
            <div className="bg-cyan-400 text-white p-4 rounded-xl inline-block">
              <p className="text-sm mb-1">We already 24 hours fast services to help you.</p>
              <p className="font-bold text-base">You can contact us at 123</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-cyan-700">
                <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-12 w-12 text-cyan-600" />
                </div>
                <p className="text-sm">Professional Roofing Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesOverviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Plumbing services</h3>
            <p className="text-sm text-muted-foreground">
              Pipe repair, pipes clogged, replace the pipe line
            </p>
          </div>

          <div className="text-center">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Roofing repair</h3>
            <p className="text-sm text-muted-foreground">
              Roof leaks, tile replacement, roof cleaning and maintenance
            </p>
          </div>

          <div className="text-center">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mold Removal</h3>
            <p className="text-sm text-muted-foreground">
              Removing and cleaning mildew, Restoration and Prevention
            </p>
          </div>

          <div className="text-center">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Tree Trimming</h3>
            <p className="text-sm text-muted-foreground">
              Trimming and cleaning, Deadwood removal, Tree shaping
            </p>
          </div>

          <div className="text-center">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Appliance Repair</h3>
            <p className="text-sm text-muted-foreground">
              repair of washing machines, refrigerators, Air conditioner, etc
            </p>
          </div>

          <div className="text-center">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bathroom Remodeling</h3>
            <p className="text-sm text-muted-foreground">
              Design and Consulting, Installation, Repairing, tile repair
            </p>
          </div>

          <div className="text-center">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Locksmith</h3>
            <p className="text-sm text-muted-foreground">
              Lock installation and repair, Duplication, Lock Rekeying
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-8 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-4">More service?</h3>
            <p className="text-sm mb-6 text-blue-100">
              You can tell us what you need and we can help!
            </p>
            <Button variant="secondary" className="w-full bg-white text-blue-500 hover:bg-blue-50">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


function ServiceAreasSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Areas We Serve</h2>
          <p className="text-lg text-muted-foreground">
            Proudly serving our local community and surrounding areas
          </p>
        </div>
        
        <div className="mb-16">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361665853!2d-74.30932777820431!3d40.69753994458443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1659901234567!5m2!1sen!2sus"
              width="100%" 
              height="600" 
              style={{border: 0}}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Don&apos;t See Your Area?</h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re always expanding our service areas. Give us a call and we&apos;ll let you know if we can help.
            </p>
            <Button className="px-8">
              <Phone className="mr-2 h-4 w-4" />
              Check Service Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export function HomeServicesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProfessionalServicesSection />
      <ServicesOverviewSection />
      <ServiceAreasSection />
    </div>
  );
}