import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Headphones, Shield, Zap } from "lucide-react"

export const contactInfo = {
  emergency: {
    number: "(555) 911-HELP",
    display: "Emergency Hotline",
    available: "24/7 Emergency Response"
  },
  general: {
    number: "(555) 123-4567", 
    display: "Main Office",
    available: "Mon-Fri 7AM-7PM, Sat 8AM-5PM"
  },
  email: {
    primary: "info@homeservicespro.com",
    emergency: "emergency@homeservicespro.com",
    quotes: "quotes@homeservicespro.com"
  },
  address: {
    street: "789 Professional Drive",
    city: "Metro Area",
    state: "ST",
    zip: "12345",
    full: "789 Professional Drive, Metro Area, ST 12345"
  }
}

export const contactMethods = [
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

export const serviceAreas = [
  "Downtown", "Westside", "Eastside", "Northgate", 
  "Southtown", "Riverside", "Hillcrest", "Garden District", 
  "Old Town", "New District", "Suburban", "Metro Area",
  "Northbrook", "Southfield", "Eastlake", "Westridge"
]

export const responseStats = [
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
    value: "2000",
    suffix: "+",
    label: "Calls Handled Monthly"
  }
]

export const whyContactUs = [
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our knowledgeable team provides professional guidance for all your home service needs.",
    features: ["Certified technicians", "20+ years experience", "Comprehensive solutions"]
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

export const operatingHours = {
  weekdays: {
    label: "Monday - Friday",
    hours: "7:00 AM - 7:00 PM",
    note: "Regular service hours"
  },
  saturday: {
    label: "Saturday", 
    hours: "8:00 AM - 5:00 PM",
    note: "Weekend service available"
  },
  sunday: {
    label: "Sunday",
    hours: "Emergency Only",
    note: "Emergency calls only"
  },
  emergency: {
    label: "Emergency Service",
    hours: "24/7 - 365 Days",
    note: "Always available for emergencies"
  }
}

export const contactFormFields = [
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
      { value: "plumbing", label: "Plumbing" },
      { value: "electrical", label: "Electrical" },
      { value: "hvac", label: "HVAC" },
      { value: "general", label: "General Repair" },
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
    placeholder: "Please describe your project, including any specific requirements or issues you're experiencing...",
    required: false,
    icon: "message",
    rows: 5
  }
]

export const faqs = [
  {
    question: "How quickly can you respond to emergency calls?",
    answer: "Our emergency response team typically arrives within 15-30 minutes for urgent plumbing, electrical, and HVAC issues. We're available 24/7, 365 days a year."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free estimates for all non-emergency services. Our technicians will assess your needs and provide transparent, upfront pricing with no hidden fees."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. All our technicians are fully licensed, bonded, and insured. We maintain comprehensive liability insurance and worker's compensation coverage for your peace of mind."
  },
  {
    question: "What areas do you service?",
    answer: "We proudly serve the entire metro area and surrounding communities. If you're unsure whether we service your area, give us a call and we'll let you know."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind all our work with comprehensive warranties. Labor warranties range from 1-2 years depending on the service, and we honor all manufacturer warranties on parts and equipment."
  }
]