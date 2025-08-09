"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  X
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { galleryItems, categories, galleryStats, beforeAfterProjects, transformationCategories } from "@/lib/galleryobjects"

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

function HeroSection() {
  return (
    <section 
      className="relative h-64 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/image.png)`
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Track Record</h2>
          <p className="text-lg text-muted-foreground">
            Numbers that reflect our commitment to excellence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {galleryStats.map((stat, index) => (
            <div key={index}>
              <CountUpNumber end={stat.value} />
              <p className="text-muted-foreground">{stat.label}</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Project Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
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
                  className="flex items-center gap-2"
                  onClick={() => setActiveFilter(category.value)}
                >
                  <IconComponent className="h-4 w-4" />
                  {category.name}
                  <span className="ml-1 text-xs bg-muted px-2 py-0.5 rounded-full">
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
              const heightVariations = [400, 600, 450, 750, 380, 680, 500, 850, 520, 620, 350, 720, 430, 800, 550, 650, 470, 780, 580, 640, 400, 700, 480, 820, 420, 760, 540, 680];
              
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
          <Button size="lg" className="px-8">
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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Before & After</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Drag the slider to see the difference professional service makes.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {transformationCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="flex items-center gap-2"
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
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                className="w-full"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}



export function HomeServicesGalleryPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GalleryFilterSection />
      <StatsSection />
      <BeforeAfterSection />
    </div>
  );
}