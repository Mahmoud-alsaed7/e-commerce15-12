

export default function Aboutshopmart() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:py-20 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About ShopMart
        </h1>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          {/* Introduction */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            ShopMart is your one-stop destination for the latest technology, fashion, and lifestyle products. 
            We are committed to providing quality products with fast shipping and excellent customer service.
          </p>

          {/* Our Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To make shopping for quality products easy, convenient, and enjoyable for everyone. 
              We believe that everyone deserves access to the latest and best products at competitive prices.
            </p>
          </section>

          {/* Our Values */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Our Values
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <div>
                  <strong>Quality:</strong> We only sell products that meet our high standards
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <div>
                  <strong>Customer Service:</strong> Your satisfaction is our priority
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <div>
                  <strong>Innovation:</strong> We stay ahead of trends to bring you the latest products
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <div>
                  <strong>Trust:</strong> We build lasting relationships with our customers
                </div>
              </li>
            </ul>
          </section>

          {/* Why Choose ShopMart */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              Why Choose ShopMart?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fast Shipping */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Fast Shipping
                </h3>
                <p className="text-lg text-gray-700">
                  Quick and reliable delivery to your doorstep
                </p>
              </div>

              {/* Quality Guarantee */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Quality Guarantee
                </h3>
                <p className="text-lg text-gray-700">
                  All products are carefully selected and tested
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  24/7 Support
                </h3>
                <p className="text-lg text-gray-700">
                  Our customer service team is always here to help
                </p>
              </div>

              {/* Easy Returns */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Easy Returns
                </h3>
                <p className="text-lg text-gray-700">
                  Hassle-free returns policy for your peace of mind
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}