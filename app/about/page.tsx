"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { 
  Phone, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  Calendar,
  Heart,
  Zap,
  Home as HomeIcon,
  Target,
  Wrench
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

const timelineData = [
  {
    year: "2009",
    title: "Founded with a Vision",
    description: "Started as a family business with a commitment to providing honest, reliable roofing services to our local community.",
    stat: "1",
    statLabel: "Founder",
    icon: HomeIcon,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2012",
    title: "Team Expansion",
    description: "Grew our team to include certified roofing specialists and expanded our service area throughout the metro region.",
    stat: "8",
    statLabel: "Team Members",
    icon: Users,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2016",
    title: "Industry Recognition",
    description: "Achieved BBB A+ rating and became a certified installer for premium roofing materials, setting new quality standards.",
    stat: "A+",
    statLabel: "BBB Rating",
    icon: Award,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2020",
    title: "Technology Integration",
    description: "Launched 24/7 emergency service with advanced storm tracking and customer communication systems.",
    stat: "24/7",
    statLabel: "Emergency Service",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2024",
    title: "Community Leaders",
    description: "Now proudly serving 500+ satisfied customers with our team of 15+ certified professionals, continuing our commitment to excellence.",
    stat: "500+",
    statLabel: "Homes Protected",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
]

const promises = [
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise charges. You'll know exactly what you're paying before we start any work.",
    commitment: "100% Transparent"
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Your time is valuable. We arrive when we say we will and complete projects on schedule.",
    commitment: "Punctuality Promise"
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "If you're not completely satisfied with our work, we'll make it right - backed by our lifetime warranty.",
    commitment: "Satisfaction Assured"
  }
]

function HeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#A8DADC]/10 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-[#003366]/20 px-4 py-2 text-sm mb-6 bg-[#003366]/10 text-[#003366]">
            <Users className="mr-2 h-4 w-4" />
            Meet Our Professional Team
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 text-[#003366] leading-tight">
            The <span className="text-[#E76F51]">People</span> Behind <br />
            Your Home&apos;s Protection
          </h1>
          <p className="text-lg lg:text-xl text-[#4B525D] max-w-2xl mx-auto mb-8 leading-relaxed">
            Get to know the certified professionals, family values, and community commitment 
            that make Skyline Roofing Solutions your trusted local partner.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team member at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
              <h3 className="font-bold text-lg text-[#003366]">Mike Johnson</h3>
              <p className="text-sm text-[#4B525D]">Founder & Master Roofer</p>
              <div className="flex items-center mt-2">
                <Star className="h-4 w-4 fill-[#E76F51] text-[#E76F51]" />
                <span className="text-sm ml-1 text-[#4B525D]">15+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team member working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
              <h3 className="font-bold text-lg text-[#003366]">Sarah Martinez</h3>
              <p className="text-sm text-[#4B525D]">Lead Project Manager</p>
              <div className="flex items-center mt-2">
                <CheckCircle className="h-4 w-4 text-[#E76F51]" />
                <span className="text-sm ml-1 text-[#4B525D]">Certified Project Manager</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team member with tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
              <h3 className="font-bold text-lg text-[#003366]">David Chen</h3>
              <p className="text-sm text-[#4B525D]">Senior Roofing Specialist</p>
              <div className="flex items-center mt-2">
                <Award className="h-4 w-4 text-[#E76F51]" />
                <span className="text-sm ml-1 text-[#4B525D]">Safety Excellence Award</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8">
              <Phone className="mr-2 h-4 w-4" />
              Call Our Team: (555) 123-ROOF
            </Button>
            <Button variant="outline" size="lg" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-bold px-8">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Consultation
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#4B525D]">
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4 text-[#E76F51]" />
              All Technicians Licensed & Insured
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-[#003366]" />
              15+ Professional Team Members
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-[#E76F51]" />
              Family-Owned Since 2009
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompanyMilestonesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#003366]">Our Journey of Growth</h2>
          <p className="text-lg text-[#4B525D] max-w-2xl mx-auto">
            Growing alongside the families we serve, building trust and excellence one milestone at a time
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central vertical line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#003366]/20 via-[#003366] to-[#003366]/20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {timelineData.map((milestone, index) => {
              const Icon = milestone.icon
              const isOdd = index % 2 === 0

              return (
                <div key={milestone.year} className="relative">
                  {/* Timeline dot - hidden on mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#003366] rounded-full border-4 border-white z-10 hidden md:block"></div>

                  <div className={`grid md:grid-cols-2 gap-8 items-center ${isOdd ? "md:text-left" : "md:text-right"}`}>
                    {/* Content */}
                    <div className={`${isOdd ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-[#E76F51]">{milestone.year}</div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#003366]">{milestone.title}</h3>

                      <p className="text-[#4B525D] mb-4 leading-relaxed">{milestone.description}</p>

                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl md:text-3xl font-black text-[#003366]">{milestone.stat}</div>
                        <div className="text-sm text-[#4B525D]">{milestone.statLabel}</div>
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`${isOdd ? "md:order-2" : "md:order-1"} flex ${isOdd ? "md:justify-start" : "md:justify-end"} justify-center`}
                    >
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-52 h-52 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function OurPromisesSection() {
  return (
    <section className="py-24 skyline-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#4B525D]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E76F51]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8DADC]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Our Promises to You</h2>
          <p className="text-lg text-white/80">
            These aren&apos;t just commitments - they&apos;re backed by our reputation and guaranteed by our values.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {promises.map((promise, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E76F51]/20 transition-colors">
                <promise.icon className="h-12 w-12 text-[#A8DADC]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{promise.title}</h3>
              <p className="text-white/80 mb-4 leading-relaxed">{promise.description}</p>
              <div className="inline-flex items-center rounded-full border border-[#E76F51]/30 px-4 py-2 text-sm bg-[#E76F51]/10 text-[#E76F51]">
                <CheckCircle className="mr-2 h-4 w-4" />
                {promise.commitment}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Promise in Action</h3>
            <p className="text-white/90 mb-6">
              &ldquo;We don&apos;t just promise quality service - we deliver it every day, on every job, 
              for every customer. That&apos;s not just our business model, it&apos;s our family legacy.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#E76F51] rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold">The Johnson Family</div>
                <div className="text-sm text-white/70">Three Generations of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReadyToTrustUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#A8DADC]/10 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#E76F51]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003366]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-[#003366]">
              Ready to Trust Your Home <br />
              to the <span className="text-[#E76F51]">Right Team</span>?
            </h2>
            <p className="text-xl text-[#4B525D] mb-8">
              Now that you know who we are, let us show you what we can do for your home.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#003366]">Why Homeowners Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E76F51]/10 p-2 rounded-full mt-1">
                    <Heart className="h-4 w-4 text-[#E76F51]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#003366]">We Genuinely Care</div>
                    <p className="text-sm text-[#4B525D]">Your home matters to us because this community is our home too.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#003366]/10 p-2 rounded-full mt-1">
                    <Users className="h-4 w-4 text-[#003366]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#003366]">We Know You by Name</div>
                    <p className="text-sm text-[#4B525D]">Personal relationships, not just transactions. We remember your preferences and history.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#A8DADC]/20 p-2 rounded-full mt-1">
                    <Award className="h-4 w-4 text-[#003366]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#003366]">We Stand Behind Our Work</div>
                    <p className="text-sm text-[#4B525D]">15 years in business because we do what we say and fix what we touch.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-white shadow-2xl border-[#E5E7EB]">
                <CardContent>
                  <div className="text-center">
                    <div className="bg-[#003366]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-[#003366]" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-[#003366]">Start a Conversation</h4>
                    <p className="text-[#4B525D] mb-6 text-sm">
                      No pressure, no sales pitch. Just an honest conversation about 
                      how we can help protect your home.
                    </p>
                    <div className="space-y-3">
                      <Button size="lg" className="w-full bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Mike Directly: (555) 123-ROOF
                      </Button>
                      <Button variant="outline" size="lg" className="w-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-bold">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule a Free Consultation
                      </Button>
                    </div>
                    <p className="text-xs text-[#4B525D] mt-4">
                      Most consultations can be scheduled within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="absolute -top-4 -right-4 bg-[#E76F51] text-white p-3 rounded-full shadow-lg">
                <Star className="h-6 w-6 fill-current" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg inline-block border border-[#E5E7EB]">
              <p className="text-[#4B525D] mb-2">
                <span className="font-bold text-[#003366]">Mike Johnson</span> and the Skyline Roofing Solutions family
              </p>
              <p className="text-sm text-[#4B525D]">
                Licensed • Bonded • Insured • Your Neighbors Since 2009
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CompanyMilestonesSection />
      <OurPromisesSection />
      <ReadyToTrustUsSection />
      <Footer />
    </div>
  );
}