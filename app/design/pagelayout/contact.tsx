"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  ChevronDown
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { contactInfo, contactMethods, serviceAreas, responseStats, whyContactUs, operatingHours, contactFormFields, faqs } from "@/lib/contactobjects"

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
      
      // Handle string values like "200+" by extracting numbers
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
    <div ref={ref} className="text-4xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed response.
            </p>
          </div>
          
          <div className="relative bg-white rounded shadow-sm overflow-hidden min-h-[600px]">
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
                    <p className="text-gray-600 mb-8">Ready to start your project? Contact us today!</p>
                  </div>
                  
                  {/* Full Name and Phone Number in same row */}
                  <div className="grid grid-cols-2 gap-4">
                    {contactFormFields.slice(0, 2).map((field, index) => {
                      const IconComponent = getIconComponent(field.icon)
                      return (
                        <div key={index} className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            {field.label}
                          </label>
                          <Input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
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
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            {field.label}
                          </label>
                          <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
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
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            {field.label}
                          </label>
                          <Textarea
                            placeholder={field.placeholder}
                            rows={field.rows}
                            className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      )
                    }
                    
                    return (
                      <div key={index + 2} className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          {field.label}
                        </label>
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    )
                  })}
                  
                  <div className="space-y-3 pt-4">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button size="lg" variant="outline" className="w-full border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Instead: {contactInfo.general.number}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center pt-4">
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



function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


export function HomeServicesContactPage() {
  return (
    <div className="min-h-screen">
      <ContactFormSection />
      <FAQSection />
    </div>
  );
}