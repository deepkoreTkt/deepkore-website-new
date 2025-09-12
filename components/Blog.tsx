"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    title:
      "Le prospettive 2025 dei CI: ridefinire le imprese con le piattaforme low-code e no-code",
    excerpt:
      "Discover how low-code and no-code platforms are transforming Italian enterprises in 2025.",
    readTime: "3 MIN READ",
    author: "Team Deepkore",
    date: "15 Sep 2024",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Low-code and no-code development platforms with drag-and-drop interfaces",
    link: "#",
  },
  {
    id: 2,
    title: "CIO Perspectives 2025: Transforming Enterprises with LCNC",
    excerpt:
      "Insights on how CIOs can leverage low-code no-code platforms for digital transformation.",
    readTime: "2 MIN READ",
    author: "Team Deepkore",
    date: "22 Nov 2024",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Chief Information Officer analyzing digital transformation strategies",
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
    title: "Why ESG Matters in Today's Business Landscape",
    excerpt:
      "Understanding the importance of ESG in modern business practices.",
    readTime: "5 MIN READ",
    author: "Mohan Madhurakavi",
    date: "12 Jan 2024",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Sustainable business practices with environmental focus and green initiatives",
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
    author: "OutSystems Team",
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
    author: "OutSystems Team",
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
    title: "OutSystems and AWS: Interview with Global Lead at AWS Marketplace",
    excerpt:
      "An exclusive interview discussing the partnership between OutSystems and AWS Marketplace.",
    readTime: "5 MIN READ",
    author: "OutSystems Team",
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
    author: "OutSystems Team",
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
    title: "How to Make a Mobile Stories Pattern With OutSystems",
    excerpt:
      "Learn how to create complex Instagram Stories-like patterns quickly using OutSystems low-code platform.",
    readTime: "6 MIN READ",
    author: "OutSystems Team",
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
    author: "OutSystems Team",
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
    author: "OutSystems Team",
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
    author: "OutSystems Team",
    date: "9 Sep 2025",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Technical debt management and software quality improvement",
    link: "#",
  },
  {
    id: 25,
    title: "Quarterly Highlights: OutSystems IDE Union Q4 2018",
    excerpt:
      "Latest features and improvements in the OutSystems Service Studio IDE for Q4 2018.",
    readTime: "3 MIN READ",
    author: "OutSystems Team",
    date: "23 Sep 2025",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&w=548&h=285&fit=crop",
    alt: "Development environment and IDE features for software development",
    link: "#",
  },
  {
    id: 26,
    title: "Home Automation with SmartThings and OutSystems",
    excerpt:
      "Building smart home automation solutions by integrating SmartThings with OutSystems platform.",
    readTime: "5 MIN READ",
    author: "OutSystems Team",
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
      <section className="py-40 bg-gradient-to-br from-[#00A551]/10 to-[#2791D0]/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to the Deepkore Blog
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover expert insights on how Deepkore reduces IT backlogs and
              unlocks custom app creation across the organization
            </motion.p>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={548}
                    height={285}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#00A551] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="bg-[#00A551]/10 text-[#00A551] px-2 py-1 rounded-full">
                      {post.readTime}
                    </span>
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-[#2791D0] font-semibold hover:text-[#00A551] transition-colors duration-300"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
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
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              View More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}

      {/* All Blogs Section */}
      <section className="py-20 bg-white"></section>
    </>
  );
};

export default Blog;
