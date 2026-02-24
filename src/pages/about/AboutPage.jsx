import React from 'react';
import {
  Award,
  Target,
  Users,
  Heart,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Quote,
  TrendingUp,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "10+ years in digital marketing, ex-Google SEO specialist",
      image: "SJ",
      social: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "Michael Chen",
      role: "Head of SEO",
      bio: "Certified SEO expert with 500+ successful campaigns",
      image: "MC",
      social: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Content Director",
      bio: "Award-winning content strategist and writer",
      image: "ER",
      social: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      name: "David Kim",
      role: "Technical SEO Lead",
      bio: "Full-stack developer turned SEO technical specialist",
      image: "DK",
      social: { linkedin: "#", twitter: "#", email: "#" }
    }
  ];

  const milestones = [
    { year: "2015", event: "Company Founded", icon: <Award size={24} /> },
    { year: "2017", event: "100 Clients Reached", icon: <Users size={24} /> },
    { year: "2019", event: "Opened NYC Office", icon: <Globe size={24} /> },
    { year: "2021", event: "500 Projects Completed", icon: <BarChart3 size={24} /> },
    { year: "2024", event: "Industry Leader Award", icon: <Target size={24} /> }
  ];

  const values = [
    {
      icon: <Target className="text-[#2563EB]" size={32} />,
      title: "Data-First Approach",
      description: "Every decision is backed by comprehensive data analysis and proven methodologies."
    },
    {
      icon: <Heart className="text-[#2563EB]" size={32} />,
      title: "Client Success Focus",
      description: "Your success is our success. We're committed to delivering measurable results."
    },
    {
      icon: <Shield className="text-[#2563EB]" size={32} />,
      title: "Transparency",
      description: "Clear communication, honest reporting, and no hidden surprises."
    },
    {
      icon: <Zap className="text-[#2563EB]" size={32} />,
      title: "Innovation",
      description: "Constantly adapting to the latest SEO trends and algorithm updates."
    }
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
              We're on a Mission to{' '}
              <span className="text-[#06B6D4]">Transform SEO</span>
            </h1>
            <p className="text-[#94A3B8] text-lg">
              Founded in 2015, we've grown from a small team of SEO enthusiasts to 
              a full-service digital marketing agency trusted by 500+ businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
                Our <span className="text-[#2563EB]">Story</span>
              </h2>
              <p className="text-[#475569] mt-4 text-lg leading-relaxed">
                What started as a passion project in a small coffee shop has grown into 
                one of the most trusted SEO agencies in the industry. Our founder, Sarah 
                Johnson, recognized a gap in the market for transparent, data-driven SEO 
                services that actually deliver results.
              </p>
              <p className="text-[#475569] mt-4 text-lg leading-relaxed">
                Today, we're a team of 50+ SEO experts, content creators, and technical 
                specialists working together to help businesses of all sizes achieve 
                their digital marketing goals.
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 4).map((member, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] border-2 border-white flex items-center justify-center text-white font-bold">
                      {member.image}
                    </div>
                  ))}
                </div>
                <div className="text-[#64748B]">
                  <span className="text-[#0F172A] font-bold">50+</span> Experts & Growing
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#2563EB] to-[#06B6D4] p-1 rounded-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <Quote className="text-[#2563EB] mb-4" size={48} />
                  <p className="text-[#475569] text-lg italic">
                    "We don't just optimize for search engines – we optimize for real people. 
                    Our approach combines technical expertise with authentic content that 
                    resonates with your audience."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] flex items-center justify-center text-white font-bold text-xl">
                      SJ
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A]">Sarah Johnson</p>
                      <p className="text-[#64748B] text-sm">CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              Our <span className="text-[#2563EB]">Journey</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              Key milestones that shaped who we are today
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2563EB]/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                          {milestone.icon}
                        </div>
                        <div>
                          <span className="text-[#2563EB] font-bold text-xl">{milestone.year}</span>
                          <h3 className="font-bold text-[#0F172A]">{milestone.event}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-8 h-8 bg-[#2563EB] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              What We <span className="text-[#2563EB]">Believe In</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <div key={index} className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-100 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mt-4">{value.title}</h3>
                <p className="text-[#475569] mt-2 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              Meet Our <span className="text-[#2563EB]">Leadership</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              Industry experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-4xl font-bold">
                      {member.image}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0F172A]">{member.name}</h3>
                  <p className="text-[#2563EB] font-medium mt-1">{member.role}</p>
                  <p className="text-[#64748B] text-sm mt-3">{member.bio}</p>
                  
                  <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    <a href={member.social.linkedin} className="text-[#64748B] hover:text-[#2563EB] transition">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="text-[#64748B] hover:text-[#2563EB] transition">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.email} className="text-[#64748B] hover:text-[#2563EB] transition">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white">10+</div>
              <div className="text-[#E2E8F0] mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-[#E2E8F0] mt-2">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-[#E2E8F0] mt-2">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">1M+</div>
              <div className="text-[#E2E8F0] mt-2">Keywords Ranked</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
            Ready to Work With <span className="text-[#2563EB]">Industry Leaders?</span>
          </h2>
          <p className="text-[#475569] mt-4 text-lg max-w-2xl mx-auto">
            Join 500+ businesses that have transformed their online presence with our SEO expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-[#2563EB] text-white px-8 py-4 rounded-lg hover:bg-[#1D4ED8] transition shadow-lg font-semibold flex items-center justify-center group" style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.35)' }}>
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
            </button>
            <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-lg hover:bg-[#2563EB] hover:text-white transition font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;