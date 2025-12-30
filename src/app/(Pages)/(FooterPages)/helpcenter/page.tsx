
export default function helpcenter() {
  return (
    <>
     <div className="max-w-3xl mx-auto space-y-8">
  <div className="space-y-6">
    <h1 className='text-center text-7xl'>Help us</h1>
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
      <p className="mt-2 text-gray-600">
        We accept all major credit cards, PayPal, and other secure payment methods.
      </p>
    </div>
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">How long does shipping take?</h3>
      <p className="mt-2 text-gray-600">
        Standard shipping takes 3-5 business days. Express shipping options are available for faster delivery.
      </p>
    </div>
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">Can I return or exchange items?</h3>
      <p className="mt-2 text-gray-600">
        Yes, we offer a 30-day return policy for most items. Items must be in original condition with tags attached.
      </p>
    </div>
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">How do I track my order?</h3>
      <p className="mt-2 text-gray-600">
        Once your order ships, you'll receive a tracking number via email. You can also track your order in your account.
      </p>
    </div>
  </div>
  <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm text-center">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
    <p className="text-gray-600 mb-8">
      If you can't find the answer you're looking for, our customer service team is here to help.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
        Contact Us
      </a>
      <a href="mailto:support@shopmart.com" className="inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition">
        Email Support
      </a>
    </div>
  </div>
</div> 
    </>
  )
}
