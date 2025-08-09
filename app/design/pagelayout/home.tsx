"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Masonry from "@/components/Masonry/Masonry"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
import { PhotoModal } from "@/components/ui/photo-modal"
import { workItems, testimonials } from "@/lib/homeobjects"
import { 
  MapPin, 
  Phone, 
  Shield, 
  Clock, 
  Star, 
  Wrench, 
  AlertCircle,
  Mail,
  User,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  X,
  ArrowRight
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
    <div ref={ref} className="text-4xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
  )
}

function TestimonialCarousel() {
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
          className="bg-background/90 backdrop-blur shadow-lg"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="overflow-hidden py-2">
          <div 
            className="grid gap-6 max-w-5xl mx-auto transition-all duration-300"
            style={{
              gridTemplateColumns: `repeat(${cardsToShow}, minmax(0, 1fr))`
            }}
          >
            {getVisibleTestimonials().map((testimonial) => (
              <Card key={`${testimonial.originalIndex}-${currentIndex}`} className="aspect-square p-5 flex flex-col w-full max-w-sm mx-auto">
                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed text-sm flex-1 overflow-hidden">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  <div className="border-t pt-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="bg-background/90 backdrop-blur shadow-lg"
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
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
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
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80)`
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm mb-6 bg-white/10 backdrop-blur text-white">
              <MapPin className="mr-2 h-4 w-4 text-white" />
              Serving Your Local Area Since 1998
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Expert <span className="text-primary">Home Services</span> <br />
              You Can Trust
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Licensed, insured, and experienced professionals ready to solve your home 
              service needs with same-day appointments and guaranteed satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="px-8">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: (555) 123-4567
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white/20 bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur">
                Get Free Estimate
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-green-400" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-blue-400" />
                24/7 Emergency
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                4.9/5 Rating
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/10 backdrop-blur rounded-lg overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional tools and equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Team?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <CountUpNumber end={25} suffix="+" />
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <CountUpNumber end={5000} suffix="+" />
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <CountUpNumber end={100} suffix="%" />
            <p className="text-muted-foreground">Satisfaction Guaranteed</p>
          </div>
          <div>
            <CountUpNumber end={1} suffix="hr" />
            <p className="text-muted-foreground">Average Response</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteRequestSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get Your Free Quote</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we&apos;ll provide a detailed estimate within 24 hours
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    Service Needed
                  </label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select a service</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="hvac">HVAC</option>
                    <option value="general">General Repair</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Preferred Timeline
                  </label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Emergency)</option>
                    <option value="week">Within a week</option>
                    <option value="month">Within a month</option>
                    <option value="flexible">I&apos;m flexible</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium">
                  Project Details
                </label>
                <Textarea 
                  id="details" 
                  placeholder="Please describe your project, including any specific requirements or issues you&apos;re experiencing..."
                  className="min-h-32"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Get My Quote
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to receive communication from us regarding your quote request.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it - hear from satisfied homeowners
          </p>
        </div>
        
        <TestimonialCarousel />
        
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a 
              href="https://www.google.com/search?q=homeservices+pro+reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-sm border">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="h-5 w-5"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-medium">4.9 Google Reviews</span>
              </div>
            </a>
            
            <a 
              href="https://www.yelp.com/biz/homeservices-pro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg" 
                  alt="Yelp" 
                  className="h-12 w-12"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-medium">4.8 Yelp Reviews</span>
              </div>
            </a>
            
            <a 
              href="https://www.facebook.com/homeservicespro/reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
                  alt="Facebook" 
                  className="h-8 w-8"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-medium">4.9 Facebook Reviews</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LatestWorkSection() {
  const [selectedImage, setSelectedImage] = useState<typeof workItems[0] | null>(null)

  const handleImageClick = (item: typeof workItems[0]) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Check Out Our Latest Work</h2>
          <p className="text-lg text-muted-foreground">
            See the quality craftsmanship and professional results we deliver. Click any image to enlarge.
          </p>
        </div>
        
        <div className="h-[800px]">
          <Masonry
            items={workItems}
            ease="power3.out"
            duration={0.9}
            stagger={0.1}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
            onImageClick={(item) => {
              const workItem = workItems.find(wi => wi.id === item.id)
              if (workItem) {
                handleImageClick(workItem)
              }
            }}
          />
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            <Phone className="mr-2 h-4 w-4" />
            Get Started on Your Project
          </Button>
        </div>
      </div>

      {selectedImage && (
        <PhotoModal
          isOpen={true}
          onClose={closeModal}
          imageSrc={selectedImage.img}
          title="Professional Work Gallery"
          description="High-quality craftsmanship and attention to detail in every project"
        />
      )}
    </section>
  )
}

function EmergencyCTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
        <p className="text-lg mb-6 opacity-90">
          Our certified technicians are available 24/7 for urgent repairs
        </p>
        <Button size="lg" variant="secondary" className="px-8">
          <AlertCircle className="mr-2 h-5 w-5" />
          Emergency Hotline: (555) 911-HELP
        </Button>
      </div>
    </section>
  )
}

function WhatOthersWontDoSection() {
  const comparisons = [
    {
      title: "Professional Installation Quality",
      description: "See the difference between rushed work and professional craftsmanship",
      beforeImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80"
    },
    {
      title: "Worksite Organization & Cleanliness", 
      description: "Others leave messes - we maintain clean, organized work areas",
      beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80"
    },
    {
      title: "Equipment & Tool Standards",
      description: "Professional-grade tools vs worn-out equipment makes all the difference",
      beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Other Companies Don&apos;t Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the real difference professional service makes. Drag the slider to compare.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {comparisons.map((comparison, index) => (
            <BeforeAfterSlider
              key={index}
              title={comparison.title}
              description={comparison.description}
              beforeImage={comparison.beforeImage}
              afterImage={comparison.afterImage}
              beforeLabel="Others"
              afterLabel="Us"
              className="h-full"
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center rounded-lg border border-primary/20 px-6 py-3 bg-primary/10 text-primary">
            <Shield className="mr-2 h-5 w-5" />
            <span className="font-semibold">Experience the difference professional service makes</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReadyToGetStartedSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl lg:text-2xl mb-4 opacity-90">
            Join thousands of satisfied customers who trust us with their home services
          </p>
          <p className="text-lg mb-12 opacity-80">
            Professional • Reliable • Guaranteed
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="opacity-90">Emergency Service</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="opacity-90">Satisfaction Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="opacity-90">Years Experience</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75">
              Licensed • Bonded • Insured | Serving the local community since 1998
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomeServicesHomepage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUsSection />
      <QuoteRequestSection />
      <TestimonialsSection />
      <LatestWorkSection />
      <EmergencyCTASection />
      <WhatOthersWontDoSection />
      <ReadyToGetStartedSection />
    </div>
  );
}