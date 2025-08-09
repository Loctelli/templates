import { Wrench, Zap, Home, Camera, Filter, Grid, Award } from "lucide-react"

export const galleryItems = [
  {
    id: "1",
    title: "Kitchen Plumbing Upgrade",
    description: "Complete kitchen sink and dishwasher installation with modern fixtures",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Electrical Panel Upgrade",
    description: "200-amp service panel installation with modern safety features",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
    featured: true
  },
  {
    id: "3",
    title: "Central Air Installation",
    description: "Complete HVAC system for efficient year-round comfort",
    category: "HVAC",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    featured: true
  },
  {
    id: "4",
    title: "Master Bathroom Remodel",
    description: "Full bathroom renovation with luxury fixtures and modern plumbing",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop&q=80",
    featured: false
  },
  {
    id: "5",
    title: "Smart Home Wiring",
    description: "Complete home automation electrical setup with smart switches",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&h=400&fit=crop&q=80",
    featured: false
  },
  {
    id: "6",
    title: "Tankless Water Heater",
    description: "Energy-efficient water heating solution with space-saving design",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1609132718484-cc19bef37dad?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1609132718484-cc19bef37dad?w=600&h=400&fit=crop&q=80",
    featured: false
  },
  {
    id: "7",
    title: "Outdoor Lighting System",
    description: "Professional landscape and security lighting installation",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1609329169776-d67ba00cb5a5?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1609329169776-d67ba00cb5a5?w=600&h=400&fit=crop&q=80",
    featured: false
  },
  {
    id: "8",
    title: "Duct Cleaning & Repair",
    description: "Comprehensive ductwork cleaning and efficiency improvements",
    category: "HVAC",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&q=80",
    featured: false
  },
  {
    id: "9",
    title: "Emergency Pipe Repair",
    description: "24/7 emergency plumbing response with permanent solutions",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?w=600&h=400&fit=crop&crop=entropy&auto=format",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?w=600&h=400&fit=crop&q=80",
    featured: false
  }
]

export const categories = [
  {
    name: "All Projects",
    value: "all",
    icon: Grid,
    count: galleryItems.length
  },
  {
    name: "Plumbing",
    value: "plumbing",
    icon: Wrench,
    count: galleryItems.filter(item => item.category === "Plumbing").length
  },
  {
    name: "Electrical", 
    value: "electrical",
    icon: Zap,
    count: galleryItems.filter(item => item.category === "Electrical").length
  },
  {
    name: "HVAC",
    value: "hvac",
    icon: Home,
    count: galleryItems.filter(item => item.category === "HVAC").length
  },
  {
    name: "Featured",
    value: "featured",
    icon: Award,
    count: galleryItems.filter(item => item.featured).length
  }
]

export const galleryStats = [
  {
    value: "200+",
    label: "Projects Completed"
  },
  {
    value: "15+",
    label: "Years Experience"
  },
  {
    value: "100%",
    label: "Customer Satisfaction"
  }
]

export const beforeAfterProjects = [
  {
    id: 1,
    category: 'plumbing',
    title: "Kitchen Sink Installation",
    location: "Residential Kitchen",
    duration: "4 hours",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    beforeDescription: "Leaking fixtures, poor water pressure",
    afterDescription: "Modern fixtures, improved flow",
    improvements: ["Fixed all leaks", "Upgraded water pressure", "Professional finish", "Code compliant"],
    featured: true
  },
  {
    id: 2,
    category: 'electrical',
    title: "Panel Upgrade & Safety",
    location: "Main Electrical Panel",
    duration: "6 hours",
    beforeImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    beforeDescription: "Outdated panel, safety hazards",
    afterDescription: "Modern panel, enhanced safety",
    improvements: ["Enhanced safety", "Increased capacity", "Code compliance", "Professional labeling"],
    featured: false
  },
  {
    id: 3,
    category: 'hvac',
    title: "AC System Replacement",
    location: "Residential HVAC",
    duration: "8 hours",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
    beforeDescription: "Inefficient system, high energy costs",
    afterDescription: "Energy-efficient system, smart controls",
    improvements: ["50% more efficient", "Smart thermostat", "Better air quality", "Warranty included"],
    featured: true
  },
  {
    id: 4,
    category: 'plumbing',
    title: "Bathroom Renovation",
    location: "Master Bathroom",
    duration: "12 hours",
    beforeImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    beforeDescription: "Dated fixtures, frequent clogs",
    afterDescription: "Modern fixtures, optimal flow",
    improvements: ["Modern fixtures", "Improved drainage", "Water efficiency", "Professional design"],
    featured: false
  },
  {
    id: 5,
    category: 'electrical',
    title: "Smart Home Integration",
    location: "Whole House",
    duration: "10 hours",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
    beforeDescription: "Basic electrical, no automation",
    afterDescription: "Smart home system, automated controls",
    improvements: ["Smart switches", "Automated lighting", "Energy monitoring", "Remote control"],
    featured: true
  },
  {
    id: 6,
    category: 'hvac',
    title: "Ductwork Optimization",
    location: "Basement & Attic",
    duration: "6 hours",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    beforeDescription: "Inefficient ductwork, air leaks",
    afterDescription: "Sealed ductwork, optimal distribution",
    improvements: ["Sealed air leaks", "Proper insulation", "Better airflow", "Energy savings"],
    featured: false
  }
]

export const transformationCategories = [
  { id: 'all', name: 'All Projects', icon: Grid },
  { id: 'plumbing', name: 'Plumbing', icon: Wrench },
  { id: 'electrical', name: 'Electrical', icon: Zap },
  { id: 'hvac', name: 'HVAC', icon: Home },
]