"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { 
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  Heart,
  MessageSquare,
  Headphones,
  Zap,
  User,
  Wrench,
  ChevronDown,
  Home as HomeIcon
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

function CountUpNumber({ end, suffix = "", duration = 2000 }: { end: number | string; suffix?: string; duration?: number }) {
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
      
      const numericValue = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, '')) : end
      const currentCount = Math.floor(numericValue * easeOut)
      
      setCount(currentCount)
      
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

const contactInfo = {
  emergency: {
    number: "(555) 911-ROOF",
    display: "Emergency Hotline",
    available: "24/7 Emergency Response"
  },
  general: {
    number: "(555) 123-ROOF", 
    display: "Main Office",
    available: "Mon-Fri 7AM-7PM, Sat 8AM-5PM"
  },
  email: {
    primary: "info@skylineroofing.com",
    emergency: "emergency@skylineroofing.com",
    quotes: "quotes@skylineroofing.com"
  },
  address: {
    street: "789 Professional Drive",
    city: "Metro Area",
    state: "ST",
    zip: "12345",
    full: "789 Professional Drive, Metro Area, ST 12345"
  }
}

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    primary: contactInfo.general.number,
    secondary: contactInfo.general.available,
    action: "Call Now",
    urgent: false
  },
  {
    icon: Phone,
    title: "Emergency Service",
    description: "24/7 emergency response team",
    primary: contactInfo.emergency.number,
    secondary: contactInfo.emergency.available,
    action: "Emergency Call",
    urgent: true
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get detailed responses to your questions",
    primary: contactInfo.email.primary,
    secondary: "Response within 24 hours",
    action: "Send Email",
    urgent: false
  },
  {
    icon: MessageSquare,
    title: "Get a Quote",
    description: "Free estimates for your project",
    primary: contactInfo.email.quotes,
    secondary: "Detailed project quotes",
    action: "Request Quote",
    urgent: false
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Meet our team in person",
    primary: contactInfo.address.full,
    secondary: "Mon-Fri 8AM-5PM",
    action: "Get Directions",
    urgent: false
  },
  {
    icon: Calendar,
    title: "Schedule Service",
    description: "Book your appointment online",
    primary: "Online Scheduling",
    secondary: "Same-day availability",
    action: "Schedule Now",
    urgent: false
  }
]

const responseStats = [
  {
    value: "15",
    suffix: "min",
    label: "Average Response Time"
  },
  {
    value: "24",
    suffix: "/7",
    label: "Emergency Availability"  
  },
  {
    value: "100",
    suffix: "%",
    label: "Customer Satisfaction"
  },
  {
    value: "500",
    suffix: "+",
    label: "Calls Handled Monthly"
  }
]

const whyContactUs = [
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our knowledgeable team provides professional guidance for all your roofing needs.",
    features: ["Certified technicians", "15+ years experience", "Comprehensive solutions"]
  },
  {
    icon: Shield,
    title: "Guaranteed Service",
    description: "We stand behind our work with comprehensive warranties and satisfaction guarantees.",
    features: ["Licensed & insured", "Quality guarantee", "Follow-up service"]
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Quick response times and same-day service availability for urgent repairs.",
    features: ["Same-day service", "Emergency response", "Flexible scheduling"]
  }
]

const contactFormFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
    icon: "user"
  },
  {
    name: "phone", 
    label: "Phone Number",
    type: "tel",
    placeholder: "(555) 123-4567",
    required: true,
    icon: "phone"
  },
  {
    name: "email",
    label: "Email Address", 
    type: "email",
    placeholder: "your@email.com",
    required: true,
    icon: "mail"
  },
  {
    name: "service",
    label: "Service Needed",
    type: "select",
    placeholder: "Select a service",
    required: true,
    icon: "wrench",
    options: [
      { value: "", label: "Select a service" },
      { value: "repair", label: "Roof Repair" },
      { value: "replacement", label: "Roof Replacement" },
      { value: "storm", label: "Storm Damage" },
      { value: "new", label: "New Construction" },
      { value: "gutters", label: "Gutter Services" },
      { value: "emergency", label: "Emergency Service" },
      { value: "quote", label: "Free Quote" }
    ]
  },
  {
    name: "timeline",
    label: "Preferred Timeline",
    type: "select", 
    placeholder: "Select timeline",
    required: false,
    icon: "calendar",
    options: [
      { value: "", label: "Select timeline" },
      { value: "asap", label: "ASAP (Emergency)" },
      { value: "today", label: "Today" },
      { value: "week", label: "Within a week" },
      { value: "month", label: "Within a month" },
      { value: "flexible", label: "I'm flexible" }
    ]
  },
  {
    name: "message",
    label: "Project Details",
    type: "textarea",
    placeholder: "Please describe your roofing needs, including any specific requirements or issues you're experiencing...",
    required: false,
    icon: "message",
    rows: 5
  }
]

const faqs = [
  {
    question: "How quickly can you respond to emergency calls?",
    answer: "Our emergency response team typically arrives within 15-30 minutes for urgent roofing issues. We're available 24/7, 365 days a year for storm damage, leaks, and other roofing emergencies."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free estimates for all roofing services. Our certified technicians will assess your needs and provide transparent, upfront pricing with no hidden fees."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. All our technicians are fully licensed, bonded, and insured. We maintain comprehensive liability insurance and worker's compensation coverage for your peace of mind."
  },
  {
    question: "What areas do you service?",
    answer: "We proudly serve the entire metro area and surrounding suburban communities. If you're unsure whether we service your area, give us a call and we'll let you know."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind all our work with comprehensive warranties. Labor warranties range from 5-25 years depending on the service, and we honor all manufacturer warranties on materials."
  },
  {
    question: "Can you help with insurance claims?",
    answer: "Absolutely! We have extensive experience working with insurance companies and can help guide you through the entire claims process for storm damage and other covered repairs."
  }
]

