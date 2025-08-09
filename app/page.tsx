"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
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
  Home as HomeIcon,
  Wrench,
  Zap,
  Hammer,
  User,
  Mail,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

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
    <div ref={ref} className="text-4xl font-black text-[#003366] mb-2">
      {count}{suffix}
    </div>
  )
}

function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Suburban Heights",
      service: "Roof Replacement",
      rating: 5,
      text: "Skyline Roofing transformed our home! The team was professional, punctual, and the quality exceeded our expectations. Our new roof looks amazing and we feel secure knowing it's built to last."
    },
    {
      name: "Mike Rodriguez",
      location: "Downtown District",
      service: "Storm Damage Repair",
      rating: 5,
      text: "After the storm damaged our roof, Skyline responded immediately. They worked with our insurance and had us covered within days. Exceptional service and craftsmanship!"
    },
    {
      name: "Jennifer Park",
      location: "Westside Community",
      service: "Commercial Roofing",
      rating: 5,
      text: "As a business owner, I needed reliable roofing for my office building. Skyline delivered on time, on budget, and with minimal disruption to our operations. Highly recommended!"
    },
    {
      name: "David Thompson",
      location: "Riverside Estates",
      service: "Gutter Installation",
      rating: 5,
      text: "From estimate to completion, everything was transparent and professional. The new gutters and roof work have completely solved our water issues. Worth every penny!"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else {
        setCardsToShow(3)
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], originalIndex: index })
    }
    return visible
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-lg border-[#003366]/20 hover:bg-[#003366] hover:text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="overflow-hidden py-2">
          <div 
            className="grid gap-6 max-w-6xl mx-auto transition-all duration-300"
            style={{
              gridTemplateColumns: `repeat(${cardsToShow}, minmax(0, 1fr))`
            }}
          >
            {getVisibleTestimonials().map((testimonial) => (
              <Card key={`${testimonial.originalIndex}-${currentIndex}`} className="hover-lift bg-white border-[#E5E7EB] p-6 w-full max-w-sm mx-auto">
                <CardContent className="flex flex-col justify-between space-y-4 h-full">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#E76F51] text-[#E76F51]" />
                    ))}
                  </div>
                  
                  <p className="text-[#4B525D] italic leading-relaxed text-sm flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#003366]">{testimonial.name}</p>
                    <p className="text-sm text-[#4B525D]">{testimonial.location} • {testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-lg border-[#003366]/20 hover:bg-[#003366] hover:text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#E76F51]" : "bg-[#4B525D]/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(75, 82, 93, 0.6)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2006&q=80')`
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm mb-8 bg-white/10 backdrop-blur text-white">
              <Shield className="mr-2 h-4 w-4 text-[#A8DADC]" />
              Licensed & Insured • 15+ Years Experience
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white leading-tight">
              Protect Your Home with 
              <span className="block text-[#A8DADC]">Roofing Solutions</span>
              <span className="block text-[#E76F51]">Built to Last</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Expert craftsmanship, transparent service, and peace of mind. 
              We deliver durable roofing solutions for homeowners and businesses 
              throughout the metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-ROOF
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#003366] backdrop-blur font-bold px-8 py-4 text-lg">
                Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#A8DADC]" />
                24/7 Emergency Service
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#A8DADC]" />
                Lifetime Warranty
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-[#A8DADC]" />
                5-Star Rated
              </div>
            </div>
          </div>
          
          <div className="relative fade-in">
            <div className="aspect-square bg-white/10 backdrop-blur rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional roofing work in progress"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#E76F51] text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-black">500+</div>
              <div className="text-sm font-semibold">Roofs Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      icon: HomeIcon,
      title: "Roof Replacement",
      description: "Complete roof replacement with premium materials and expert installation for maximum durability.",
      features: ["Premium Materials", "Expert Installation", "Lifetime Warranty", "Insurance Claims"],
      popular: true
    },
    {
      icon: Wrench,
      title: "Roof Repair",
      description: "Fast, reliable repairs for leaks, storm damage, and wear. Emergency service available 24/7.",
      features: ["Emergency Service", "Same-Day Repairs", "Quality Materials", "Guaranteed Work"],
      popular: false
    },
    {
      icon: Zap,
      title: "Storm Damage",
      description: "Comprehensive storm damage assessment and restoration with insurance claim assistance.",
      features: ["Insurance Help", "Emergency Tarping", "Full Restoration", "Fast Response"],
      popular: false
    },
    {
      icon: Hammer,
      title: "New Construction",
      description: "Professional roofing for new homes and commercial buildings with modern materials.",
      features: ["Modern Materials", "Code Compliance", "Project Management", "On-Time Delivery"],
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
            Complete Roofing Solutions
          </h2>
          <p className="text-xl text-[#4B525D] max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete replacements, we provide comprehensive 
            roofing services with transparent pricing and guaranteed satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift bg-white border-[#E5E7EB] relative overflow-hidden group">
              {service.popular && (
                <div className="absolute top-4 right-4 bg-[#E76F51] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#003366] to-[#4B525D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                <Button className="w-full bg-[#003366] hover:bg-[#003366]/90 text-white font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/services">
            <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="py-24 skyline-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Trusted by Homeowners Everywhere
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our track record speaks for itself - delivering quality roofing solutions 
            that protect what matters most.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="fade-in">
            <CountUpNumber end={500} suffix="+" />
            <p className="text-white/90 font-semibold">Roofs Protected</p>
          </div>
          <div className="fade-in">
            <CountUpNumber end={15} suffix="+" />
            <p className="text-white/90 font-semibold">Years Experience</p>
          </div>
          <div className="fade-in">
            <CountUpNumber end={100} suffix="%" />
            <p className="text-white/90 font-semibold">Satisfaction Rate</p>
          </div>
          <div className="fade-in">
            <CountUpNumber end={24} suffix="/7" />
            <p className="text-white/90 font-semibold">Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BeforeAfterSection() {
  const projects = [
    {
      title: "Storm Damage Restoration",
      description: "Complete roof replacement after severe storm damage",
      beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80"
    },
    {
      title: "Modern Roof Upgrade",
      description: "Upgraded from old shingles to premium architectural materials",
      beforeImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#A8DADC]/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
            See the Transformation
          </h2>
          <p className="text-xl text-[#4B525D] max-w-2xl mx-auto">
            Drag the slider to see how we transform homes with quality roofing solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <BeforeAfterSlider
              key={index}
              title={project.title}
              description={project.description}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="Before"
              afterLabel="After"
              className="hover-lift"
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/gallery">
            <Button size="lg" className="bg-[#003366] hover:bg-[#003366]/90 text-white font-bold px-8">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#4B525D]">
            Don&apos;t just take our word for it - hear from satisfied homeowners
          </p>
        </div>
        
        <TestimonialCarousel />
        
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E76F51] rounded-full flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="h-6 w-6"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#E76F51] text-[#E76F51]" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#003366]">4.9 Google Reviews</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-[#003366]">BBB A+ Rating</div>
                <span className="text-sm text-[#4B525D]">Accredited Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-[#4B525D]">
              Get your free estimate today and discover why homeowners trust Skyline Roofing Solutions.
            </p>
          </div>
          
          <Card className="bg-white border-[#E5E7EB] shadow-xl">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-[#003366]">Get Your Free Estimate</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Full Name
                        </label>
                        <Input placeholder="Enter your full name" className="border-[#E5E7EB] focus:border-[#E76F51]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Phone Number
                        </label>
                        <Input placeholder="(555) 123-4567" className="border-[#E5E7EB] focus:border-[#E76F51]" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address
                      </label>
                      <Input placeholder="your@email.com" className="border-[#E5E7EB] focus:border-[#E76F51]" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                        <HomeIcon className="h-4 w-4" />
                        Service Needed
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-sm focus:border-[#E76F51] focus:outline-none focus:ring-1 focus:ring-[#E76F51]">
                        <option value="">Select a service</option>
                        <option value="repair">Roof Repair</option>
                        <option value="replacement">Roof Replacement</option>
                        <option value="storm">Storm Damage</option>
                        <option value="new">New Construction</option>
                        <option value="emergency">Emergency Service</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Project Details
                      </label>
                      <Textarea 
                        placeholder="Tell us about your roofing needs..."
                        className="min-h-32 border-[#E5E7EB] focus:border-[#E76F51]"
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button size="lg" className="flex-1 bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold">
                        <Calendar className="mr-2 h-4 w-4" />
                        Get Free Estimate
                      </Button>
                      <Button size="lg" variant="outline" className="flex-1 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-bold">
                        <Phone className="mr-2 h-4 w-4" />
                        Call (555) 123-ROOF
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#003366] to-[#4B525D] text-white p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-6">Why Choose Skyline Roofing?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Licensed & Insured</div>
                        <div className="text-sm text-white/80">Full coverage for your peace of mind</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">24/7 Emergency Service</div>
                        <div className="text-sm text-white/80">We&apos;re here when you need us most</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Lifetime Warranty</div>
                        <div className="text-sm text-white/80">Quality work guaranteed for life</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Expert Team</div>
                        <div className="text-sm text-white/80">15+ years of roofing expertise</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur">
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#E76F51]">FREE</div>
                      <div className="text-sm font-semibold">Estimates & Inspections</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}