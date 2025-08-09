import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  Home, 
  Settings, 
  Search, 
  Bell, 
  Mail, 
  Menu,
  Star,
  Heart,
  Play,
  ChevronRight,
  Monitor,
  Users,
  TrendingUp,
  Package
} from "lucide-react"

export default function LayoutExamples() {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Layout Examples</h1>
          <p className="text-lg text-muted-foreground">
            Live examples of professional website layouts implemented with Next.js and Tailwind CSS
          </p>
        </header>

        <div className="space-y-16">
          {/* Header Layouts */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Header & Navigation Layouts</h2>
            
            {/* Standard Header */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">1. Standard Horizontal Navigation</h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="border-b bg-background">
                      <div className="flex h-16 items-center justify-between px-6">
                        <div className="flex items-center space-x-2">
                          <Monitor className="h-6 w-6" />
                          <span className="text-xl font-bold">Brand</span>
                        </div>
                        
                        <nav className="hidden md:flex items-center space-x-8">
                          <a href="#" className="text-sm font-medium hover:text-primary">Home</a>
                          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">About</a>
                          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Services</a>
                          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</a>
                        </nav>
                        
                        <div className="flex items-center space-x-4">
                          <Button className="hidden md:inline-flex">Get Started</Button>
                          <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Navigation Preview */}
              <div>
                <h3 className="text-lg font-medium mb-4">2. Sidebar Navigation</h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="flex h-48">
                      <aside className="w-64 border-r bg-muted/30">
                        <div className="p-4">
                          <div className="flex items-center space-x-2">
                            <Monitor className="h-5 w-5" />
                            <span className="font-semibold">App</span>
                          </div>
                        </div>
                        <nav className="px-4 space-y-1">
                          <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium bg-accent">
                            <Home className="h-4 w-4" />
                            Home
                          </a>
                          <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent">
                            <Search className="h-4 w-4" />
                            Search
                          </a>
                          <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent">
                            <Bell className="h-4 w-4" />
                            Notifications
                          </a>
                          <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent">
                            <Settings className="h-4 w-4" />
                            Settings
                          </a>
                        </nav>
                      </aside>
                      
                      <main className="flex-1 p-6">
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold">Main Content Area</h2>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-16 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                              Content Block
                            </div>
                            <div className="h-16 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                              Content Block
                            </div>
                          </div>
                        </div>
                      </main>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator />

          {/* Hero Section Layouts */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Hero Section Layouts</h2>
            
            <div className="space-y-6">
              {/* Center Hero */}
              <div>
                <h3 className="text-lg font-medium mb-4">1. Center-Aligned Hero</h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="py-16 px-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                      <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                          Build Amazing Products <span className="text-primary">Faster</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                          The complete toolkit for modern web development. Ship faster with our battle-tested components.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button size="lg" className="px-8">Get Started Free</Button>
                          <Button variant="outline" size="lg" className="px-8">
                            <Play className="mr-2 h-4 w-4" />
                            Watch Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Split Hero */}
              <div>
                <h3 className="text-lg font-medium mb-4">2. Split Hero (Text + Visual)</h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4">
                            <Star className="mr-2 h-3 w-3" />
                            New Feature Release
                          </div>
                          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                            Design Systems Made Simple
                          </h1>
                          <p className="text-muted-foreground mb-6">
                            Create consistent, accessible interfaces with our comprehensive component library.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button>Start Building</Button>
                            <Button variant="ghost">
                              View Components <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                            <div className="w-full h-full bg-background rounded-lg shadow-lg flex items-center justify-center">
                              <Monitor className="h-16 w-16 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator />

          {/* Content Layouts */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Content Layouts</h2>
            
            <div className="space-y-6">
              {/* Two Column Layout */}
              <div>
                <h3 className="text-lg font-medium mb-4">1. Two-Column Layout</h3>
                <Card>
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="grid lg:grid-cols-3 gap-6">
                        <main className="lg:col-span-2 space-y-4">
                          <h2 className="text-xl font-semibold">Main Content Area</h2>
                          <div className="space-y-4">
                            <div className="h-24 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                              Article Content Block
                            </div>
                            <div className="h-16 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                              Paragraph Text
                            </div>
                            <div className="h-20 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                              Image or Media
                            </div>
                          </div>
                        </main>
                        
                        <aside className="space-y-4">
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Sidebar Widget</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="h-6 bg-muted rounded"></div>
                              <div className="h-6 bg-muted rounded"></div>
                              <div className="h-6 bg-muted rounded w-3/4"></div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Recent Items</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="h-4 bg-muted rounded"></div>
                              <div className="h-4 bg-muted rounded"></div>
                              <div className="h-4 bg-muted rounded w-2/3"></div>
                            </CardContent>
                          </Card>
                        </aside>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator />

          {/* Grid Layouts */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Grid & Card Layouts</h2>
            
            <div className="space-y-6">
              {/* Responsive Grid */}
              <div>
                <h3 className="text-lg font-medium mb-4">1. Responsive Grid Layout</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <Card key={i} className="overflow-hidden group cursor-pointer">
                          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                            <Package className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">Item {i + 1}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Description and key features go here for this item.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="font-bold">Feature</span>
                              <Button size="sm">View Details</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Feature Cards */}
              <div>
                <h3 className="text-lg font-medium mb-4">2. Feature Highlight Grid</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { icon: TrendingUp, title: "Analytics", desc: "Track your performance" },
                        { icon: Users, title: "Team Management", desc: "Collaborate effectively" },
                        { icon: Settings, title: "Customization", desc: "Make it your own" }
                      ].map((feature, i) => (
                        <Card key={i} className="text-center p-6">
                          <CardContent className="pt-6">
                            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                              <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm">{feature.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator />

          {/* Footer Layouts */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Footer Layouts</h2>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Multi-Column Footer</h3>
              <Card>
                <CardContent className="p-0">
                  <div className="bg-muted/30 border-t">
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <Monitor className="h-5 w-5" />
                            <span className="font-bold">Brand</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Building the future of web development, one component at a time.
                          </p>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Product Links */}
                        <div>
                          <h3 className="font-semibold mb-4">Product</h3>
                          <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                          </ul>
                        </div>
                        
                        {/* Company Links */}
                        <div>
                          <h3 className="font-semibold mb-4">Company</h3>
                          <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                          </ul>
                        </div>
                        
                        {/* Newsletter */}
                        <div>
                          <h3 className="font-semibold mb-4">Stay Updated</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Get the latest updates and news.
                          </p>
                          <div className="flex space-x-2">
                            <Input placeholder="Enter your email" className="h-9" />
                            <Button size="sm">Subscribe</Button>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-8" />
                      
                      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-muted-foreground">
                          © 2024 Your Company. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                          <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
                          <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
                          <a href="#" className="text-muted-foreground hover:text-foreground">Cookies</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}