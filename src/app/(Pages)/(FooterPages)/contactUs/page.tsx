
import { Mail, Phone, MapPin, Send } from 'lucide-react';
export default function contactUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-black text-white rounded-3xl p-10 lg:p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Email</p>
                  <p className="text-lg font-medium mt-1">support@shopmart.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-medium mt-1">(+20) 01093333333</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Address</p>
                  <p className="text-lg font-medium mt-1">
                    123 Shop Street,<br />
                    October City, DC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            <form className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-700 placeholder-gray-400"
                />
              </div>

             
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors text-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}