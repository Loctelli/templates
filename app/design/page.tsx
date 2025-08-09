import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { 
  Home, 
  User, 
  Settings, 
  Search, 
  Bell, 
  Mail, 
  Heart, 
  Star, 
  Download, 
  Edit, 
  Trash2, 
  Plus, 
  X, 
  Check, 
  AlertCircle, 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  ChevronUp, 
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Copy,
  Share,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Zap,
  Shield,
  Lock,
  Eye,
  EyeOff
} from "lucide-react"

export default function DesignLibrary() {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">shadcn/ui Design Library</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive showcase of shadcn/ui components - accessible, customizable, and copy-paste ready
          </p>
          <div className="mt-4">
            <Badge variant="secondary">Radix UI</Badge>
            <Badge variant="secondary" className="ml-2">Tailwind CSS</Badge>
            <Badge variant="secondary" className="ml-2">TypeScript</Badge>
          </div>
        </header>

        <div className="space-y-12">
          {/* About shadcn/ui */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">About shadcn/ui</h2>
            <Card>
              <CardHeader>
                <CardTitle>What is shadcn/ui?</CardTitle>
                <CardDescription>
                  Not a pre-packaged component library. It&apos;s a collection of reusable components you copy into your codebase—giving you full ownership.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Core Building Blocks:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Radix UI primitives</strong> → accessible, headless behavior</li>
                    <li>• <strong>Tailwind CSS</strong> → utility-first styling</li>
                    <li>• <strong>TypeScript</strong> → type safety and developer experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Principles:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Open Code:</strong> You own the code—no black boxes</li>
                    <li>• <strong>Composition:</strong> Shared, predictable API across components</li>
                    <li>• <strong>Beautiful Defaults:</strong> Smart, consistent out-of-the-box styles</li>
                    <li>• <strong>AI-Ready:</strong> Designed for LLMs to read, understand, and extend</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Typography Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Typography</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Heading 1</h1>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Heading 2</h2>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Heading 3</h3>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Heading 4</h4>
              </div>
              <div className="space-y-2">
                <p className="leading-7">Regular paragraph text with proper leading and spacing for optimal readability.</p>
                <p className="text-sm text-muted-foreground">Small text often used for captions or secondary information.</p>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  Inline code snippet
                </code>
              </div>
            </div>
          </section>

          <Separator />

          {/* Buttons Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">⚙</Button>
            </div>
          </section>

          <Separator />

          {/* Badges Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Badges</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </section>

          <Separator />

          {/* Cards Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Cards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description with some sample content to demonstrate the layout.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Action</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Another Card</CardTitle>
                  <CardDescription>This card shows different content and actions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Feature</Badge>
                  <p className="text-sm text-muted-foreground">Additional card content with badges and text.</p>
                  <Button variant="outline" size="sm">Secondary Action</Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Forms Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Form Elements</h2>
            <Card>
              <CardHeader>
                <CardTitle>Form Components</CardTitle>
                <CardDescription>shadcn/ui form elements with proper styling and accessibility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Text Input
                  </label>
                  <Input placeholder="Enter text here" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Select
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Textarea
                  </label>
                  <Textarea placeholder="Enter longer text here" />
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Icons Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Icons</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lucide React Icons</CardTitle>
                  <CardDescription>
                    Beautiful, customizable icons designed for modern web applications. Over 1,000+ icons available.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-1">
                          <Home className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <User className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">User</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Settings className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Settings</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Search className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Search</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Bell className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Bell</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Mail className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Mail</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Actions</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-1">
                          <Plus className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Plus</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Edit className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Edit</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Trash2 className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Delete</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Copy className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Copy</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Share className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Share</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Download className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Download</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Status</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-1">
                          <Check className="h-5 w-5 text-green-600" />
                          <span className="text-xs text-muted-foreground">Success</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-5 w-5 text-red-600" />
                          <span className="text-xs text-muted-foreground">Error</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <AlertTriangle className="h-5 w-5 text-amber-600" />
                          <span className="text-xs text-muted-foreground">Warning</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Info className="h-5 w-5 text-blue-600" />
                          <span className="text-xs text-muted-foreground">Info</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-xs text-muted-foreground">Complete</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <AlertCircle className="h-5 w-5 text-red-600" />
                          <span className="text-xs text-muted-foreground">Alert</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Arrows</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-1">
                          <ArrowRight className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Right</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <ArrowLeft className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Left</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <ChevronRight className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Next</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <ChevronLeft className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Previous</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <ChevronUp className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Up</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <ChevronDown className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">Down</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Icon Sizes & Usage</CardTitle>
                  <CardDescription>Different icon sizes for various use cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Icon Sizes</h4>
                      <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                          <Star className="h-3 w-3" />
                          <span className="text-xs text-muted-foreground">12px (h-3 w-3)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <Star className="h-4 w-4" />
                          <span className="text-xs text-muted-foreground">16px (h-4 w-4)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <Star className="h-5 w-5" />
                          <span className="text-xs text-muted-foreground">20px (h-5 w-5)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <Star className="h-6 w-6" />
                          <span className="text-xs text-muted-foreground">24px (h-6 w-6)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <Star className="h-8 w-8" />
                          <span className="text-xs text-muted-foreground">32px (h-8 w-8)</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">Icons in Components</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline">
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Badge variant="secondary">
                          <Zap className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">Icon Colors</h4>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Success (green)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-600" />
                          <span className="text-sm">Warning (amber)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <X className="h-5 w-5 text-red-600" />
                          <span className="text-sm">Error (red)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Info className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">Info (blue)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Lock className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">Muted</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>More Icon Categories</CardTitle>
                  <CardDescription>Additional icons organized by common use cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Communication</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">Email</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">Phone</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Bell className="h-4 w-4" />
                          <span className="text-sm">Notifications</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Time & Location</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">Calendar</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">Time</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">Location</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Security</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Lock className="h-4 w-4" />
                          <span className="text-sm">Locked</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">Visible</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <EyeOff className="h-4 w-4" />
                          <span className="text-sm">Hidden</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Color Theory Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Color Theory & Design System</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Color Psychology in UI Design</CardTitle>
                  <CardDescription>Understanding how colors affect user perception and behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600">Primary Colors - Trust & Action</h4>
                      <p className="text-sm text-muted-foreground">Blue conveys trust, reliability, and professionalism. Ideal for primary actions and brand elements.</p>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded border"></div>
                        <div className="w-8 h-8 bg-blue-600 rounded border"></div>
                        <div className="w-8 h-8 bg-blue-700 rounded border"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600">Destructive Colors - Caution & Error</h4>
                      <p className="text-sm text-muted-foreground">Red signals danger, urgency, and error states. Use sparingly for warnings and destructive actions.</p>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-red-500 rounded border"></div>
                        <div className="w-8 h-8 bg-red-600 rounded border"></div>
                        <div className="w-8 h-8 bg-red-700 rounded border"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600">Success Colors - Growth & Confirmation</h4>
                      <p className="text-sm text-muted-foreground">Green represents success, growth, and positive actions. Perfect for confirmations and success states.</p>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-green-500 rounded border"></div>
                        <div className="w-8 h-8 bg-green-600 rounded border"></div>
                        <div className="w-8 h-8 bg-green-700 rounded border"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-amber-600">Warning Colors - Attention & Caution</h4>
                      <p className="text-sm text-muted-foreground">Yellow/amber draws attention and signals caution. Use for warnings and important information.</p>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-amber-500 rounded border"></div>
                        <div className="w-8 h-8 bg-amber-600 rounded border"></div>
                        <div className="w-8 h-8 bg-amber-700 rounded border"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui Semantic Color System</CardTitle>
                  <CardDescription>CSS variables that adapt to light and dark themes automatically</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold mb-3">Foundation Colors</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-background border-2 rounded flex items-center justify-center">
                            <div className="w-6 h-6 bg-foreground rounded"></div>
                          </div>
                          <div>
                            <code className="text-sm font-mono">background</code>
                            <p className="text-xs text-muted-foreground">Main surface color</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-foreground rounded flex items-center justify-center">
                            <div className="w-6 h-6 bg-background rounded"></div>
                          </div>
                          <div>
                            <code className="text-sm font-mono">foreground</code>
                            <p className="text-xs text-muted-foreground">Primary text color</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted rounded"></div>
                          <div>
                            <code className="text-sm font-mono">muted</code>
                            <p className="text-xs text-muted-foreground">Subtle background</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-accent rounded"></div>
                          <div>
                            <code className="text-sm font-mono">accent</code>
                            <p className="text-xs text-muted-foreground">Highlight color</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold mb-3">Semantic Colors</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary rounded"></div>
                          <div>
                            <code className="text-sm font-mono">primary</code>
                            <p className="text-xs text-muted-foreground">Main brand color</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-secondary rounded"></div>
                          <div>
                            <code className="text-sm font-mono">secondary</code>
                            <p className="text-xs text-muted-foreground">Secondary actions</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-destructive rounded"></div>
                          <div>
                            <code className="text-sm font-mono">destructive</code>
                            <p className="text-xs text-muted-foreground">Danger/error state</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-border rounded border-2 border-foreground"></div>
                          <div>
                            <code className="text-sm font-mono">border</code>
                            <p className="text-xs text-muted-foreground">Element borders</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contrast & Accessibility</CardTitle>
                  <CardDescription>WCAG guidelines for readable and accessible color combinations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-green-700 border-green-700">AA</Badge>
                      </div>
                      <p className="text-sm font-semibold">4.5:1 Ratio</p>
                      <p className="text-xs text-muted-foreground">Normal text minimum</p>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-blue-700 border-blue-700">AA Large</Badge>
                      </div>
                      <p className="text-sm font-semibold">3:1 Ratio</p>
                      <p className="text-xs text-muted-foreground">Large text (18px+)</p>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-purple-700 border-purple-700">AAA</Badge>
                      </div>
                      <p className="text-sm font-semibold">7:1 Ratio</p>
                      <p className="text-xs text-muted-foreground">Enhanced contrast</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h5 className="font-semibold mb-2">Color Accessibility Best Practices</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Don&apos;t rely solely on color to convey information</li>
                      <li>• Ensure sufficient contrast between text and background</li>
                      <li>• Test with colorblind simulation tools</li>
                      <li>• Use semantic HTML and ARIA labels</li>
                      <li>• Provide alternative text for color-coded content</li>
                    </ul>
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