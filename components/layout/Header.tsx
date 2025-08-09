import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Home as HomeIcon, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#4B525D] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <HomeIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-black text-[#003366] tracking-tight">
                Skyline Roofing
              </div>
              <div className="text-sm font-medium text-[#4B525D] -mt-1">
                Solutions
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-[#4B525D] hover:text-[#003366] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E76F51] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold"
            >
              <Phone className="mr-2 h-4 w-4" />
              (555) 123-ROOF
            </Button>
            <Button className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-semibold px-6">
              Emergency Service
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-[#003366]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-semibold text-[#4B525D] hover:text-[#003366] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" />
                (555) 123-ROOF
              </Button>
              <Button className="w-full bg-[#E76F51] hover:bg-[#E76F51]/90 text-white font-semibold">
                Emergency Service
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}