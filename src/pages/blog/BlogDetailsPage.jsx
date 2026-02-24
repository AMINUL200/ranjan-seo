import React, { useState } from 'react';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Check,
  ChevronRight,
  Eye,
  Tag,
  Mail
} from 'lucide-react';

const BlogDetailsPage = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  // In a real app, you'd fetch the blog post data based on the ID from the URL
  const blogPost = {
    id: 1,
    title: "The Future of SEO: 2024 Algorithm Updates You Need to Know",
    excerpt: "Google's latest algorithm changes and how they'll impact your search rankings. Learn the key factors that matter now.",
    content: `
      <p>The SEO landscape is constantly evolving, and 2024 brings some of the most significant changes we've seen in years. Google's latest algorithm updates focus heavily on user experience, content quality, and technical performance.</p>
      
      <h2>Core Web Vitals Become Even More Critical</h2>
      <p>Google has announced that Core Web Vitals will play an even larger role in rankings. The three metrics—LCP, FID, and CLS—now have stricter thresholds for what constitutes a "good" user experience. Sites failing to meet these standards could see significant drops in visibility.</p>
      
      <p>To prepare, focus on optimizing your Largest Contentful Paint by improving server response times and eliminating render-blocking resources. For First Input Delay, minimize JavaScript execution time. And for Cumulative Layout Shift, always specify size attributes for images and video embeds.</p>
      
      <h2>The Rise of AI-Generated Content</h2>
      <p>With the explosion of AI tools, Google has updated its guidelines around automatically generated content. While AI-assisted content isn't penalized, Google's systems are better than ever at detecting low-quality, mass-produced content that lacks originality or value.</p>
      
      <p>The key differentiator? Expertise, Experience, Authoritativeness, and Trustworthiness (E-E-A-T). Content must demonstrate genuine expertise and provide unique insights that AI alone cannot generate.</p>
      
      <h2>Voice Search Optimization</h2>
      <p>Voice searches now account for over 50% of all queries. These searches tend to be longer, more conversational, and often in question format. Optimizing for voice search means focusing on natural language patterns and featured snippet opportunities.</p>
      
      <p>Create content that directly answers common questions in your industry. Use structured data to help Google understand your content's context and increase chances of appearing in voice search results.</p>
      
      <h2>Local SEO Gets Hyper-Specific</h2>
      <p>Google's local algorithm now considers "near me" searches with even greater precision. The proximity to the searcher, the relevance of your business, and the prominence of your online presence all factor into local pack rankings.</p>
      
      <p>Ensure your Google Business Profile is completely optimized with accurate information, regular posts, and genuine reviews from customers. Local citations and consistent NAP information across the web remain crucial.</p>
    `,
    image: "FS",
    category: "SEO Strategy",
    author: {
      name: "Sarah Johnson",
      role: "SEO Expert",
      bio: "Sarah has over 10 years of experience in SEO and digital marketing. She's helped 100+ businesses achieve top rankings and specializes in algorithm updates and technical SEO.",
      avatar: "SJ",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "#"
      }
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    views: 2345,
    likes: 156,
    comments: 42,
    tags: ["Algorithm Updates", "Google", "Trends", "2024 SEO"],
    relatedPosts: [
      {
        id: 2,
        title: "Core Web Vitals: A Complete Technical Guide",
        excerpt: "Master Google's Core Web Vitals with practical optimization techniques.",
        image: "CWV",
        date: "Mar 10, 2024"
      },
      {
        id: 3,
        title: "E-A-T and YMYL: Building Trust with Google",
        excerpt: "How to demonstrate expertise, authority, and trustworthiness.",
        image: "EAT",
        date: "Mar 5, 2024"
      },
      {
        id: 4,
        title: "Voice Search Optimization: The 2024 Playbook",
        excerpt: "Optimize your content for voice search and capture more queries.",
        image: "VS",
        date: "Mar 3, 2024"
      }
    ],
    comments_list: [
      {
        id: 1,
        name: "Michael Chen",
        avatar: "MC",
        date: "March 16, 2024",
        content: "Great insights! The section on Core Web Vitals was particularly helpful. I've already started optimizing my site based on these recommendations.",
        likes: 12
      },
      {
        id: 2,
        name: "Emily Rodriguez",
        avatar: "ER",
        date: "March 16, 2024",
        content: "I appreciate the balanced view on AI content. It's not about avoiding AI but using it strategically while maintaining quality.",
        likes: 8
      }
    ]
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Back to Blog Link */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/blog" className="inline-flex items-center text-[#475569] hover:text-[#2563EB] transition">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </a>
        </div>
      </div>

      {/* Main Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-[#475569] mb-6">
              {blogPost.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] flex items-center justify-center text-white text-2xl font-bold">
                  {blogPost.author.avatar}
                </div>
                <div>
                  <p className="text-lg font-bold text-[#0F172A]">{blogPost.author.name}</p>
                  <p className="text-[#64748B]">{blogPost.author.role}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {blogPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {blogPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={14} /> {blogPost.views} views
                    </span>
                  </div>
                </div>
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setLiked(!liked)}
                  className={`p-2 rounded-lg transition ${
                    liked ? 'bg-[#2563EB] text-white' : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#2563EB] hover:text-white'
                  }`}
                >
                  <ThumbsUp size={20} />
                </button>
                <button 
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-2 rounded-lg transition ${
                    bookmarked ? 'bg-[#2563EB] text-white' : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#2563EB] hover:text-white'
                  }`}
                >
                  <Bookmark size={20} />
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="p-2 rounded-lg bg-[#F8FAFC] text-[#64748B] hover:bg-[#2563EB] hover:text-white transition relative"
                >
                  {copied ? <Check size={20} /> : <Link2 size={20} />}
                </button>
                <button className="p-2 rounded-lg bg-[#F8FAFC] text-[#64748B] hover:bg-[#2563EB] hover:text-white transition">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
              <span className="text-white text-8xl font-bold">{blogPost.image}</span>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mb-8 pb-8 border-b border-gray-100">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#F8FAFC] text-[#475569] rounded-lg text-sm hover:bg-[#2563EB] hover:text-white cursor-pointer transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {blogPost.author.avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">About {blogPost.author.name}</h3>
                <p className="text-[#475569] mt-2">{blogPost.author.bio}</p>
                <div className="flex items-center gap-3 mt-4">
                  <a href={blogPost.author.social.twitter} className="text-[#64748B] hover:text-[#2563EB] transition">
                    <Twitter size={18} />
                  </a>
                  <a href={blogPost.author.social.linkedin} className="text-[#64748B] hover:text-[#2563EB] transition">
                    <Linkedin size={18} />
                  </a>
                  <a href={blogPost.author.social.email} className="text-[#64748B] hover:text-[#2563EB] transition">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
              Comments ({blogPost.comments})
            </h3>

            {/* Comment Form */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <textarea
                placeholder="Leave a comment..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB] mb-4"
              ></textarea>
              <button className="bg-[#2563EB] text-white px-6 py-2 rounded-lg hover:bg-[#1D4ED8] transition">
                Post Comment
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {blogPost.comments_list.map((comment) => (
                <div key={comment.id} className="bg-white rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#2563EB] flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold text-[#0F172A]">{comment.name}</span>
                          <span className="text-sm text-[#64748B] ml-2">{comment.date}</span>
                        </div>
                        <button className="text-sm text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1">
                          <ThumbsUp size={14} /> {comment.likes}
                        </button>
                      </div>
                      <p className="text-[#475569]">{comment.content}</p>
                      <button className="text-sm text-[#2563EB] mt-2 hover:text-[#1D4ED8]">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPost.relatedPosts.map((post) => (
              <a 
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition group"
              >
                <div className="h-40 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{post.image}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#0F172A] group-hover:text-[#2563EB] transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748B] mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-[#64748B]">{post.date}</span>
                    <span className="text-[#2563EB] text-sm font-semibold flex items-center gap-1">
                      Read More <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;