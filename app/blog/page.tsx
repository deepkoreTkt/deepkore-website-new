"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  alt: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI-Powered Low-Code: The Future of Enterprise Development",
    excerpt:
      "Explore how AI integration in low-code platforms is revolutionizing enterprise application development in 2025.",
    readTime: "5 MIN READ",
    author: "Team Deepkore",
    date: "25 Sep 2025",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "AI-powered low-code development platform interface",
    link: "/blog/blog1",
  },
  {
    id: 2,
    title: "Microservices Architecture with Low-Code: A 2025 Guide",
    excerpt:
      "Learn how to build scalable microservices architecture using Deepkore's low-code platform.",
    readTime: "6 MIN READ",
    author: "Team Deepkore",
    date: "20 Sep 2025",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Microservices architecture diagram and cloud infrastructure",
    link: "#",
  },
  {
    id: 3,
    title: "Buy vs Build: What’s Right for Your Business?",
    excerpt:
      "Exploring the buy vs build dilemma in the context of low-code platforms.",
    readTime: "3 MIN READ",
    author: "Manish Narayanaswami",
    date: "8 Mar 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Business professionals discussing buy vs build software decisions",
    link: "#",
  },
  {
    id: 4,
    title: "Enterprise Data Security in Low-Code Platforms",
    excerpt:
      "Best practices for ensuring data security and compliance in low-code application development.",
    readTime: "5 MIN READ",
    author: "Team Deepkore",
    date: "12 Sep 2025",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Cybersecurity and data protection visualization",
    link: "#",
  },
  {
    id: 5,
    title: "Boost Digital Transformation with Low-Code",
    excerpt:
      "How low-code platforms accelerate digital transformation initiatives.",
    readTime: "3 MIN READ",
    author: "Mohan Madhurakavi",
    date: "5 Feb 2024",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Digital transformation with circuit boards and technological innovation",
    link: "#",
  },
  {
    id: 6,
    title: "How To Clear IT Backlogs with Low-Code Platforms",
    excerpt:
      "Learn practical strategies to eliminate IT backlogs using low-code platforms.",
    readTime: "5 MIN READ",
    author: "Dinesh Varadhrajan",
    date: "18 Apr 2024",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "IT infrastructure and data center with servers and network equipment",
    link: "#",
  },
  {
    id: 7,
    title: "Eliminate Shadow IT: Secure Your Business and Boost Compliance",
    excerpt:
      "Discover how to secure your business by eliminating shadow IT and improving compliance.",
    readTime: "4 MIN READ",
    author: "Dinesh Varadhrajan",
    date: "7 Jun 2024",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Cybersecurity and data protection with digital locks and security systems",
    link: "#",
  },
  {
    id: 8,
    title:
      "Break Free from Spreadsheet & Email Chaos: Unleashing Productivity & Efficiency",
    excerpt:
      "Break free from inefficient spreadsheets and emails to boost productivity.",
    readTime: "2 MIN READ",
    author: "Vinitha Ramani",
    date: "23 Jul 2024",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6e4b5?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Modern office workspace with computer and productivity tools",
    link: "#",
  },
  {
    id: 9,
    title:
      "Unlocking Digital Transformation Success: Navigating the Stages of Digital Evolution",
    excerpt:
      "Navigate the stages of digital evolution for successful transformation.",
    readTime: "4 MIN READ",
    author: "Team Deepkore",
    date: "14 Aug 2024",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Digital evolution and technological advancement with futuristic interfaces",
    link: "#",
  },
  {
    id: 10,
    title: "Overcome Technical Debt Using Smart Dev Tools",
    excerpt:
      "Use smart development tools to overcome technical debt effectively.",
    readTime: "2 MIN READ",
    author: "Dinesh Varadhrajan",
    date: "9 Sep 2024",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Code refactoring and technical debt management with development tools",
    link: "#",
  },
  {
    id: 11,
    title: "Go from Crawl to Sprint in Digital Transformation",
    excerpt: "Accelerate your digital transformation from a crawl to a sprint.",
    readTime: "7 MIN READ",
    author: "Vinitha Ramani",
    date: "21 Oct 2024",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Agile development sprint with team collaboration and planning",
    link: "#",
  },
  {
    id: 12,
    title: "Low-Code, No-Code & Pro-Code: Future of Dev",
    excerpt:
      "Explore the future of development with low-code, no-code, and pro-code approaches.",
    readTime: "5 MIN READ",
    author: "Team Deepkore",
    date: "3 Nov 2024",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Future technology with holographic interfaces and innovative development",
    link: "#",
  },
  {
    id: 13,
    title: "Streamline Ops via Low-Code Process Automation",
    excerpt: "Streamline your operations using low-code process automation.",
    readTime: "4 MIN READ",
    author: "Team Deepkore",
    date: "17 Dec 2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Process automation and workflow optimization with connected systems",
    link: "#",
  },
  {
    id: 14,
    title: "Customer Experience vs. User Experience Part I",
    excerpt:
      "Understanding the fundamental differences between customer experience and user experience in modern business.",
    readTime: "4 MIN READ",
    author: "Deepkore Team",
    date: "5 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "UX/UI design and user experience analysis with digital interfaces",
    link: "#",
  },
  {
    id: 15,
    title: "The Biggest Bug I Ever Fixed as a Software Engineer",
    excerpt:
      "A personal story about debugging and the lessons learned from fixing a critical software bug.",
    readTime: "6 MIN READ",
    author: "Deepkore Team",
    date: "19 Feb 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Software debugging and programming with code analysis on computer screen",
    link: "#",
  },
  {
    id: 16,
    title: "Troubleshoot Your Life!",
    excerpt:
      "Applying troubleshooting methodologies from software development to everyday life challenges.",
    readTime: "3 MIN READ",
    author: "Daniel Reis",
    date: "8 Mar 2025",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Problem-solving and troubleshooting concepts in professional development",
    link: "#",
  },
  {
    id: 17,
    title: "10 Things to Consider Before Picking a Cloud-Native Platform",
    excerpt:
      "Essential factors to evaluate when selecting a cloud-native platform for your organization.",
    readTime: "7 MIN READ",
    author: "Otávio Souza",
    date: "22 Apr 2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Cloud computing and cloud-native platform architecture",
    link: "#",
  },
  {
    id: 18,
    title: "Deepkore and AWS: Interview with Global Lead at AWS Marketplace",
    excerpt:
      "An exclusive interview discussing the partnership between Deepkore and AWS Marketplace.",
    readTime: "5 MIN READ",
    author: "Deepkore Team",
    date: "14 May 2025",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Cloud infrastructure partnership and AWS marketplace integration",
    link: "#",
  },
  {
    id: 19,
    title: "Using Communication APIs in the Age of Digital Disruption",
    excerpt:
      "How communication APIs can transform customer and employee interactions in the digital era.",
    readTime: "4 MIN READ",
    author: "Deepkore Team",
    date: "6 Jun 2025",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Digital communication and API integration for modern business",
    link: "#",
  },
  {
    id: 20,
    title: "Using Low-Code to Consume a Multipart/Form-Data REST Method",
    excerpt:
      "Learn how to handle multipart/form-data REST methods using low-code development approaches.",
    readTime: "5 MIN READ",
    author: "Killian Hekhuis",
    date: "28 Jun 2025",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "API development and REST method integration with low-code platforms",
    link: "#",
  },
  {
    id: 21,
    title: "How to Make a Mobile Stories Pattern With Deepkore",
    excerpt:
      "Learn how to create complex Instagram Stories-like patterns quickly using Deepkore low-code platform.",
    readTime: "6 MIN READ",
    author: "Deepkore Team",
    date: "12 Jul 2025",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Mobile app development with stories pattern and social media features",
    link: "#",
  },
  {
    id: 22,
    title: "Low-code app examples: What can you really build with low-code?",
    excerpt:
      "Explore real-world examples of applications you can build with low-code platforms and their business impact.",
    readTime: "5 MIN READ",
    author: "Deepkore Team",
    date: "3 Aug 2025",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Low-code application development examples and use cases",
    link: "#",
  },
  {
    id: 23,
    title: "Massively Scaling Mobile Apps: The PostCast",
    excerpt:
      "Strategies and best practices for scaling mobile applications to handle massive user growth.",
    readTime: "4 MIN READ",
    author: "Deepkore Team",
    date: "17 Aug 2025",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Mobile app performance optimization and scaling architecture",
    link: "#",
  },
  {
    id: 24,
    title: "Transforming Technical Debt: How to Break Free",
    excerpt:
      "Practical strategies to identify, manage, and eliminate technical debt in software development.",
    readTime: "6 MIN READ",
    author: "Deepkore Team",
    date: "9 Sep 2025",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Technical debt management and software quality improvement",
    link: "#",
  },
  {
    id: 25,
    title: "Quarterly Highlights: Deepkore IDE Union Q4 2018",
    excerpt:
      "Latest features and improvements in the Deepkore Service Studio IDE for Q4 2018.",
    readTime: "3 MIN READ",
    author: "Deepkore Team",
    date: "23 Sep 2025",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Development environment and IDE features for software development",
    link: "#",
  },
  {
    id: 26,
    title: "Home Automation with SmartThings and Deepkore",
    excerpt:
      "Building smart home automation solutions by integrating SmartThings with Deepkore platform.",
    readTime: "5 MIN READ",
    author: "Deepkore Team",
    date: "7 Oct 2025",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Smart home automation and IoT integration with low-code platforms",
    link: "#",
  },
];