function HeroSection() {
  return (
    <section 
      className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(75, 82, 93, 0.6)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2006&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm mb-8 bg-white/10 backdrop-blur">
            <Phone className="mr-2 h-4 w-4 text-[#A8DADC]" />
            Ready to Help 24/7
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Get in <span className="text-[#A8DADC]">Touch</span>
            <span className="block text-[#E76F51]">Today</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to protect your home? Contact our expert team for emergency service, 
            free estimates, or answers to your roofing questions.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {responseStats.map((stat, index) => (
              <div key={index} className="text-center">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
                <p className="text-white/90 font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: (555) 911-ROOF
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#003366] backdrop-blur font-bold px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactMethodsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-xl text-[#4B525D] max-w-2xl mx-auto">
            Choose the contact method that works best for you. We&apos;re here to help however you prefer to connect.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} className={`hover-lift bg-white border-[#E5E7EB] relative overflow-hidden group ${method.urgent ? 'border-[#E76F51] bg-[#E76F51]/5' : ''}`}>
              {method.urgent && (
                <div className="absolute top-4 right-4 bg-[#E76F51] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Emergency
                </div>
              )}
              <CardContent className="p-8 text-center">
                <div className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  method.urgent ? 'bg-[#E76F51]' : 'bg-gradient-to-br from-[#003366] to-[#4B525D]'
                }`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#003366]">{method.title}</h3>
                <p className="text-[#4B525D] mb-4 leading-relaxed">{method.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="font-bold text-[#003366]">{method.primary}</div>
                  <div className="text-sm text-[#4B525D]">{method.secondary}</div>
                </div>
                
                <Button className={`w-full font-semibold ${
                  method.urgent 
                    ? 'bg-[#E76F51] hover:bg-[#E76F51]/90 text-white' 
                    : 'bg-[#003366] hover:bg-[#003366]/90 text-white'
                }`}>
                  {method.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactFormSection() {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      user: User,
      phone: Phone,
      mail: Mail,
      wrench: Wrench,
      calendar: Calendar,
      message: MessageSquare
    }
    return iconMap[iconName] || MessageSquare
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-[#003366]">Send Us a Message</h2>
            <p className="text-lg text-[#4B525D]">
              Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed response.
            </p>
          </div>
          
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden min-h-[600px]">
            <div className="grid lg:grid-cols-2 h-full">
              {/* Google Maps Section */}
              <div className="relative overflow-hidden bg-gray-100">
                <div className="h-full min-h-[600px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361665853!2d-74.30932777820431!3d40.69753994458443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1659901234567!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{border: 0, minHeight: '600px'}}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
              
              {/* Contact Form Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-[#4B525D] mb-8">Ready to protect your home? Contact us today!</p>
                  </div>
                  
                  {/* Full Name and Phone Number in same row */}
                  <div className="grid grid-cols-2 gap-4">
                    {contactFormFields.slice(0, 2).map((field, index) => {
                      const IconComponent = getIconComponent(field.icon)
                      return (
                        <div key={index} className="space-y-2">
                          <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            {field.label}
                          </label>
                          <Input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="border-[#E5E7EB] bg-white text-[#003366] placeholder:text-[#4B525D] focus:border-[#E76F51] focus:ring-[#E76F51]"
                          />
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Rest of the form fields */}
                  {contactFormFields.slice(2).map((field, index) => {
                    const IconComponent = getIconComponent(field.icon)
                    
                    if (field.type === 'select') {
                      return (
                        <div key={index + 2} className="space-y-2">
                          <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            {field.label}
                          </label>
                          <select className="flex h-10 w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#003366] placeholder:text-[#4B525D] focus:border-[#E76F51] focus:outline-none focus:ring-1 focus:ring-[#E76F51]">
                            {field.options?.map((option, optionIndex) => (
                              <option key={optionIndex} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      )
                    }
                    
                    if (field.type === 'textarea') {
                      return (
                        <div key={index + 2} className="space-y-2">
                          <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            {field.label}
                          </label>
                          <Textarea
                            placeholder={field.placeholder}
                            rows={field.rows}
                            className="border-[#E5E7EB] bg-white text-[#003366] placeholder:text-[#4B525D] focus:border-[#E76F51] focus:ring-[#E76F51]"
                          />
                        </div>
                      )
                    }
                    
                    return (
                      <div key={index + 2} className="space-y-2">
                        <label className="text-sm font-semibold text-[#003366] flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          {field.label}
                        </label>
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="border-[#E5E7EB] bg-white text-[#003366] placeholder:text-[#4B525D] focus:border-[#E76F51] focus:ring-[#E76F51]"
                        />
                      </div>
                    )
                  })}
                  
                  <div className="space-y-3 pt-4">
                    <Button size="lg" className="w-full bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button size="lg" variant="outline" className="w-full border-[#003366] bg-white text-[#003366] hover:bg-[#003366] hover:text-white font-bold">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Instead: {contactInfo.general.number}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-[#4B525D] text-center pt-4">
                    By submitting this form, you agree to receive communication from us regarding your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyContactUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">
            Why Contact Skyline Roofing?
          </h2>
          <p className="text-xl text-[#4B525D] max-w-2xl mx-auto">
            When you reach out to us, you&apos;re connecting with roofing professionals 
            who truly care about protecting your home.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {whyContactUs.map((reason, index) => (
            <Card key={index} className="hover-lift bg-white border-[#E5E7EB] text-center">
              <CardContent className="p-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#003366] to-[#4B525D] rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#003366]">{reason.title}</h3>
                <p className="text-[#4B525D] mb-6 leading-relaxed">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center text-sm text-[#4B525D]">
                      <CheckCircle className="h-4 w-4 text-[#E76F51] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-[#A8DADC]/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-[#003366]">Frequently Asked Questions</h2>
          <p className="text-lg text-[#4B525D]">
            Quick answers to common questions about our roofing services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border-[#E5E7EB]">
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-[#A8DADC]/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold pr-4 text-[#003366]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#4B525D] transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#4B525D] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#4B525D] mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8">
            <Phone className="mr-2 h-4 w-4" />
            Call Us: (555) 123-ROOF
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ContactMethodsSection />
      <ContactFormSection />
      <WhyContactUsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}