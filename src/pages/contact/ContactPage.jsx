import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Headphones,
  Calendar,
  Globe,
  Award,
  Users,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    consent: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [copied, setCopied] = useState({
    email: false,
    phone: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Thank you! We\'ll get back to you within 24 hours.' });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: '' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        consent: false
      });
    }, 5000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
  };

  const officeLocations = [
    {
      city: "New York",
      address: "123 SEO Street, Floor 5",
      area: "Manhattan, NY 10001",
      phone: "+1 (212) 555-0123",
      email: "nyc@seopro.com",
      hours: "Mon-Fri: 9AM - 6PM EST"
    },
    {
      city: "San Francisco",
      address: "456 Market Street, Suite 200",
      area: "San Francisco, CA 94105",
      phone: "+1 (415) 555-0456",
      email: "sf@seopro.com",
      hours: "Mon-Fri: 9AM - 6PM PST"
    },
    {
      city: "London",
      address: "789 Oxford Street",
      area: "London, W1C 1LB",
      phone: "+44 20 7946 0123",
      email: "london@seopro.com",
      hours: "Mon-Fri: 9AM - 6PM GMT"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Client Success Manager",
      email: "sarah.j@seopro.com",
      phone: "+1 (212) 555-1001",
      avatar: "SJ",
      expertise: "Enterprise SEO"
    },
    {
      name: "Michael Chen",
      role: "Technical SEO Specialist",
      email: "michael.c@seopro.com",
      phone: "+1 (212) 555-1002",
      avatar: "MC",
      expertise: "Technical SEO"
    },
    {
      name: "Emily Rodriguez",
      role: "Content Strategy Lead",
      email: "emily.r@seopro.com",
      phone: "+1 (212) 555-1003",
      avatar: "ER",
      expertise: "Content Marketing"
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We aim to respond to all inquiries within 2-4 business hours during working days."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free 30-minute consultation to discuss your SEO needs and goals."
    },
    {
      question: "What information should I prepare before contacting?",
      answer: "Your website URL, current SEO challenges, and any specific goals you have in mind."
    }
  ];

  const supportHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 for existing clients" }
  ];

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
              Let's <span className="text-[#06B6D4]">Connect</span>
            </h1>
            <p className="text-[#94A3B8] text-lg">
              Have a question or ready to start your SEO journey? We're here to help. 
              Reach out and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Headphones className="text-[#06B6D4] mx-auto mb-2" size={24} />
              <div className="text-white font-bold">24/7</div>
              <div className="text-[#94A3B8] text-xs">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Clock className="text-[#06B6D4] mx-auto mb-2" size={24} />
              <div className="text-white font-bold">30 min</div>
              <div className="text-[#94A3B8] text-xs">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Users className="text-[#06B6D4] mx-auto mb-2" size={24} />
              <div className="text-white font-bold">50+</div>
              <div className="text-[#94A3B8] text-xs">Experts Ready</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <Globe className="text-[#06B6D4] mx-auto mb-2" size={24} />
              <div className="text-white font-bold">Global</div>
              <div className="text-[#94A3B8] text-xs">Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Contact */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center group hover:shadow-xl transition">
              <div className="w-20 h-20 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition">
                <Mail className="text-[#2563EB]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-4">Email Us</h3>
              <p className="text-[#475569] text-sm mt-2">Get support via email</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <a href="mailto:hello@seopro.com" className="text-[#2563EB] font-semibold">
                  hello@seopro.com
                </a>
                <button 
                  onClick={() => handleCopy('hello@seopro.com', 'email')}
                  className="p-1 hover:bg-[#2563EB]/10 rounded"
                >
                  {copied.email ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-[#64748B]" />}
                </button>
              </div>
              <p className="text-xs text-[#64748B] mt-2">Typically replies within 2-4 hours</p>
            </div>

            {/* Phone Contact */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center group hover:shadow-xl transition">
              <div className="w-20 h-20 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition">
                <Phone className="text-[#2563EB]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-4">Call Us</h3>
              <p className="text-[#475569] text-sm mt-2">Speak with an expert</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <a href="tel:+12125550123" className="text-[#2563EB] font-semibold">
                  +1 (212) 555-0123
                </a>
                <button 
                  onClick={() => handleCopy('+1 (212) 555-0123', 'phone')}
                  className="p-1 hover:bg-[#2563EB]/10 rounded"
                >
                  {copied.phone ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-[#64748B]" />}
                </button>
              </div>
              <p className="text-xs text-[#64748B] mt-2">Mon-Fri, 9AM-6PM EST</p>
            </div>

            {/* Live Chat */}
            <div className="bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-2xl p-8 text-center group hover:shadow-xl transition">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mt-4">Live Chat</h3>
              <p className="text-white/80 text-sm mt-2">Chat with our team now</p>
              <button className="mt-4 bg-white text-[#2563EB] px-6 py-2 rounded-lg font-semibold hover:bg-[#F8FAFC] transition">
                Start Chat
              </button>
              <p className="text-white/60 text-xs mt-2">Average response: 30 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Send us a Message</h2>
              <p className="text-[#475569] mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {formStatus.success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                      placeholder="+1 (212) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="">Select a service</option>
                    <option value="seo-audit">SEO Audit</option>
                    <option value="keyword-research">Keyword Research</option>
                    <option value="on-page">On-Page SEO</option>
                    <option value="link-building">Link Building</option>
                    <option value="technical-seo">Technical SEO</option>
                    <option value="content-marketing">Content Marketing</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="enterprise">Enterprise SEO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-[#2563EB]"
                  />
                  <label htmlFor="consent" className="text-sm text-[#475569]">
                    I agree to the privacy policy and consent to being contacted *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white px-6 py-4 rounded-lg hover:bg-[#1D4ED8] transition font-semibold flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Office Hours Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Office Hours</h3>
                <div className="space-y-3">
                  {supportHours.map((item, index) => (
                    <div key={index} className="flex items-center justify-between pb-2 border-b border-gray-100 last:border-0">
                      <span className="text-[#475569]">{item.day}</span>
                      <span className="text-[#0F172A] font-semibold">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#2563EB]/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Headphones className="text-[#2563EB]" size={24} />
                    <div>
                      <p className="font-semibold text-[#0F172A]">Emergency Support</p>
                      <p className="text-sm text-[#475569]">24/7 for existing clients</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {officeLocations.map((location, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-[#2563EB] flex-shrink-0" size={20} />
                        <div>
                          <p className="font-bold text-[#0F172A]">{location.city}</p>
                          <p className="text-sm text-[#475569]">{location.address}</p>
                          <p className="text-sm text-[#475569]">{location.area}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm">
                            <a href={`tel:${location.phone}`} className="text-[#2563EB] hover:underline">
                              {location.phone}
                            </a>
                            <a href={`mailto:${location.email}`} className="text-[#2563EB] hover:underline">
                              Email
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Find Us</h2>
          <div className="bg-[#F8FAFC] h-96 rounded-2xl overflow-hidden relative">
            {/* Map Placeholder - In real app, integrate Google Maps */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-[#2563EB] mx-auto mb-2" size={48} />
                <p className="text-[#475569]">Interactive Map Integration</p>
                <p className="text-sm text-[#64748B]">123 SEO Street, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contact Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2 text-center">Contact Team Members Directly</h2>
          <p className="text-[#475569] text-center mb-8">Connect with our experts for specific inquiries</p>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{member.name}</h3>
                <p className="text-[#2563EB] font-medium text-sm">{member.role}</p>
                <p className="text-xs text-[#64748B] mt-1">{member.expertise}</p>
                
                <div className="mt-4 space-y-2">
                  <a href={`mailto:${member.email}`} className="block text-sm text-[#475569] hover:text-[#2563EB] transition">
                    {member.email}
                  </a>
                  <a href={`tel:${member.phone}`} className="block text-sm text-[#475569] hover:text-[#2563EB] transition">
                    {member.phone}
                  </a>
                </div>

                <button className="mt-4 text-[#2563EB] font-semibold text-sm flex items-center justify-center gap-1 group">
                  Schedule a Meeting
                  <Calendar size={14} className="group-hover:translate-x-1 transition" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2 text-center">Quick Answers</h2>
          <p className="text-[#475569] text-center mb-8">Common questions about contacting us</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-[#475569]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Connect Section */}
      <section className="py-16 bg-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-bold mb-2">Connect With Us</h2>
            <p className="text-white/80">Follow us on social media for SEO tips and updates</p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#2563EB] transition group">
              <Facebook className="text-white group-hover:text-[#2563EB]" size={24} />
            </a>
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#2563EB] transition group">
              <Twitter className="text-white group-hover:text-[#2563EB]" size={24} />
            </a>
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#2563EB] transition group">
              <Linkedin className="text-white group-hover:text-[#2563EB]" size={24} />
            </a>
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#2563EB] transition group">
              <Instagram className="text-white group-hover:text-[#2563EB]" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Prefer to schedule a call?</h2>
          <p className="text-[#475569] text-lg mb-8">Book a time that works best for you</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2563EB] text-white px-8 py-4 rounded-lg hover:bg-[#1D4ED8] transition shadow-lg font-semibold flex items-center justify-center gap-2 group">
              <Calendar size={20} />
              Schedule Consultation
              <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-lg hover:bg-[#2563EB] hover:text-white transition font-semibold">
              View Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;