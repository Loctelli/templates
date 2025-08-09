import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Home as HomeIcon
} from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#E76F51] rounded-lg flex items-center justify-center">
                <HomeIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">
                  Skyline Roofing
                </div>
                <div className="text-sm font-medium text-white/80 -mt-1">
                  Solutions
                </div>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Protect your home with roofing solutions built to last — expert craftsmanship, 
              transparent service, and peace of mind.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Roof Repair</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Roof Replacement</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">New Construction</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Storm Damage</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Gutter Services</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Emergency Repairs</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#E76F51] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">(555) 123-ROOF</div>
                  <div className="text-sm text-white/80">24/7 Emergency Service</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#E76F51] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">info@skylineroofing.com</div>
                  <div className="text-sm text-white/80">Free Estimates</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#E76F51] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Metro Area & Suburbs</div>
                  <div className="text-sm text-white/80">Licensed & Insured</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#E76F51] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Mon-Fri: 7AM-7PM</div>
                  <div className="text-sm text-white/80">Sat: 8AM-5PM</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Stay Protected</h3>
            <p className="text-white/80 mb-4 text-sm">
              Get seasonal maintenance tips and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#E76F51]" 
              />
              <Button className="w-full bg-[#E76F51] hover:bg-[#E76F51]/90 font-semibold">
                Subscribe
              </Button>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-[#A8DADC]" />
                <span className="text-white/80">Licensed & Bonded</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-[#A8DADC]" />
                <span className="text-white/80">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-white/80">
            © 2024 Skyline Roofing Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/warranty" className="text-white/80 hover:text-white transition-colors">Warranty</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}