const Blog: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          <Header />
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-4 py-1 mb-6 bg-[#00A551]/10 text-[#00A551] rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Latest Insights & Updates
              </motion.span>
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Deepkore Blog
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover expert insights, best practices, and success stories
                about low-code development, digital transformation, and
                enterprise innovation.
              </motion.p>
            </motion.div>

            {/* Search and Filter Section */}
            <motion.div
              className="max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-4 p-2 bg-white rounded-full shadow-lg">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="flex-1 px-6 py-3 bg-transparent outline-none text-gray-700"
                />
                <button className="px-6 py-3 bg-[#00A551] text-white rounded-full hover:bg-[#008544] transition-colors duration-300">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            {/* Featured Post */}
            {blogPosts.slice(0, 1).map((post) => (
              <motion.article
                key={post.id}
                className="mb-16 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-4 py-1 mb-4 bg-[#00A551]/10 text-[#00A551] rounded-full text-sm font-medium">
                      Featured Post
                    </span>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-[#00A551] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00A551] to-[#2791D0]"></div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {post.author}
                          </p>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <span className="bg-[#00A551]/10 text-[#00A551] px-3 py-1 rounded-full text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <a
                      href={post.link}
                      className="inline-flex items-center px-6 py-3 bg-[#00A551] text-white rounded-full hover:bg-[#008544] transition-colors duration-300 group"
                    >
                      Read Article
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, idx) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={548}
                      height={285}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#00A551]/10 text-[#00A551] px-3 py-1 rounded-full text-sm">
                        {post.readTime}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#00A551] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm font-medium text-gray-600">
                        {post.author}
                      </span>
                      <a
                        href={post.link}
                        className="inline-flex items-center text-[#00A551] font-semibold group-hover:text-[#008544] transition-colors duration-300"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative">
                <span className="inline-block px-4 py-1 mb-6 bg-[#00A551]/10 text-[#00A551] rounded-full text-sm font-medium">
                  Stay Updated
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Get the latest insights on low-code development, digital
                  transformation, and enterprise innovation delivered straight
                  to your inbox.
                </p>
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-[#00A551] focus:ring-2 focus:ring-[#00A551]/20 outline-none transition-all duration-300"
                  />
                  <button className="px-8 py-4 bg-[#00A551] text-white rounded-full hover:bg-[#008544] transform hover:scale-105 transition-all duration-300">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
              <p className="text-gray-600">
                Discover content that matters to you
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Low-Code Development",
                "Digital Transformation",
                "Enterprise Innovation",
                "AI & Automation",
              ].map((category, idx) => (
                <motion.button
                  key={category}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-[#00A551]/10 text-gray-700 hover:text-[#00A551] transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
