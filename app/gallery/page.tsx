"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PhotoModal } from "@/components/ui/photo-modal"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
import Masonry from "@/components/Masonry/Masonry"
import { 
  Phone,
  Camera,
  Shield,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  Calendar,
  Heart,
  Filter,
  Grid,
  X,
  Home as HomeIcon,
  Wrench,
  Zap
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

const galleryItems = [
  {
    id: "1",
    title: "Modern Shingle Replacement",
    description: "Complete roof replacement with architectural shingles",
    category: "Replacement",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: true
  },
  {
    id: "2",
    title: "Storm Damage Repair",
    description: "Emergency repair after severe weather damage",
    category: "Repair",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: true
  },
  {
    id: "3",
    title: "Commercial Flat Roof",
    description: "Commercial building roof installation",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: true
  },
  {
    id: "4",
    title: "Gutter Installation",
    description: "Seamless gutter system with leaf guards",
    category: "Gutters",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: false
  },
  {
    id: "5",
    title: "Metal Roof Installation",
    description: "Durable metal roofing for long-term protection",
    category: "Replacement",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: false
  },
  {
    id: "6",
    title: "Leak Repair Service",
    description: "Professional leak detection and repair",
    category: "Repair",
    image: "https://images.unsplash.com/photo-1609132718484-cc19bef37dad?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: false
  },
  {
    id: "7",
    title: "Skylight Installation",
    description: "Custom skylight installation with waterproofing",
    category: "Installation",
    image: "https://images.unsplash.com/photo-1609329169776-d67ba00cb5a5?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: false
  },
  {
    id: "8",
    title: "Chimney Repair",
    description: "Chimney flashing and waterproofing repair",
    category: "Repair",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: false
  },
  {
    id: "9",
    title: "New Construction Roof",
    description: "Complete roofing system for new home",
    category: "New Construction",
    image: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?w=600&h=400&fit=crop&crop=entropy&auto=format",
    featured: false
  }
]

const categories = [
  {
    name: "All Projects",
    value: "all",
    icon: Grid,
    count: galleryItems.length
  },
  {
    name: "Replacement",
    value: "replacement",
    icon: HomeIcon,
    count: galleryItems.filter(item => item.category === "Replacement").length
  },
  {
    name: "Repair", 
    value: "repair",
    icon: Wrench,
    count: galleryItems.filter(item => item.category === "Repair").length
  },
  {
    name: "Commercial",
    value: "commercial",
    icon: Zap,
    count: galleryItems.filter(item => item.category === "Commercial").length
  },
  {
    name: "Featured",
    value: "featured",
    icon: Award,
    count: galleryItems.filter(item => item.featured).length
  }
]

const galleryStats = [
  {
    value: "500+",
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

const beforeAfterProjects = [
  {
    id: 1,
    category: 'replacement',
    title: "Complete Roof Transformation",
    location: "Suburban Home",
    duration: "3 days",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 2,
    category: 'repair',
    title: "Storm Damage Restoration",
    location: "Urban Property",
    duration: "2 days",
    beforeImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 3,
    category: 'commercial',
    title: "Commercial Roof Upgrade",
    location: "Office Building",
    duration: "5 days",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 4,
    category: 'replacement',
    title: "Metal Roof Installation",
    location: "Country Home",
    duration: "4 days",
    beforeImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80"
  }
]

const transformationCategories = [
  { id: 'all', name: 'All Projects', icon: Grid },
  { id: 'replacement', name: 'Replacement', icon: HomeIcon },
  { id: 'repair', name: 'Repair', icon: Wrench },
  { id: 'commercial', name: 'Commercial', icon: Zap },
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
            <Camera className="mr-2 h-4 w-4 text-[#A8DADC]" />
            Our Work Speaks for Itself
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Project <span className="text-[#A8DADC]">Gallery</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed roofing projects. From emergency repairs 
            to complete replacements, see the quality craftsmanship that protects homes across the metro area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#003366] backdrop-blur font-bold px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Free Estimate
            </Button>
          </div>
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
            Our Track Record
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and customer satisfaction
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {galleryStats.map((stat, index) => (
            <div key={index}>
              <CountUpNumber end={stat.value} />
              <p className="text-white/90 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryFilterSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return item.featured
    return item.category.toLowerCase() === activeFilter
  })

  const handleImageClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">Our Project Gallery</h2>
          <p className="text-xl text-[#4B525D] max-w-2xl mx-auto mb-8 leading-relaxed">
            Browse through our completed projects organized by service type. Click any image to see more details.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.value}
                  variant={activeFilter === category.value ? "default" : "outline"}
                  className={`flex items-center gap-2 ${
                    activeFilter === category.value 
                      ? "bg-[#003366] text-white hover:bg-[#003366]/90" 
                      : "border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                  }`}
                  onClick={() => setActiveFilter(category.value)}
                >
                  <IconComponent className="h-4 w-4" />
                  {category.name}
                  <span className="ml-1 text-xs bg-[#E76F51] text-white px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </Button>
              )
            })}
          </div>
        </div>
        
        {/* Gallery Masonry */}
        <div className="h-[800px]">
          <Masonry
            items={filteredItems.map((item, index) => {
              const heightVariations = [400, 600, 450, 750, 380, 680, 500, 850, 520];
              
              return {
                id: item.id.toString(),
                img: item.image,
                url: item.image,
                height: heightVariations[index % heightVariations.length] || 400,
                title: item.title,
                description: item.description,
                category: item.category,
                featured: item.featured
              };
            })}
            ease="power3.out"
            duration={0.9}
            stagger={0.1}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
            onImageClick={(item) => {
                const galleryItem = filteredItems.find(gi => gi.id === item.id)
                if (galleryItem) {
                  handleImageClick(galleryItem)
                }
              }}
          />
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-bold px-8">
            <Phone className="mr-2 h-4 w-4" />
            See Your Project Come to Life
          </Button>
        </div>
      </div>

      {selectedImage && (
        <PhotoModal
          isOpen={true}
          onClose={closeModal}
          imageSrc={selectedImage.image}
          title={selectedImage.title}
          description={selectedImage.description}
        />
      )}
    </section>
  )
}

function BeforeAfterSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredProjects = selectedCategory === 'all' 
    ? beforeAfterProjects 
    : beforeAfterProjects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-24 bg-gradient-to-br from-[#A8DADC]/10 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E76F51]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003366]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#003366]">Before & After</h2>
          <p className="text-xl text-[#4B525D] max-w-2xl mx-auto mb-8 leading-relaxed">
            Drag the slider to see the difference professional roofing makes.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {transformationCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? "bg-[#003366] text-white hover:bg-[#003366]/90" 
                      : "border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent className="h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>
        
        {/* Before/After Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="space-y-4">
              {/* Project Title - Outside Card */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#003366]">{project.title}</h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#4B525D]">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {project.duration}
                  </span>
                  <span>📍 {project.location}</span>
                </div>
              </div>

              {/* Interactive Slider - Image Only */}
              <BeforeAfterSlider
                title=""
                description=""
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeLabel="Before"
                afterLabel="After"
                imageOnly={true}
                className="w-full hover-lift"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <GalleryFilterSection />
      <StatsSection />
      <BeforeAfterSection />
      <Footer />
    </div>
  );
}