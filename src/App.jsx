import { useState, useEffect } from 'react';
import { Menu, X, Monitor, Shield, Zap, Users, Phone, Mail, MapPin, ChevronRight, Check, Star, TrendingUp, Award, Clock, ArrowRight, Headphones } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [activeService, setActiveService] = useState(0);
  const [stats, setStats] = useState({ clients: 0, projects: 0, satisfaction: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Animate stats on mount
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setStats(prev => ({
          clients: prev.clients < 500 ? prev.clients + 10 : 500,
          projects: prev.projects < 1200 ? prev.projects + 24 : 1200,
          satisfaction: prev.satisfaction < 99 ? prev.satisfaction + 2 : 99
        }));
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate active service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "End-User Support & Experience",
      description: "Fast and reliable repair services for all your devices. Hardware and software issues resolved.",
      features: ["Hardware Diagnostics", "Software Troubleshooting", "Data Recovery", "System Optimization"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions and threat prevention.",
      features: ["Firewall Setup", "Malware Protection", "Security Audits", "Employee Training"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Network Setup",
      description: "Professional network installation and configuration for homes and businesses.",
      features: ["WiFi Installation", "Network Security", "Server Setup", "Cable Management"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Expert advice to optimize your technology infrastructure and workflows.",
      features: ["Tech Strategy", "Cloud Migration", "Cost Optimization", "24/7 Support"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: 49,
      yearlyPrice: 490,
      description: "Perfect for individuals and small teams",
      features: [
        "Remote Support",
        "Email Support (24hr response)",
        "Basic Security Setup",
        "Monthly System Check",
        "1 Device Coverage"
      ],
      popular: false
    },
    {
      name: "Professional",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      description: "Ideal for growing businesses",
      features: [
        "Priority Support 24/7",
        "On-Site Support (2 visits/month)",
        "Advanced Security Suite",
        "Weekly System Monitoring",
        "Up to 10 Devices",
        "Cloud Backup Solutions",
        "Network Management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 399,
      yearlyPrice: 3990,
      description: "Complete IT solutions for large teams",
      features: [
        "Dedicated Account Manager",
        "Unlimited On-Site Support",
        "Enterprise Security",
        "Real-time Monitoring",
        "Unlimited Devices",
        "Disaster Recovery Plan",
        "Custom Integration",
        "Staff Training Programs"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc",
      rating: 5,
      text: "ANTMSP transformed our IT infrastructure. Response times are incredible and the team is always professional."
    },
    {
      name: "Mike Chen",
      company: "Retail Solutions",
      rating: 5,
      text: "Best decision we made was switching to ANTMSP. Our downtime has decreased by 90% and productivity is through the roof."
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      rating: 5,
      text: "Their cybersecurity solutions gave us peace of mind. Professional, knowledgeable, and always available."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/antmsp.jpg" 
                alt="ANTMSP Logo" 
                className="h-10 object-contain hover:scale-110 transition-transform"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-105 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-105 font-medium">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-105 font-medium">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-105 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-105 font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden hover:bg-gray-100 p-2 rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition">Services</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center py-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-600 font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  #1 Rated IT Support Service
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Your Trusted IT
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  Solutions Partner
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional tech support and IT services for businesses and individuals. 
                Fast, reliable, and affordable solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
                  Get Started Free
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#pricing" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 border-2 border-blue-600">
                  View Pricing
                </a>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div className="text-center transform hover:scale-110 transition-transform cursor-pointer">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stats.clients}+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform cursor-pointer">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stats.projects}+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform cursor-pointer">
                <div className="text-4xl font-bold text-green-600 mb-2">{stats.satisfaction}%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive IT solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:-translate-y-2 ${
                  activeService === index ? 'border-blue-500 scale-105 shadow-2xl' : 'border-gray-100'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`text-blue-600 mb-4 transform transition-all duration-300 ${
                  activeService === index ? 'scale-110 rotate-6' : ''
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 mb-8">Choose the perfect plan for your business</p>
            
            {/* Pricing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedPlan === 'monthly' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedPlan === 'yearly' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Yearly <span className="text-xs text-green-600 ml-1">(Save 17%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-purple-500 scale-105 md:scale-110' : 'hover:shadow-2xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${selectedPlan === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 font-medium">
                      /{selectedPlan === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {selectedPlan === 'yearly' && (
                    <p className="text-sm text-green-600 mt-2 font-semibold">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-gray-600 mb-4 text-lg">
                With over 10 years of experience in the IT industry, we provide top-notch technical 
                support and solutions to businesses and individuals across the region.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our team of certified professionals is dedicated to ensuring your technology works 
                seamlessly, so you can focus on what matters most to your business.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <ChevronRight className="w-6 h-6 mr-3 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <span className="text-lg">Fast response times and quick problem resolution</span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="w-6 h-6 mr-3 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <span className="text-lg">Certified and experienced technicians</span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="w-6 h-6 mr-3 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <span className="text-lg">Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="w-6 h-6 mr-3 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <span className="text-lg">Comprehensive warranty on all services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help. Reach out to us today!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Phone</h3>
                  <p className="text-gray-600">+1 866-363-9320</p>
                  <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email</h3>
                  <p className="text-gray-600">support@antmspus.com</p>
                  <p className="text-gray-600">info@antmspus.com</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Location</h3>
                  <p className="text-gray-600">1901 S. Calumet Avenue</p>
                  <p className="text-gray-600">No. 1406 Chicago, IL 60616-6010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/antmsp.jpg" 
                  alt="ANTMSP Logo" 
                //   className="h-16 object-contain"
                className="h-16 object-cover rounded-2xl border-2 border-blue-500"
                />
                {/* <span className="text-xl font-bold">ANTMSP</span> */}
              </div>
              <p className="text-gray-400">Your trusted IT solutions partner for business success.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">End-User Support & Experience</li>
                <li className="text-gray-400">Cybersecurity</li>
                <li className="text-gray-400">Network Setup</li>
                <li className="text-gray-400">IT Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">+1 866-363-9320</li>
                <li className="text-gray-400">info@antmspus.com</li>
                <li className="text-gray-400">Mon-Fri: 9AM - 6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2024 ANTMSP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;