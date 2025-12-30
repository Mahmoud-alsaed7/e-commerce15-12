export default function ReturnsAndExchanges() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:py-20 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Returns & Exchanges
        </h1>
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Return Policy
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We want you to be completely satisfied with your purchase. If you're not happy with your 
              order, we'll make it right.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                📅 30-Day Return Window
              </h3>
              <p className="text-lg text-blue-800">
                You have 30 days from the delivery date to return or exchange your items.
              </p>
            </div>
            <div className="space-y-4 mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Return Conditions
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold mt-1">•</span>
                  Items must be in original condition with all tags attached
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold mt-1">•</span>
                  Items must be unworn, unwashed, and unused
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold mt-1">•</span>
                  Original packaging should be included when possible
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold mt-1">•</span>
                  Some items may be excluded from returns (see product page for details)
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              How to Return
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-lg text-gray-700">
                    Email us at <span className="font-semibold text-blue-600">returns@shopmart.com</span> 
                    with your order number
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Print Return Label</h3>
                  <p className="text-lg text-gray-700">
                    We'll send you a prepaid return shipping label
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ship Back</h3>
                  <p className="text-lg text-gray-700">
                    Pack your items securely and ship using the provided label
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}