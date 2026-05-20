export default function FlyComponentsWebsite() {
  const categories = [
    'Integrated Circuits',
    'Capacitors',
    'Resistors',
    'Connectors',
    'Sensors',
    'Power Modules'
  ]

  const brands = [
    ['Texas Instruments', 'IC Solutions'],
    ['STMicroelectronics', 'MCU & Power'],
    ['Infineon', 'Industrial & Automotive'],
    ['NXP', 'Embedded Systems'],
    ['Murata', 'Passive Components'],
    ['TE Connectivity', 'Connectors']
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">FLY COMPONENTS CO., LTD</h1>
            <p className="text-sm text-gray-500">Electronic Components Supplier</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#linecards" className="hover:text-blue-600">Line Cards</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-blue-700 mb-4">
              Global Electronic Components Supplier
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Reliable Electronic Components Sourcing Partner
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-10">
              FLY COMPONENTS CO., LTD provides professional sourcing solutions for electronic components customers worldwide. We support OEMs, distributors, and industrial buyers with reliable supply chains, fast quotation, and global delivery service.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90 shadow-lg">
                Request a Quote
              </button>

              <button className="border border-gray-400 px-8 py-4 rounded-2xl hover:bg-gray-200">
                View Products
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Why Choose Us</h3>
                <p className="text-gray-600 leading-7">
                  We focus on long-term cooperation, stable sourcing channels, and professional export support for customers in Europe, South Korea, and North America.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="font-semibold mb-2">Fast Quotation</p>
                  <p className="text-gray-500">Quick RFQ response</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="font-semibold mb-2">Global Shipping</p>
                  <p className="text-gray-500">Worldwide delivery</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="font-semibold mb-2">Reliable Supply</p>
                  <p className="text-gray-500">Stable sourcing network</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="font-semibold mb-2">Professional Service</p>
                  <p className="text-gray-500">Export experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-700 uppercase tracking-[0.2em] text-sm mb-3">
              Product Categories
            </p>
            <h2 className="text-4xl font-bold">Electronic Components</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition bg-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-100 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                <p className="text-gray-600 leading-7">
                  High-quality sourcing solutions for industrial, OEM, and commercial applications.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-100 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-700 uppercase tracking-[0.2em] text-sm mb-3">
              About Us
            </p>

            <h2 className="text-4xl font-bold mb-8">
              Professional Electronic Components Trading Company
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              FLY COMPONENTS CO., LTD is dedicated to supplying reliable electronic components and sourcing solutions for global customers.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              We work closely with qualified suppliers and supply chain partners to support industrial automation, consumer electronics, embedded systems, and OEM manufacturing projects.
            </p>

            <p className="text-gray-700 leading-8">
              Our goal is to provide stable supply, competitive pricing, fast response, and professional international trade service.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="space-y-6">
              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Business Type</span>
                <span className="font-semibold">Trading Company</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Main Market</span>
                <span className="font-semibold">EU / USA / Korea</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Products</span>
                <span className="font-semibold">Electronic Components</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Service</span>
                <span className="font-semibold">Cost-Effective & Reliable</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Support</span>
                <span className="font-semibold">OEM / RFQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Line Cards */}
      <section id="linecards" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-700 uppercase tracking-[0.2em] text-sm mb-3">
              Line Cards
            </p>
            <h2 className="text-4xl font-bold">Supported Brands</h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-6 text-lg">Brand</th>
                  <th className="text-left p-6 text-lg">Category</th>
                </tr>
              </thead>

              <tbody>
                {brands.map((brand, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-medium">{brand[0]}</td>
                    <td className="p-6 text-gray-600">{brand[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-400 mb-3">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Send Your RFQ Today
          </h2>

          <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto mb-12">
            Contact us for electronic components sourcing, quotation, and global supply support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="border border-gray-800 rounded-3xl p-8 bg-gray-900">
              <p className="text-gray-400 mb-2">Email</p>
              <p className="font-semibold">sales@flycomponents.com</p>
            </div>

            <div className="border border-gray-800 rounded-3xl p-8 bg-gray-900">
              <p className="text-gray-400 mb-2">WhatsApp</p>
              <p className="font-semibold">+852 9609 4695</p>
            </div>

            <div className="border border-gray-800 rounded-3xl p-8 bg-gray-900">
              <p className="text-gray-400 mb-2">Service</p>
              <p className="font-semibold">Global Electronic Components Supply</p>
            </div>
          </div>

          <form className="bg-white rounded-3xl p-10 text-left max-w-4xl mx-auto text-gray-800 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Part Number / Product"
                className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
              />
            </div>

            <textarea
              placeholder="Please describe your inquiry..."
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 h-40 mb-6 outline-none"
            />

            <button className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
