import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'About Infinity Salesman Tracking - Enterprise Field Sales Management'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Learn about Infinity Salesman Tracking - enterprise-grade field sales management platform for GPS attendance, live tracking, and customer visit management.'
    }
  }, [])

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
            <div className="inline-flex items-center bg-royal-100 text-royal-800 px-6 py-2 rounded-full font-semibold text-sm mb-6 border border-royal-200">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Trusted by 500+ Businesses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-royal-700 via-primary-600 to-royal-600 bg-clip-text text-transparent">
                Transforming Field Sales
              </span>
              <br />
              <span className="text-gray-900">Management in India</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to eliminate attendance fraud and bring complete transparency to field sales operations with GPS-verified tracking technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-royal-600 to-primary-600 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-600 font-medium">Active Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-royal-600 to-primary-600 bg-clip-text text-transparent mb-2">10,000+</div>
                <div className="text-gray-600 font-medium">Field Sales Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-royal-600 to-primary-600 bg-clip-text text-transparent mb-2">35%</div>
                <div className="text-gray-600 font-medium">Productivity Increase</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why We Built This</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We started Infinity Salesman Tracking after witnessing firsthand how businesses struggle with field sales management. Traditional attendance systems relied on trust, leading to widespread fraud where salespeople would mark attendance from home without ever stepping into the field.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Managers had no way to verify if their team was actually meeting customers or just claiming they did. This resulted in wasted salaries, lost opportunities, and zero accountability. We knew there had to be a better way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By combining GPS technology with mobile-first design, we created a solution that's both powerful and incredibly simple to use. No complicated setup, no expensive hardware—just download the app and start tracking in minutes.
              </p>
              
              <div className="bg-gradient-to-br from-royal-50 to-primary-50 rounded-2xl p-8 my-8 border-l-4 border-royal-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-royal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">GPS-Verified Truth:</strong>
                      <span className="text-gray-700"> Every check-in is verified with actual GPS coordinates—no more fake attendance</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-royal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Built for India:</strong>
                      <span className="text-gray-700"> Designed specifically for Indian businesses with pricing that makes sense (₹200/user)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-royal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">5-Minute Setup:</strong>
                      <span className="text-gray-700"> No complex training or installation—your team can start using it immediately</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-royal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Free Forever Plan:</strong>
                      <span className="text-gray-700"> Start with 2 users completely free, upgrade only when you need to scale</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              The Problem We Solve
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Traditional field sales management relies on trust-based systems where managers have no way to verify if their sales team is actually in the field or meeting customers. This creates significant challenges:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Attendance Fraud:</strong>
                    <span className="text-gray-700"> Salesmen mark attendance from home without actual field presence, leading to productivity loss and salary waste</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Zero Visibility:</strong>
                    <span className="text-gray-700"> Managers have no real-time insight into where their team is, what they're doing, or whether customer visits are happening</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Unverified Claims:</strong>
                    <span className="text-gray-700"> No proof of customer meetings or visit completion, making performance evaluation impossible</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Inefficient Routes:</strong>
                    <span className="text-gray-700"> Without tracking, teams follow inefficient routes wasting time, fuel, and customer opportunities</span>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Infinity Salesman Tracking eliminates these problems with GPS-verified attendance, real-time location tracking, and comprehensive visit documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 hover-lift transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">FMCG & Distribution</h3>
                <p className="text-gray-700">
                  Track distributors, route salesmen, and merchandisers covering retail outlets and ensuring product availability
                </p>
              </div>

              <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 hover-lift transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pharmaceutical Sales</h3>
                <p className="text-gray-700">
                  Monitor medical representatives visiting doctors, hospitals, and pharmacies with complete visit documentation
                </p>
              </div>

              <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 hover-lift transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Insurance & Financial Services</h3>
                <p className="text-gray-700">
                  Manage insurance agents, loan officers, and financial advisors meeting clients across territories
                </p>
              </div>

              <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 hover-lift transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology & SaaS Sales</h3>
                <p className="text-gray-700">
                  Track enterprise sales teams conducting demos, presentations, and client meetings across regions
                </p>
              </div>

              <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 hover-lift transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail & Consumer Goods</h3>
                <p className="text-gray-700">
                  Monitor brand promoters, field merchandisers, and sales representatives in retail chains and stores
                </p>
              </div>

              <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 hover-lift transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Estate Sales</h3>
                <p className="text-gray-700">
                  Track property consultants conducting site visits, client meetings, and property inspections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Infinity Salesman Tracking
            </h2>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise-Grade Security & Trust</h3>
                  <p className="text-gray-700">
                    Bank-level data encryption, secure cloud infrastructure, and strict privacy compliance ensure your business data is always protected. We never share or sell your data.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Simple & Intuitive Interface</h3>
                  <p className="text-gray-700">
                    No complex training required. Our mobile app and web dashboard are designed for immediate adoption with zero learning curve. Your team can start tracking in minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable & Scalable Pricing</h3>
                  <p className="text-gray-700">
                    Start free with 2 members forever. Scale affordably at just ₹200 ($5) per member per month. No hidden fees, no contracts, no setup charges.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Data & Analytics</h3>
                  <p className="text-gray-700">
                    Make informed decisions with live dashboards, comprehensive reports, and actionable insights. Track attendance, visits, routes, and performance in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
                  <p className="text-gray-700">
                    Built for field teams on the go. Lightweight mobile app works seamlessly on low-bandwidth connections and offline mode for remote areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-700">
                    Our dedicated support team is available round the clock to help you succeed. Email, chat, and phone support included for all customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/50 to-accent-700/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Field Sales?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of businesses that trust Infinity Salesman Tracking for enterprise-grade field sales management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-50 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-all duration-300 border-2 border-white shadow-lg hover:scale-105"
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

export default About
