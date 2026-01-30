import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Blog() {
  useEffect(() => {
    document.title = 'Field Sales Insights & Updates - Infinity Salesman Tracking Blog'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Expert insights on field sales management, GPS tracking, attendance systems, and sales productivity. Learn how to optimize your field sales operations.'
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'How to Track Field Sales Team Effectively in 2026',
      excerpt: 'Discover proven strategies and modern technologies to monitor your field sales team in real-time. Learn about GPS tracking, attendance verification, and performance analytics that increase productivity by 35%.',
      category: 'Best Practices',
      readTime: '8 min read',
      date: 'January 25, 2026'
    },
    {
      id: 2,
      title: 'Benefits of GPS Attendance for Sales Teams',
      excerpt: 'Explore how GPS-based attendance systems eliminate fake check-ins, verify field presence, and provide location proof. Understand the ROI of implementing GPS attendance tracking for your sales organization.',
      category: 'Technology',
      readTime: '6 min read',
      date: 'January 20, 2026'
    },
    {
      id: 3,
      title: 'How Sales Visit Tracking Improves Productivity',
      excerpt: 'Learn how documenting customer visits with photos, notes, and GPS verification increases accountability and helps managers identify productivity patterns. Real case studies show 40% improvement in visit completion rates.',
      category: 'Productivity',
      readTime: '7 min read',
      date: 'January 15, 2026'
    },
    {
      id: 4,
      title: 'Best Salesman Tracking Apps for Businesses in 2026',
      excerpt: 'Comprehensive comparison of top salesman tracking applications. Features to look for, pricing analysis, and why businesses choose Infinity Salesman Tracking for enterprise-grade field sales management.',
      category: 'Product Reviews',
      readTime: '10 min read',
      date: 'January 10, 2026'
    },
    {
      id: 5,
      title: 'Route Optimization Strategies for Field Sales Teams',
      excerpt: 'Maximize territory coverage and reduce travel time with intelligent route planning. Learn how to analyze planned vs actual routes to identify inefficiencies and optimize your sales team\'s daily schedule.',
      category: 'Strategy',
      readTime: '9 min read',
      date: 'January 5, 2026'
    },
    {
      id: 6,
      title: 'Preventing Attendance Fraud in Field Sales Organizations',
      excerpt: 'Address the critical issue of fake attendance reporting that costs businesses thousands monthly. Discover technology-driven solutions including GPS verification, geo-fencing, and real-time check-in validation.',
      category: 'Management',
      readTime: '7 min read',
      date: 'December 30, 2025'
    },
    {
      id: 7,
      title: 'Real-Time Location Tracking: Privacy vs Productivity',
      excerpt: 'Navigate the balance between monitoring field sales teams and respecting privacy. Best practices for implementing location tracking that employees accept while maintaining complete operational visibility.',
      category: 'Legal & Compliance',
      readTime: '8 min read',
      date: 'December 25, 2025'
    },
    {
      id: 8,
      title: 'Customer Visit Management: Complete Guide for Sales Managers',
      excerpt: 'Master the art of managing customer visits with proof documentation, visit scheduling, and performance tracking. Learn how top performing sales teams achieve 90%+ visit completion rates.',
      category: 'Best Practices',
      readTime: '11 min read',
      date: 'December 20, 2025'
    },
    {
      id: 9,
      title: 'Mobile Sales Force Automation: Trends and Benefits',
      excerpt: 'Understand how mobile technology is transforming field sales operations. Explore automation capabilities from attendance to order booking and how it reduces administrative burden by 50%.',
      category: 'Technology',
      readTime: '9 min read',
      date: 'December 15, 2025'
    },
    {
      id: 10,
      title: 'Building High-Performance Field Sales Teams with Data',
      excerpt: 'Leverage analytics and reporting to identify top performers, coach underperformers, and optimize territories. Data-driven field sales management strategies that increase revenue by 25-40%.',
      category: 'Analytics',
      readTime: '10 min read',
      date: 'December 10, 2025'
    },
    {
      id: 11,
      title: 'Geo-Fencing for Field Sales: Use Cases and Implementation',
      excerpt: 'Set up virtual boundaries around customer locations, territories, and restricted areas. Receive automatic alerts when sales team enters or exits zones for enhanced accountability and security.',
      category: 'Technology',
      readTime: '6 min read',
      date: 'December 5, 2025'
    },
    {
      id: 12,
      title: 'FMCG Distribution: How Technology Improves Route Coverage',
      excerpt: 'Case studies from FMCG and distribution companies showing how GPS tracking and route analytics improve market coverage, reduce stockouts, and increase distributor efficiency by tracking every retail outlet visit.',
      category: 'Industry Insights',
      readTime: '8 min read',
      date: 'November 30, 2025'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-50 via-primary-50 to-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-royal-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-royal-100 text-royal-800 px-6 py-2 rounded-full font-semibold text-sm mb-6 border border-royal-200 animate-fade-in-down">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Expert Insights & Best Practices
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-royal-700 via-primary-600 to-royal-600 bg-clip-text text-transparent">
                Field Sales Insights
              </span>
              <br />
              <span className="text-gray-900">& Updates</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-200">
              Expert guidance on field sales management, GPS tracking technology, and sales productivity optimization
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group hover-lift hover:border-royal-200">
                
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-royal-700 bg-royal-100 px-3 py-1 rounded-full border border-royal-200">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-royal-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Link 
                        to="/contact"
                        className="text-royal-600 font-semibold text-sm hover:text-royal-700 transition-all duration-300 inline-flex items-center group">
                      
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Field Sales Trends
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive expert insights, product updates, and best practices for field sales management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-300 focus:scale-105"
              />
              <button className="bg-gradient-to-r from-royal-600 via-primary-600 to-royal-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-royal-600 via-primary-600 to-royal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-800/50 to-primary-700/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Start tracking your field sales team with GPS attendance, live location, and customer visit management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-royal-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-royal-50 transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-2xl"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="bg-royal-800/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-royal-900 transition-all duration-300 border-2 border-white shadow-xl hover:scale-105 backdrop-blur-sm"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
