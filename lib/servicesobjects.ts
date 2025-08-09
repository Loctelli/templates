import { Wrench, Zap, Home } from "lucide-react"

export const services = [
  {
    category: "Plumbing Services",
    icon: Wrench,
    description: "Complete plumbing solutions from emergency repairs to full installations",
    features: ["24/7 Emergency Service", "Licensed Plumbers", "Upfront Pricing", "2-Year Warranty"],
    popular: ["Leak Repair", "Drain Cleaning", "Water Heater Service", "Pipe Installation"]
  },
  {
    category: "Electrical Services", 
    icon: Zap,
    description: "Safe, professional electrical work for homes and businesses",
    features: ["Licensed Electricians", "Code Compliance", "Safety Inspections", "Lifetime Warranty"],
    popular: ["Panel Upgrades", "Outlet Installation", "Lighting Repair", "Wiring Updates"]
  },
  {
    category: "HVAC Services",
    icon: Home,
    description: "Keep your home comfortable year-round with expert HVAC care",
    features: ["Certified Technicians", "Energy Efficiency", "Preventive Maintenance", "Emergency Repairs"],
    popular: ["AC Repair", "Heating Service", "Duct Cleaning", "System Installation"]
  }
]

export const serviceAreas = [
  "Downtown", "Westside", "Eastside", "Northgate", 
  "Southtown", "Riverside", "Hillcrest", "Garden District", 
  "Old Town", "New District", "Suburban", "Metro Area"
]

export const emergencyStats = [
  {
    value: "15 Min",
    label: "Average Response Time"
  },
  {
    value: "365 Days", 
    label: "Available Every Day"
  },
  {
    value: "No Extra",
    label: "Emergency Fees"
  }
]

export const guarantees = [
  {
    value: "Free",
    label: "Estimates & Consultations"
  },
  {
    value: "Same Day",
    label: "Service Available"
  },
  {
    value: "100%",
    label: "Satisfaction Guarantee"
  }
]