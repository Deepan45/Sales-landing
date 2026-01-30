import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    document.title = 'Infinity Salesman Tracking - Field Sales Attendance & GPS Tracking App'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Track field sales attendance, real-time location, and customer visits with Infinity Salesman Tracking. GPS attendance, live tracking, and visit management for sales teams.'
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-50 via-primary-50 to-white py-16 sm:py-24 overflow-hidden relative min-h-[600px] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-royal-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-royal-400/15 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content with Animations */}
            <div className="text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-royal-100 text-royal-800 px-4 py-2 rounded-full font-semibold text-sm animate-fade-in-down border border-royal-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                #1 Field Sales Tracking Solution
              </div>
              
              {/* Main Heading with Slide In */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-royal-700 via-primary-600 to-royal-600 bg-clip-text text-transparent">
                  Track Your Sales Team
                </span>
                <br />
                <span className="text-gray-900">
                  In Real-Time
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in-up delay-200 max-w-xl">
                GPS attendance verification, live location tracking, and customer visit management for complete field sales control.
              </p>
              
              {/* Key Features */}
              <div className="space-y-3 animate-fade-in-up delay-300">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-royal-500 to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">GPS-verified attendance check-in</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-royal-500 to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Real-time location tracking on map</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-royal-500 to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Customer visit proof with photos</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-400">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-royal-600 via-primary-600 to-royal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Free Trial
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-royal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-royal-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-royal-50 transition-all duration-300 border-2 border-royal-600 hover:border-royal-700 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Watch Demo
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pt-4 animate-fade-in-up delay-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Free for 2 users</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">5-min setup</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Animated Visual */}
            <div className="hidden lg:block relative animate-fade-in delay-300">
              <div className="relative">
                {/* Floating Phone/Device Mockup */}
                <div className="relative z-10 animate-float-slow">
                  <div className="bg-gradient-to-br from-royal-600 to-primary-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-white rounded-2xl p-6 space-y-4">
                      {/* Dashboard Preview */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-royal-100 to-primary-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-royal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Live Tracking</div>
                            <div className="text-xs text-gray-500">8 members active</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-royal-50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-royal-700">124</div>
                          <div className="text-xs text-gray-600">Visits Today</div>
                        </div>
                        <div className="bg-primary-50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-primary-700">98%</div>
                          <div className="text-xs text-gray-600">Attendance</div>
                        </div>
                      </div>
                      
                      {/* Activity List */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                          <div className="w-8 h-8 bg-royal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JD</div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-gray-900">John Doe</div>
                            <div className="text-xs text-gray-500">Visited ABC Corp</div>
                          </div>
                          <div className="text-xs text-green-600 font-medium">2m ago</div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold">SM</div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-gray-900">Sarah Miller</div>
                            <div className="text-xs text-gray-500">Checked In</div>
                          </div>
                          <div className="text-xs text-green-600 font-medium">5m ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent-400 rounded-2xl shadow-lg animate-float opacity-80 flex items-center justify-center transform rotate-12">
                  <span className="text-white font-bold text-2xl">₹40</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-2xl shadow-lg animate-bounce-subtle opacity-80 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-700 to-gray-900 bg-clip-text text-transparent mb-4">
              Sales Teams Face Critical Challenges
            </h2>
            <p className="text-lg text-gray-600">
              Traditional attendance systems fail to provide visibility into field operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fake Attendance Reporting</h3>
              <p className="text-gray-600 text-sm">
                Salesmen mark attendance from home without actual field presence
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Field Sales Visibility</h3>
              <p className="text-gray-600 text-sm">
                Managers cannot see where their team is or what they're doing in real-time
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 hover-lift animate-fade-in-up delay-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Missed Customer Visits</h3>
              <p className="text-gray-600 text-sm">
                No proof of customer meetings or visit completion verification
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 hover-lift animate-fade-in-up delay-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Low Productivity</h3>
              <p className="text-gray-600 text-sm">
                Untracked routes and inefficient field coverage waste time and resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
              Complete Field Sales Management Platform
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to manage, track, and optimize your field sales operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover:border-primary-200 border border-transparent group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GPS Attendance Check-In/Out</h3>
              <p className="text-gray-600">
                Location-verified attendance with automatic GPS coordinates capture. Prevent fake attendance and ensure field presence verification.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover:border-primary-200 border border-transparent">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Salesman Location Tracking</h3>
              <p className="text-gray-600">
                Real-time GPS tracking shows exact location of every field salesman on a live map for complete visibility and monitoring.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover:border-primary-200 border border-transparent">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Visit Tracking with Proof</h3>
              <p className="text-gray-600">
                Capture customer visits with photos, notes, and GPS verification. Complete audit trail for every customer interaction.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover:border-primary-200 border border-transparent">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Route Planning vs Actual</h3>
              <p className="text-gray-600">
                Compare planned beat routes with actual travel patterns. Optimize territory coverage and identify efficiency gaps.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover:border-primary-200 border border-transparent">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New Customer Onboarding</h3>
              <p className="text-gray-600">
                Add new customers directly from mobile with location tagging, contact details, and business information capture.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover:border-primary-200 border border-transparent">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manager Dashboard & Reports</h3>
              <p className="text-gray-600">
                Comprehensive analytics dashboard with attendance reports, visit summaries, and performance metrics for data-driven decisions.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover-lift hover:border-primary-200 border border-transparent">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Alerts & Geo-Fencing</h3>
              <p className="text-gray-600">
                Set up geographic boundaries and receive instant alerts when team members enter or exit designated areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-royal-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-royal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-royal-700 via-primary-600 to-royal-600 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple three-step process to manage your entire field sales team
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 animate-fade-in-up">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-600 to-primary-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl">
                    1
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Check-In via Mobile</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sales team marks attendance using mobile app with GPS location verification at the start of their day. The system captures exact coordinates and timestamp, preventing fake attendance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">GPS location verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Timestamp recorded</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Instant notification to manager</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in delay-200">
                <div className="bg-gradient-to-br from-royal-100 to-primary-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                      <div className="w-12 h-12 bg-gradient-to-br from-royal-500 to-primary-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Check In</div>
                        <div className="text-sm text-gray-500">09:15 AM</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Location verified</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">GPS Coordinates</div>
                        <div className="text-sm font-mono text-gray-900">28.7041° N, 77.1025° E</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Divider */}
            <div className="flex justify-center mb-16">
              <svg className="w-8 h-8 text-royal-400 animate-bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in delay-300">
                <div className="bg-gradient-to-br from-primary-100 to-royal-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-royal-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">ABC Corporation</div>
                        <div className="text-sm text-gray-500">Customer Visit</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Visit Time</div>
                        <div className="text-sm font-semibold text-gray-900">10:45 AM - 11:30 AM</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs">+2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-up delay-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-royal-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl">
                    2
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Visit Customers</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Salesmen visit customers, log visits with photos and notes, and track all interactions throughout the day. Complete visit documentation with proof.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Photo documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Visit notes & feedback</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">GPS-tagged location</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Divider */}
            <div className="flex justify-center mb-16">
              <svg className="w-8 h-8 text-royal-400 animate-bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up delay-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-600 to-primary-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl">
                    3
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Manager Tracks Live</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Managers monitor real-time location, review visit reports, and analyze performance from dashboard. Complete visibility and control over field operations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Live map tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Performance analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Automated reports</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in delay-600">
                <div className="bg-gradient-to-br from-royal-100 to-primary-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b">
                      <div className="font-semibold text-gray-900">Team Overview</div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-700">8</div>
                        <div className="text-xs text-gray-600">Active Now</div>
                      </div>
                      <div className="bg-royal-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-royal-700">24</div>
                        <div className="text-xs text-gray-600">Visits Today</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 text-xs">
                          <div className="font-medium text-gray-900">John at ABC Corp</div>
                          <div className="text-gray-500">2.3 km away</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 text-xs">
                          <div className="font-medium text-gray-900">Sarah traveling</div>
                          <div className="text-gray-500">En route</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      {/* <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/50 to-accent-700/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Transform Your Sales Operations
            </h2>
            <p className="text-lg text-primary-100">
              Measurable impact on productivity, accountability, and revenue
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover-lift hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">35%</div>
              <h3 className="text-xl font-semibold mb-3">Higher Productivity</h3>
              <p className="text-primary-100">
                Optimize routes and eliminate wasted time with real-time tracking and efficient territory management
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover-lift hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">100%</div>
              <h3 className="text-xl font-semibold mb-3">Full Control</h3>
              <p className="text-primary-100">
                Complete visibility into field operations with GPS-verified attendance and customer visit proof
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover-lift hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Transparency</h3>
              <p className="text-primary-100">
                Live location tracking and instant visit updates keep managers informed at all times
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover-lift transition-all duration-300 hover:border-primary-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">₹0</div>
                <p className="text-gray-600">Up to 2 team members</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">GPS attendance tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Live location tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Customer visit logging</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Basic reports</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-300 transition-all duration-300 hover:scale-105">
              
                Start Free
              </Link>
            </div>

            {/* Paid Plan */}
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 p-8 rounded-2xl shadow-xl text-white transform md:scale-105 hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-gradient border-2 border-accent-400">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-accent-400 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-5xl font-bold mb-2">₹200</div>
                <p className="text-primary-100">per member per month</p>
                <p className="text-sm text-primary-100 mt-2">($5 USD equivalent)</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Free plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics & reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Route planning & optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Geo-fencing & alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              
                Get Started
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Start free with 2 members, upgrade anytime as your team grows
          </p>
        </div>
      </section>

      {/* Affiliate Program Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-accent-50 via-primary-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-200/10 to-primary-200/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full font-semibold mb-4 shadow-lg animate-bounce-subtle">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Earn Money with Our Affiliate Program
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
                Refer & Earn ₹40 Per User
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our affiliate program and earn passive income by referring businesses to Infinity Salesman Tracking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover-lift transition-all duration-300 border-2 border-accent-200">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Easy to Start</h3>
                <p className="text-gray-600 text-center">
                  Sign up for free, get your unique referral link, and start sharing with your network immediately
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover-lift transition-all duration-300 border-2 border-primary-200">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">₹40 Per User</h3>
                <p className="text-gray-600 text-center">
                  Earn ₹40 for every user who signs up through your referral link and becomes a paying customer
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover-lift transition-all duration-300 border-2 border-accent-200">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Lifetime Earnings</h3>
                <p className="text-gray-600 text-center">
                  Receive ₹40 for each referred user who subscribes. No limits on how much you can earn
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 p-8 sm:p-12 rounded-3xl shadow-2xl text-white text-center animate-gradient">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Start Earning Today</h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Perfect for consultants, software resellers, business coaches, and anyone with connections to companies using field sales teams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No investment required</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Real-time tracking</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Instant payouts</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-white text-primary-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Join Affiliate Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
              Control Your Field Sales Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of businesses that have transformed their field sales operations with GPS-verified tracking and real-time visibility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-xl hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-50 transition-all duration-300 border-2 border-primary-600 hover:border-accent-600 hover:scale-105 shadow-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
