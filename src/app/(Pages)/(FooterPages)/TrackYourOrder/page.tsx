export default function TrackYourOrder() {    
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:py-20 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Track Your Order
        </h1>
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Enter Your Order Information
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="orderNumber" className="block text-lg font-medium text-gray-900 mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  placeholder="Enter your order number"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400 text-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400 text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium text-lg py-4 rounded-full hover:bg-blue-700 transition-colors"
              >
                Track Order
              </button>
            </form>
          </div>

      
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Order Status
            </h2>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <p className="text-gray-600 text-lg">
                Enter your order number and email above to track your order status.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              If you're having trouble tracking your order, please contact our customer service team.
            </p>
            <button className="bg-gray-800 text-white font-medium text-lg py-4 px-10 rounded-full hover:bg-gray-900 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}