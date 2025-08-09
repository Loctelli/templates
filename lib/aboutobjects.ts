import { 
  Wrench, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  CheckCircle, 
  Zap, 
  Heart 
} from "lucide-react"

export const timelineData = [
  {
    year: "1998",
    title: "Founded by Mike Johnson",
    description:
      "Started as a one-person operation with a vision to provide reliable plumbing services to local families in our community.",
    stat: "1",
    statLabel: "Founder",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2005",
    title: "First Major Expansion",
    description:
      "Grew our team to 5 skilled technicians and expanded our service area county-wide to reach more families in need.",
    stat: "5",
    statLabel: "Team Members",
    icon: Users,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2012",
    title: "Industry Recognition",
    description:
      "Achieved BBB A+ rating and received the local business excellence award for outstanding customer service and quality work.",
    stat: "A+",
    statLabel: "BBB Rating",
    icon: Award,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2018",
    title: "Technology Integration",
    description:
      "Launched 24/7 emergency service with modern dispatching system to better serve our customers when they need us most.",
    stat: "24/7",
    statLabel: "Emergency Service",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2024",
    title: "Community Leaders",
    description:
      "Now proudly serving over 8,500 families with our team of 25+ certified professionals, continuing our commitment to excellence.",
    stat: "8500+",
    statLabel: "Families Served",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
]

export const promises = [
  {
    icon: Shield,
    title: "Honest Pricing",
    description: "No hidden fees, no surprise charges. You'll know exactly what you're paying before we start any work.",
    commitment: "100% Transparent"
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Your time is valuable. We arrive when we say we will, every single time.",
    commitment: "Punctuality Promise"
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "If you're not completely satisfied with our work, we'll make it right - no questions asked.",
    commitment: "Satisfaction Assured"
  }
]