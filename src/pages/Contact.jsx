import { useState, useEffect } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

  useEffect(() => {
    document.title = 'Contact Infinity Salesman Tracking - Book Your Free Demo'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Contact Infinity Salesman Tracking for field sales GPS tracking solutions. Book a free demo or start your free trial with 2 members today.'
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', message: '' })
          setSubmitted(false)
        }, 3000)
      } else {
        throw new Error(data.message || 'Failed to submit form')
      }
    } catch (err) {
      setError(err.message || 'Failed to submit form. Please try again.')
      console.error('Error submitting form:', err)
    } finally {
      setLoading(false)
    }
  }

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
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              We'll respond within 24 hours
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-royal-700 via-primary-600 to-royal-600 bg-clip-text text-transparent">
                Contact Infinity
              </span>
              <br />
              <span className="text-gray-900">Salesman Tracking</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-200">
              Get started with GPS-verified field sales tracking. Book a free demo or speak with our sales team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Book Your Free Demo
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get in touch with you within 24 hours to schedule your personalized demo and answer any questions.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-green-900">Thank you for contacting us!</h3>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-red-900">Error</h3>
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                      placeholder="Your Company Pvt Ltd"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition-all duration-300 resize-none focus:scale-[1.02] focus:shadow-lg"
                      placeholder="Tell us about your field sales team size and requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className="w-full bg-gradient-to-r from-royal-600 via-primary-600 to-royal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? 'Sending...' : 'Book Demo'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-royal-50 via-primary-50 to-royal-100 rounded-2xl p-8 mb-8 border border-royal-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-royal-600 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                        <p className="text-gray-600 text-sm mb-1">info@infinitysalesman.com</p>
                        <p className="text-gray-600 text-sm">support@infinitysalesman.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-royal-600 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-600 text-sm">Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-royal-600 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                        <p className="text-gray-600 text-sm">
                          Our support team is available round the clock to help you with any questions or technical issues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Why Businesses Choose Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Free forever plan for 2 members</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Setup in under 5 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">No credit card required</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Bank-grade security</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Cancel anytime, no contracts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover-lift transition-all duration-300 hover:shadow-lg hover:border-royal-200 border border-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can we get started?
                </h3>
                <p className="text-gray-600">
                  You can start tracking your team within 5 minutes. Simply sign up, add your team members, and they can download the mobile app and start checking in immediately.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover-lift transition-all duration-300 hover:shadow-lg hover:border-royal-200 border border-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer a free trial?
                </h3>
                <p className="text-gray-600">
                  Yes! Our free forever plan includes up to 2 team members with full access to GPS attendance, live tracking, and customer visit management. No credit card required.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover-lift transition-all duration-300 hover:shadow-lg hover:border-royal-200 border border-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What happens during the demo?
                </h3>
                <p className="text-gray-600">
                  During the 30-minute demo, we'll walk you through the platform, show you how to track attendance and visits, demonstrate the manager dashboard, and answer all your questions about implementation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover-lift transition-all duration-300 hover:shadow-lg hover:border-royal-200 border border-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is training required for my team?
                </h3>
                <p className="text-gray-600">
                  No formal training needed. The mobile app is intuitive and designed for field teams. Most users are fully operational within the first day. We provide video tutorials and 24/7 support.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover-lift transition-all duration-300 hover:shadow-lg hover:border-royal-200 border border-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I upgrade or downgrade anytime?
                </h3>
                <p className="text-gray-600">
                  Absolutely. You can add or remove team members anytime, and billing is adjusted automatically. No contracts, no penalties for changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
