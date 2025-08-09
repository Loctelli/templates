# Professional Website Layouts & Wireframes

A comprehensive guide to professional website layouts with Next.js and Tailwind CSS implementation patterns.

---

## Table of Contents

1. [Header/Navigation Layouts](#headernavigation-layouts)
2. [Hero Section Layouts](#hero-section-layouts)
3. [Content Layouts](#content-layouts)
4. [Sidebar Layouts](#sidebar-layouts)
5. [Grid & Card Layouts](#grid--card-layouts)
6. [Footer Layouts](#footer-layouts)
7. [Full Page Layouts](#full-page-layouts)

---

## Header/Navigation Layouts

### 1. Standard Horizontal Navigation

**Use Case:** Most common website header pattern
**Best For:** Business websites, portfolios, marketing sites

```jsx
// components/layout/header.tsx
export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-bold">Brand</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-sm font-medium hover:text-primary">Home</a>
          <a href="/about" className="text-sm font-medium hover:text-primary">About</a>
          <a href="/services" className="text-sm font-medium hover:text-primary">Services</a>
          <a href="/contact" className="text-sm font-medium hover:text-primary">Contact</a>
        </nav>
        
        {/* CTA Button */}
        <Button className="hidden md:inline-flex">Get Started</Button>
        
        {/* Mobile Menu Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
```

### 2. Sidebar Navigation (Mobile-First)

**Use Case:** Apps, dashboards, complex navigation
**Best For:** Web applications, admin panels, SaaS products

```jsx
// components/layout/sidebar-nav.tsx
export function SidebarNav() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background hidden lg:block">
        <div className="p-6">
          <Logo />
        </div>
        <nav className="px-4 space-y-2">
          <a href="/dashboard" className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">
            <Home className="h-4 w-4" />
            Dashboard
          </a>
          <a href="/analytics" className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">
            <BarChart className="h-4 w-4" />
            Analytics
          </a>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
```

### 3. Sticky Header with Mega Menu

**Use Case:** Large sites with complex navigation
**Best For:** E-commerce, enterprise sites, content-heavy sites

```jsx
// components/layout/mega-menu-header.tsx
export function MegaMenuHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[800px] grid-cols-3">
                    <div className="space-y-2">
                      <h4 className="font-medium">Web Development</h4>
                      <p className="text-sm text-muted-foreground">Modern frameworks and tools</p>
                    </div>
                    {/* More mega menu items */}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
```

---

## Hero Section Layouts

### 1. Center-Aligned Hero

**Use Case:** Landing pages, product launches
**Best For:** SaaS products, startups, marketing campaigns

```jsx
// components/sections/center-hero.tsx
export function CenterHero() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Build Amazing Products <span className="text-primary">Faster</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The complete toolkit for modern web development. Ship faster with our 
            battle-tested components and design system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">Get Started Free</Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 2. Split Hero (Text + Image)

**Use Case:** Product showcases, feature highlights
**Best For:** Apps, tools, visual products

```jsx
// components/sections/split-hero.tsx
export function SplitHero() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4">
              <Sparkles className="mr-2 h-3 w-3" />
              New Feature Release
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Design Systems Made Simple
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Create consistent, accessible interfaces with our comprehensive 
              component library built on shadcn/ui and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Start Building</Button>
              <Button variant="ghost" size="lg">
                View Components <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <div className="w-full h-full bg-background rounded-lg shadow-2xl flex items-center justify-center">
                <Monitor className="h-24 w-24 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 3. Video Background Hero

**Use Case:** High-impact brand statements
**Best For:** Creative agencies, luxury brands, media companies

```jsx
// components/sections/video-hero.tsx
export function VideoHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          Create. Inspire. Transform.
        </h1>
        <p className="text-xl lg:text-2xl mb-8 opacity-90">
          We bring your boldest ideas to life through cutting-edge design and development.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8">
          Discover Our Work
        </Button>
      </div>
    </section>
  );
}
```

---

## Content Layouts

### 1. Single Column Content

**Use Case:** Blog posts, articles, documentation
**Best For:** Reading-focused content, long-form text

```jsx
// components/layouts/single-column.tsx
export function SingleColumnLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <article className="prose prose-lg dark:prose-invert">
          {children}
        </article>
      </div>
    </div>
  );
}
```

### 2. Two-Column Layout

**Use Case:** Content with sidebar, blog with widgets
**Best For:** Blogs, news sites, documentation with navigation

```jsx
// components/layouts/two-column.tsx
export function TwoColumnLayout({ children, sidebar }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-2">
          {children}
        </main>
        
        {/* Sidebar */}
        <aside className="space-y-6">
          {sidebar}
        </aside>
      </div>
    </div>
  );
}
```

### 3. Three-Column Layout

**Use Case:** Complex content organization
**Best For:** News sites, portals, information-heavy sites

```jsx
// components/layouts/three-column.tsx
export function ThreeColumnLayout({ leftSidebar, children, rightSidebar }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid xl:grid-cols-5 gap-6">
        {/* Left Sidebar */}
        <aside className="xl:col-span-1 hidden xl:block">
          {leftSidebar}
        </aside>
        
        {/* Main Content */}
        <main className="xl:col-span-3">
          {children}
        </main>
        
        {/* Right Sidebar */}
        <aside className="xl:col-span-1">
          {rightSidebar}
        </aside>
      </div>
    </div>
  );
}
```

---

## Sidebar Layouts

### 1. Collapsible Sidebar

**Use Case:** Admin panels, dashboards
**Best For:** Applications with complex navigation

```jsx
// components/layouts/collapsible-sidebar.tsx
export function CollapsibleSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="flex h-screen">
      <aside className={cn(
        "bg-background border-r transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}>
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && <Logo />}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        
        <nav className="px-2 space-y-1">
          <SidebarItem 
            icon={Home} 
            label="Dashboard" 
            collapsed={isCollapsed} 
          />
          <SidebarItem 
            icon={Users} 
            label="Users" 
            collapsed={isCollapsed} 
          />
        </nav>
      </aside>
      
      <main className="flex-1 overflow-auto p-6">
        {children}
      </main>
    </div>
  );
}
```

### 2. Mobile-Responsive Sidebar

**Use Case:** Multi-device applications
**Best For:** Progressive web apps, responsive dashboards

```jsx
// components/layouts/responsive-sidebar.tsx
export function ResponsiveSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-background border-r transform transition-transform lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <SidebarContent />
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="border-b bg-background p-4 lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </header>
          
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
```

---

## Grid & Card Layouts

### 1. Responsive Grid Layout

**Use Case:** Product listings, portfolio, team pages
**Best For:** E-commerce, galleries, showcases

```jsx
// components/layouts/responsive-grid.tsx
export function ResponsiveGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {children}
    </div>
  );
}

// Usage Example
export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <ResponsiveGrid>
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <Button>Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </div>
    </section>
  );
}
```

### 2. Masonry Layout

**Use Case:** Pinterest-style layouts, varied content heights
**Best For:** Galleries, content feeds, image collections

```jsx
// components/layouts/masonry.tsx
export function MasonryLayout({ children }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {children}
    </div>
  );
}

// Usage Example
export function ImageGallery() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <MasonryLayout>
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full rounded-lg shadow-lg"
                style={{ height: 'auto' }}
              />
            </div>
          ))}
        </MasonryLayout>
      </div>
    </section>
  );
}
```

### 3. Feature Grid Layout

**Use Case:** Service listings, feature highlights
**Best For:** Marketing sites, service pages, feature showcases

```jsx
// components/sections/feature-grid.tsx
export function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance"
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Built with security best practices"
    },
    // More features...
  ];
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern applications, all in one place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Footer Layouts

### 1. Multi-Column Footer

**Use Case:** Corporate sites, comprehensive link organization
**Best For:** Large websites, e-commerce, business sites

```jsx
// components/layout/multi-column-footer.tsx
export function MultiColumnFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-muted-foreground">
              Building the future of web development, one component at a time.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates and news.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
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
    </footer>
  );
}