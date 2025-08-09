'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { HomeServicesHomepage } from "./home"
import { HomeServicesAboutPage } from "./about"
import { HomeServicesContactPage } from "./contact"
import { HomeServicesGalleryPage } from "./gallery"
import { HomeServicesPage } from "./services"

const layoutExamples = [
  {
    id: "home-services",
    title: "Home Services Homepage",
    description: "Professional service business homepage with trust badges, service cards, and emergency CTA",
    tags: ["Local Business", "Service Provider", "Trust-focused"],
    component: HomeServicesHomepage
  },
  {
    id: "home-services-about",
    title: "About Page",
    description: "Company story, values, and team showcase with professional credibility focus",
    tags: ["About Us", "Company Story", "Trust Building"],
    component: HomeServicesAboutPage
  },
  {
    id: "home-services-services",
    title: "Services Page", 
    description: "Detailed service offerings with pricing, categories, and emergency options",
    tags: ["Service Catalog", "Pricing", "Emergency Services"],
    component: HomeServicesPage
  },
  {
    id: "home-services-gallery",
    title: "Gallery Page",
    description: "Work showcase with before/after comparisons and project categories",
    tags: ["Portfolio", "Before/After", "Work Examples"],
    component: HomeServicesGalleryPage
  },
  {
    id: "home-services-contact",
    title: "Contact Page",
    description: "Contact information, service areas, and contact form for customer inquiries",
    tags: ["Contact Form", "Service Areas", "Customer Support"],
    component: HomeServicesContactPage
  }
]

export default function PageLayoutExamples() {
  const [activeLayout, setActiveLayout] = useState<string | null>(null)

  if (activeLayout) {
    const example = layoutExamples.find(layout => layout.id === activeLayout)
    if (example) {
      const Component = example.component
      return (
        <div className="min-h-screen">
          <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setActiveLayout(null)}
                    className="text-sm"
                  >
                    ← Back to Examples
                  </Button>
                  <div>
                    <h2 className="font-semibold">{example.title} Layout</h2>
                    <p className="text-sm text-muted-foreground">Live preview</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {example.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Component />
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Page Layout Examples</h1>
          <p className="text-lg text-muted-foreground">
            Complete page layout examples for different business types and use cases
          </p>
        </header>

        <div className="space-y-8">
          {/* Layout Gallery */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Available Layouts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {layoutExamples.map((example) => (
                <Card key={example.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    {/* Preview Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 border-b flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <div className="w-6 h-6 bg-primary/20 rounded"></div>
                        </div>
                        <p className="text-sm text-muted-foreground">Live Preview</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold">{example.title}</h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {example.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {example.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full" 
                        onClick={() => setActiveLayout(example.id)}
                      >
                        View Layout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Coming Soon */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">More Layouts Coming Soon</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Professional Services", desc: "Law firms, consulting, medical practices" },
                { title: "Personal Portfolio", desc: "Creative professionals, freelancers, artists" },
                { title: "E-commerce Product", desc: "Online stores, product showcases, catalogs" }
              ].map((upcoming, i) => (
                <Card key={i} className="opacity-60">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted/50 rounded mb-4 flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                    <h3 className="font-semibold mb-2">{upcoming.title}</h3>
                    <p className="text-sm text-muted-foreground">{upcoming.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}