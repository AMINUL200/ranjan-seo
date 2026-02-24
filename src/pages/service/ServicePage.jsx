import React, { useState } from 'react';
import {
  Search,
  BarChart3,
  Globe,
  TrendingUp,
  Target,
  Users,
  FileText,
  Link2,
  Code,
  Smartphone,
  MapPin,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Zap,
  Award,
  ChevronRight,
  Mail,
  Phone,
  MessageCircle,
  PieChart,
  Rocket,
  Settings,
  PenTool,
  Video
} from 'lucide-react';

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const services = [
    {
      id: 1,
      icon: <Search className="text-[#2563EB]" size={32} />,
      title: "Keyword Research & Strategy",
      description: "Data-driven keyword research to identify high-value opportunities and search intent.",
      features: [
        "Comprehensive keyword analysis",
        "Search intent categorization",
        "Competitor keyword gap analysis",
        "Long-tail keyword discovery",
        "Seasonal trend analysis",
        "Keyword difficulty scoring"
      ],
      pricing: {
        monthly: 999,
        yearly: 9990
      },
      popular: false,
      category: "strategy"
    },
    {
      id: 2,
      icon: <BarChart3 className="text-[#2563EB]" size={32} />,
      title: "On-Page SEO Optimization",
      description: "Comprehensive on-page optimization to improve relevance and search visibility.",
      features: [
        "Title tag & meta description optimization",
        "Header tag restructuring",
        "Content optimization",
        "Internal linking strategy",
        "Image alt text optimization",
        "Schema markup implementation"
      ],
      pricing: {
        monthly: 1499,
        yearly: 14990
      },
      popular: true,
      category: "optimization"
    },
    {
      id: 3,
      icon: <Link2 className="text-[#2563EB]" size={32} />,
      title: "Link Building & Authority",
      description: "Build high-quality backlinks to establish domain authority and boost rankings.",
      features: [
        "Guest posting outreach",
        "Broken link building",
        "Digital PR campaigns",
        "Competitor backlink analysis",
        "Authority resource pages",
        "Brand mention monitoring"
      ],
      pricing: {
        monthly: 1999,
        yearly: 19990
      },
      popular: false,
      category: "offpage"
    },
    {
      id: 4,
      icon: <Code className="text-[#2563EB]" size={32} />,
      title: "Technical SEO Audit",
      description: "In-depth technical analysis to identify and fix crawling and indexing issues.",
      features: [
        "Crawlability analysis",
        "Indexation audit",
        "Site speed optimization",
        "Mobile-friendliness check",
        "XML sitemap optimization",
        "Robots.txt configuration"
      ],
      pricing: {
        monthly: 1299,
        yearly: 12990
      },
      popular: false,
      category: "technical"
    },
    {
      id: 5,
      icon: <FileText className="text-[#2563EB]" size={32} />,
      title: "Content Marketing & SEO",
      description: "Strategic content creation optimized for both users and search engines.",
      features: [
        "Content strategy development",
        "Blog post writing & optimization",
        "Long-form pillar content",
        "Content refresh & updates",
        "Topic cluster implementation",
        "Content performance tracking"
      ],
      pricing: {
        monthly: 1799,
        yearly: 17990
      },
      popular: false,
      category: "content"
    },
    {
      id: 6,
      icon: <MapPin className="text-[#2563EB]" size={32} />,
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers to your business.",
      features: [
        "Google Business Profile optimization",
        "Local citation building",
        "Review management",
        "Local keyword targeting",
        "Map pack optimization",
        "Local content creation"
      ],
      pricing: {
        monthly: 899,
        yearly: 8990
      },
      popular: false,
      category: "local"
    },
    {
      id: 7,
      icon: <ShoppingCart className="text-[#2563EB]" size={32} />,
      title: "E-commerce SEO",
      description: "Specialized SEO for online stores to increase product visibility and sales.",
      features: [
        "Product page optimization",
        "Category page structure",
        "E-commerce schema markup",
        "Review rich snippets",
        "Faceted navigation optimization",
        "Cart abandonment SEO"
      ],
      pricing: {
        monthly: 2199,
        yearly: 21990
      },
      popular: false,
      category: "ecommerce"
    },
    {
      id: 8,
      icon: <TrendingUp className="text-[#2563EB]" size={32} />,
      title: "Enterprise SEO",
      description: "Scalable SEO solutions for large organizations with complex needs.",
      features: [
        "Custom SEO strategy",
        "International SEO",
        "Multi-site management",
        "API integrations",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      pricing: {
        monthly: 4999,
        yearly: 49990
      },
      popular: false,
      category: "enterprise"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Settings size={18} /> },
    { id: 'strategy', name: 'Strategy', icon: <Target size={18} /> },
    { id: 'optimization', name: 'Optimization', icon: <Zap size={18} /> },
    { id: 'technical', name: 'Technical', icon: <Code size={18} /> },
    { id: 'content', name: 'Content', icon: <FileText size={18} /> },
    { id: 'offpage', name: 'Off-Page', icon: <Globe size={18} /> },
    { id: 'local', name: 'Local', icon: <MapPin size={18} /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <ShoppingCart size={18} /> }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Audit",
      description: "We analyze your current SEO performance and identify opportunities.",
      icon: <Search size={24} />
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Custom SEO strategy tailored to your business goals.",
      icon: <Target size={24} />
    },
    {
      step: 3,
      title: "Implementation",
      description: "Execute optimizations with precision and care.",
      icon: <Zap size={24} />
    },
    {
      step: 4,
      title: "Monitoring & Reporting",
      description: "Track progress and adjust strategies for optimal results.",
      icon: <BarChart3 size={24} />
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. While some improvements can be seen in 3-6 months, significant results typically take 6-12 months depending on competition and current site state."
    },
    {
      question: "Do you guarantee #1 rankings?",
      answer: "We guarantee improvement in your search visibility and traffic, but no ethical SEO agency can guarantee specific rankings due to the dynamic nature of search engines."
    },
    {
      question: "What reporting do you provide?",
      answer: "You'll receive detailed monthly reports including keyword rankings, traffic analytics, backlink profile, and ROI analysis."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, our services are month-to-month with no long-term contracts. We're confident you'll love the results!"
    }
  ];

  const filteredServices = selectedService && selectedService !== 'all'
    ? services.filter(s => s.category === selectedService)
    : services;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1F3A] to-[#1a2f4a] py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#06B6D4] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#2563EB] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive{' '}
              <span className="text-[#06B6D4]">SEO Services</span>
            </h1>
            <p className="text-[#94A3B8] text-lg">
              Data-driven strategies tailored to your business goals. From local SEO to 
              enterprise solutions, we have the expertise to boost your online visibility.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-[#94A3B8] text-sm mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-[#94A3B8] text-sm mt-1">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-[#94A3B8] text-sm mt-1">SEO Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15x</div>
              <div className="text-[#94A3B8] text-sm mt-1">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedService(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
                  (selectedService === category.id) || (category.id === 'all' && !selectedService)
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#2563EB] hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-[#0F172A]' : 'text-[#64748B]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-[#2563EB] rounded-full p-1 transition"
            >
              <div className={`w-6 h-6 bg-white rounded-full transform transition ${
                billingCycle === 'yearly' ? 'translate-x-8' : ''
              }`}></div>
            </button>
            <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-[#0F172A]' : 'text-[#64748B]'}`}>
              Yearly <span className="text-[#2563EB] text-xs">(Save 15%)</span>
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border ${
                  service.popular ? 'border-[#2563EB] shadow-xl' : 'border-gray-100 shadow-lg'
                } relative group hover:shadow-2xl transition`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0F172A] mt-4">{service.title}</h3>
                  <p className="text-[#475569] text-sm mt-2">{service.description}</p>

                  <div className="mt-4">
                    <span className="text-3xl font-bold text-[#0F172A]">
                      ${billingCycle === 'monthly' ? service.pricing.monthly : service.pricing.yearly}
                    </span>
                    <span className="text-[#64748B] text-sm">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                        <CheckCircle className="text-[#2563EB] flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-[#2563EB] font-semibold">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <button className="w-full mt-6 bg-[#2563EB] text-white px-4 py-3 rounded-lg hover:bg-[#1D4ED8] transition font-semibold flex items-center justify-center gap-2 group">
                    Get Started
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              Why Businesses <span className="text-[#2563EB]">Choose Us</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              We deliver measurable results through proven methodologies and expert execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Award className="text-[#2563EB]" size={32} />,
                title: "10+ Years Experience",
                description: "Decade of mastering SEO algorithms and delivering results"
              },
              {
                icon: <Users className="text-[#2563EB]" size={32} />,
                title: "Expert Team",
                description: "Certified SEO specialists with diverse industry expertise"
              },
              {
                icon: <Shield className="text-[#2563EB]" size={32} />,
                title: "White Hat Only",
                description: "Ethical, sustainable SEO practices that build long-term value"
              },
              {
                icon: <BarChart3 className="text-[#2563EB]" size={32} />,
                title: "Data-Driven",
                description: "Every decision backed by comprehensive data analysis"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mt-4">{item.title}</h3>
                <p className="text-[#475569] mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              Our <span className="text-[#2563EB]">Process</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              A systematic approach to achieving your SEO goals
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2563EB]/20 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative bg-white p-6 rounded-xl shadow-lg">
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">{step.title}</h3>
                  <p className="text-[#475569] text-sm mt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#06B6D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Need a Custom SEO Solution?
              </h2>
              <p className="text-white/80 text-lg mt-4">
                Every business is unique. Let's discuss your specific goals and create a tailored strategy that delivers results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-white text-[#2563EB] px-8 py-4 rounded-lg hover:bg-[#F8FAFC] transition font-semibold flex items-center justify-center gap-2">
                  Schedule a Consultation
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold">
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Rocket />, label: "Startup SEO" },
                { icon: <ShoppingCart />, label: "E-commerce" },
                { icon: <Globe />, label: "Enterprise" },
                { icon: <MapPin />, label: "Local Business" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/20">
                  <div className="text-white flex justify-center mb-2">{item.icon}</div>
                  <p className="text-white font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              Frequently Asked <span className="text-[#2563EB]">Questions</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              Get answers to common questions about our SEO services
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0F172A]">{faq.question}</h3>
                <p className="text-[#475569] mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Ready to Boost Your Search Rankings?
          </h2>
          <p className="text-[#475569] mt-4 text-lg">
            Get a free SEO audit and consultation. See exactly where you stand and what needs improvement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-[#2563EB] text-white px-8 py-4 rounded-lg hover:bg-[#1D4ED8] transition shadow-lg font-semibold flex items-center justify-center gap-2 group">
              Get Free SEO Audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-lg hover:bg-[#2563EB] hover:text-white transition font-semibold">
              Contact Sales
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-[#64748B]">
            <span className="flex items-center gap-2">
              <Clock size={16} /> 30-min response
            </span>
            <span className="flex items-center gap-2">
              <Shield size={16} /> No commitment
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={16} /> Free consultation
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;