

import React from 'react';

export default function TermsofService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:py-20 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Terms of Service
        </h1>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          {/* Last Updated */}
          <p className="text-base text-gray-600 text-center mb-12">
            Last updated: 9/20/2025
          </p>

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Acceptance of Terms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              By accessing and using ShopMart, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          {/* Use License */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Use License
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on ShopMart for personal, non-commercial transitory viewing only.
            </p>
          </section>

          {/* Product Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Product Information
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.
            </p>
          </section>

          {/* Pricing and Payment */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Pricing and Payment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              All prices are subject to change without notice. Payment is due at the time of purchase.
            </p>
          </section>

          {/* Returns and Refunds */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Returns and Refunds
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Please refer to our <a href="/returns" className="text-blue-600 hover:underline font-medium">Returns & Exchanges</a> page for detailed information on our return and refund policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}