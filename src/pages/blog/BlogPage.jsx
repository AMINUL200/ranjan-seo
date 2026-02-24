import React, { useState } from 'react';
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Tag,
  ChevronRight,
  Eye,
  MessageCircle,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Globe,
  Share2,
  Bookmark,
  ThumbsUp
} from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'seo-strategy', name: 'SEO Strategy', count: 8 },
    { id: 'content-marketing', name: 'Content Marketing', count: 6 },
    { id: 'technical-seo', name: 'Technical SEO', count: 5 },
    { id: 'local-seo', name: 'Local SEO', count: 3 },
    { id: 'case-studies', name: 'Case Studies', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of SEO: 2024 Algorithm Updates You Need to Know",
      excerpt: "Google's latest algorithm changes and how they'll impact your search rankings. Learn the key factors that matter now.",
      image: "FS",
      category: "SEO Strategy",
      author: "Sarah Johnson",
      authorRole: "SEO Expert",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      views: 2345,
      comments: 42,
      likes: 156,
      tags: ["Algorithm Updates", "Google", "Trends"]
    },
    {
      id: 2,
      title: "Content Clusters: The Ultimate Guide to Topic Authority",
      excerpt: "How to build content clusters that establish your website as an authority and boost rankings for competitive keywords.",
      image: "CC",
      category: "Content Marketing",
      author: "Emily Rodriguez",
      authorRole: "Content Director",
      date: "Mar 12, 2024",
      readTime: "12 min read",
      views: 1876,
      comments: 28,
      likes: 98,
      tags: ["Content Strategy", "Topic Clusters", "SEO"]
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Core Web Vitals: A Complete Technical Guide",
      excerpt: "Master Google's Core Web Vitals with practical optimization techniques for better user experience and rankings.",
      image: "CWV",
      category: "Technical SEO",
      author: "David Kim",
      authorRole: "Technical SEO Lead",
      date: "Mar 10, 2024",
      readTime: "10 min read",
      views: 1543,
      comments: 19,
      likes: 67,
      tags: ["Core Web Vitals", "Page Speed", "Technical"]
    },
    {
      id: 4,
      title: "Local SEO Strategies for Multi-Location Businesses",
      excerpt: "Advanced tactics to dominate local search results across multiple locations and drive foot traffic.",
      image: "LSEO",
      category: "Local SEO",
      author: "Michael Chen",
      authorRole: "Head of SEO",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      views: 1234,
      comments: 15,
      likes: 45,
      tags: ["Local SEO", "Google Maps", "Local Business"]
    },
    {
      id: 5,
      title: "E-A-T and YMYL: Building Trust with Google",
      excerpt: "How to demonstrate expertise, authority, and trustworthiness for Your Money Your Life topics.",
      image: "EAT",
      category: "SEO Strategy",
      author: "Sarah Johnson",
      authorRole: "SEO Expert",
      date: "Mar 5, 2024",
      readTime: "9 min read",
      views: 2134,
      comments: 31,
      likes: 89,
      tags: ["E-A-T", "YMYL", "Trust Signals"]
    },
    {
      id: 6,
      title: "Voice Search Optimization: The 2024 Playbook",
      excerpt: "Optimize your content for voice search and capture the growing number of voice-activated queries.",
      image: "VS",
      category: "SEO Strategy",
      author: "Emily Rodriguez",
      authorRole: "Content Director",
      date: "Mar 3, 2024",
      readTime: "6 min read",
      views: 987,
      comments: 12,
      likes: 34,
      tags: ["Voice Search", "Featured Snippets", "Future"]
    },
    {
      id: 7,
      title: "Case Study: How We Increased Organic Traffic by 300%",
      excerpt: "A deep dive into our SEO strategy for an e-commerce client that resulted in massive traffic growth.",
      image: "CS",
      category: "Case Studies",
      author: "Michael Chen",
      authorRole: "Head of SEO",
      date: "Feb 28, 2024",
      readTime: "15 min read",
      views: 3456,
      comments: 67,
      likes: 234,
      tags: ["Case Study", "E-commerce", "Results"]
    },
    {
      id: 8,
      title: "Link Building in 2024: Quality Over Quantity",
      excerpt: "Modern link building strategies that focus on relevance and authority rather than volume.",
      image: "LB",
      category: "SEO Strategy",
      author: "David Kim",
      authorRole: "Technical SEO Lead",
      date: "Feb 25, 2024",
      readTime: "8 min read",
      views: 1654,
      comments: 23,
      likes: 78,
      tags: ["Link Building", "Backlinks", "Authority"]
    }
  ];

  const popularTags = [
    "SEO Strategy", "Technical SEO", "Content Marketing", 
    "Algorithm Updates", "Local SEO", "Link Building",
    "Core Web Vitals", "E-A-T", "Keyword Research",
    "Analytics", "Mobile SEO", "Voice Search"
  ];

  const handleBlogClick = (blogId) => {
    // In a real app, this would navigate to the blog details page
    window.location.href = `/blog/${blogId}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1F3A] to-[#1a2f4a] py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#06B6D4] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#2563EB] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              SEO<span className="text-[#06B6D4]"> Insights</span> & Strategies
            </h1>
            <p className="text-[#94A3B8] text-lg">
              Stay ahead of the curve with the latest SEO trends, tips, and case studies 
              from our industry experts.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748B]" size={20} />
              <input
                type="text"
                placeholder="Search articles, tutorials, guides..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border-0 focus:ring-2 focus:ring-[#2563EB] bg-white/10 backdrop-blur text-white placeholder-[#94A3B8]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition ${
                          selectedCategory === category.id
                            ? 'bg-[#2563EB] text-white'
                            : 'text-[#475569] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? 'text-white' : 'text-[#64748B]'
                        }`}>
                          ({category.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.slice(0, 8).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F8FAFC] text-[#475569] rounded-full text-sm hover:bg-[#2563EB] hover:text-white cursor-pointer transition"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-[#2563EB] text-white rounded-full text-sm cursor-pointer">
                    +4 more
                  </span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl p-6 mt-6">
                <h3 className="text-lg font-bold text-white mb-2">Weekly Newsletter</h3>
                <p className="text-white/80 text-sm mb-4">
                  Get the latest SEO insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-lg mb-2 text-gray-900"
                />
                <button className="w-full bg-white text-[#2563EB] px-4 py-2 rounded-lg hover:bg-[#F8FAFC] transition font-semibold">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => handleBlogClick(post.id)}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer transform hover:scale-[1.02] transition duration-300"
                    >
                      <div className="h-48 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">{post.image}</span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-sm">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2 py-1 rounded">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0F172A] mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[#475569] text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] flex items-center justify-center text-white text-xs font-bold">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#0F172A]">{post.author}</p>
                              <p className="text-xs text-[#64748B]">{post.authorRole}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-[#64748B] border-t border-gray-100 pt-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} /> {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye size={14} /> {post.views}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Latest Posts */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Latest Articles</h2>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => handleBlogClick(post.id)}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-48 h-32 md:h-auto bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">{post.image}</span>
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2 py-1 rounded">
                              {post.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                            {post.title}
                          </h3>
                          <p className="text-[#475569] text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} /> {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye size={14} /> {post.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle size={14} /> {post.comments}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] flex items-center justify-center text-white text-xs font-bold">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </div>
                              <span className="text-xs font-medium text-[#0F172A]">{post.author}</span>
                            </div>
                            <button className="text-[#2563EB] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                              Read More <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button className="w-10 h-10 rounded-lg bg-[#2563EB] text-white">1</button>
                  <button className="w-10 h-10 rounded-lg bg-white text-[#475569] hover:bg-[#F8FAFC]">2</button>
                  <button className="w-10 h-10 rounded-lg bg-white text-[#475569] hover:bg-[#F8FAFC]">3</button>
                  <button className="w-10 h-10 rounded-lg bg-white text-[#475569] hover:bg-[#F8FAFC]">4</button>
                  <span className="text-[#64748B]">...</span>
                  <button className="w-10 h-10 rounded-lg bg-white text-[#475569] hover:bg-[#F8FAFC]">12</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] text-center mb-8">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <TrendingUp size={24} />, name: "SEO Trends", count: 12 },
              { icon: <Target size={24} />, name: "Keyword Research", count: 8 },
              { icon: <BarChart3 size={24} />, name: "Analytics", count: 10 },
              { icon: <Globe size={24} />, name: "International SEO", count: 5 }
            ].map((topic, index) => (
              <div key={index} className="bg-[#F8FAFC] p-4 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  {topic.icon}
                </div>
                <h3 className="font-semibold text-[#0F172A]">{topic.name}</h3>
                <p className="text-xs text-[#64748B]">{topic.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;