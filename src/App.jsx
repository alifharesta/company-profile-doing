import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Globe, 
  Smartphone, 
  Brain, 
  BarChart3, 
  Cpu, 
  Microscope,
  CheckCircle,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Menu,
  X,
  ChevronUp
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
      setShowScrollTop(scrollPosition > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Handle navigation clicks
  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, scalable web applications built with cutting-edge technologies",
      delay: "0ms"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile solutions for iOS and Android",
      delay: "100ms"
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Intelligent systems that learn and adapt to your business needs",
      delay: "200ms"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights and strategic decisions",
      delay: "300ms"
    },
    {
      icon: Cpu,
      title: "IoT Development",
      description: "Connected devices and smart systems for the Internet of Things",
      delay: "400ms"
    },
    {
      icon: Microscope,
      title: "Scientific Research",
      description: "Advanced research solutions and academic collaboration projects",
      delay: "500ms"
    }
  ]

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "End-to-End Solutions",
      description: "Complete project lifecycle from concept to deployment and maintenance",
      delay: "0ms"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled professionals with years of industry experience and expertise",
      delay: "100ms"
    },
    {
      icon: Zap,
      title: "Agile & Flexible",
      description: "Adaptive development process that responds quickly to changing requirements",
      delay: "200ms"
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Built with security-first approach and designed to grow with your business",
      delay: "300ms"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className={`bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-white/95' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => handleNavClick('hero')}>
                Doing-doing
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => handleNavClick('why-us')} className="text-gray-700 hover:text-blue-600 transition-colors">Why Us</button>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 btn-primary">
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-transform duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-100 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">About</button>
                <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Services</button>
                <button onClick={() => handleNavClick('why-us')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Why Us</button>
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 w-full btn-primary">
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-20 lg:py-32 hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Innovative IT Solutions for Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                Business Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Doing-doing helps businesses and organizations transform ideas into real digital solutions. 
              From Web & Mobile Apps, AI & Machine Learning, Data Analytics, IoT, to Scientific Research — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg btn-primary animate-pulse-glow">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg btn-primary">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              About <span className="text-blue-600">Doing-doing</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              We are Doing-doing, a software house and IT consultancy focused on building innovative technology solutions. 
              With an experienced team, we deliver scalable, secure, and impactful digital products for both businesses and academia.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 service-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Comprehensive technology solutions tailored to meet your unique business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group card-hover border-blue-100 hover:border-blue-200 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: service.delay }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Why Choose <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-lg transition-all duration-300 border-blue-100 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: item.delay }}
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <item.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            Ready to take your business to the next level?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            Let's build cutting-edge technology solutions together with Doing-doing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg btn-primary">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg btn-primary">
              Free Project Discussion
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Doing-doing
            </h3>
            <p className="text-gray-400 mb-6">
              Innovative IT Solutions for Your Business Growth
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Doing-doing. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-in fade-in-0 slide-in-from-bottom-4"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default App

