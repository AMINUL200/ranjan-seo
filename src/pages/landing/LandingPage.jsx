import React from "react";
import {
  BarChart3,
  TrendingUp,
  Search,
  Globe,
  Target,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Award,
  Rocket,
  PieChart,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section - Video Only */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/22192-326722755_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Opacity Controller Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              Why Leading Brands Choose{" "}
              <span className="text-[#2563EB]">SEOPro</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              We combine cutting-edge technology with proven strategies to
              deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <Award className="text-[#2563EB]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-6">
                10+ Years Experience
              </h3>
              <p className="text-[#475569] mt-3">
                Over a decade of mastering SEO algorithms and delivering
                consistent results for our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <Target className="text-[#2563EB]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-6">
                Data-Driven Approach
              </h3>
              <p className="text-[#475569] mt-3">
                Every decision is backed by comprehensive data analysis and
                market research.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <Users className="text-[#2563EB]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-6">
                Expert Team
              </h3>
              <p className="text-[#475569] mt-3">
                Certified SEO specialists committed to staying ahead of industry
                trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
              Comprehensive <span className="text-[#2563EB]">SEO Services</span>
            </h2>
            <p className="text-[#475569] mt-4 text-lg">
              Tailored solutions to meet your specific business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: <Search className="text-[#2563EB]" size={32} />,
                title: "Keyword Research",
                description:
                  "Identify high-value keywords that drive targeted traffic to your site.",
              },
              {
                icon: <BarChart3 className="text-[#2563EB]" size={32} />,
                title: "On-Page SEO",
                description:
                  "Optimize your website structure and content for better rankings.",
              },
              {
                icon: <Globe className="text-[#2563EB]" size={32} />,
                title: "Off-Page SEO",
                description:
                  "Build quality backlinks to establish domain authority.",
              },
              {
                icon: <TrendingUp className="text-[#2563EB]" size={32} />,
                title: "Technical SEO",
                description:
                  "Ensure your website meets all technical requirements for search engines.",
              },
              {
                icon: <PieChart className="text-[#2563EB]" size={32} />,
                title: "Analytics & Reporting",
                description:
                  "Track progress with detailed monthly performance reports.",
              },
              {
                icon: <Rocket className="text-[#2563EB]" size={32} />,
                title: "Local SEO",
                description:
                  "Dominate local search results and attract nearby customers.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition group"
              >
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mt-4">
                  {service.title}
                </h3>
                <p className="text-[#475569] mt-2 text-sm">
                  {service.description}
                </p>
                <button className="text-[#2563EB] font-semibold mt-4 flex items-center group-hover:translate-x-1 transition">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </button>
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
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-[#E2E8F0] mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">95%</div>
              <div className="text-[#E2E8F0] mt-2">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-[#E2E8F0] mt-2">SEO Experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">#1</div>
              <div className="text-[#E2E8F0] mt-2">Google Rankings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
                Ready to Boost Your{" "}
                <span className="text-[#2563EB]">Search Rankings?</span>
              </h2>
              <p className="text-[#475569] mt-4 text-lg">
                Get a free SEO audit and consultation. Our experts will analyze
                your website and provide actionable insights.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-[#2563EB]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm">Call us</p>
                    <p className="text-[#0F172A] font-semibold">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-[#2563EB]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm">Email us</p>
                    <p className="text-[#0F172A] font-semibold">
                      hello@seopro.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-[#2563EB]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm">Visit us</p>
                    <p className="text-[#0F172A] font-semibold">
                      123 SEO Street, Digital City, DC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Send us a message
              </h3>
              <p className="text-[#475569] mt-2">
                We'll get back to you within 24 hours
              </p>

              <form className="mt-6 space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB]"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-[#2563EB] text-white px-6 py-3 rounded-lg hover:bg-[#1D4ED8] transition shadow-lg font-semibold"
                  style={{ boxShadow: "0 4px 14px rgba(37,99,235,0.35)" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
