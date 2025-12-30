// import { Mail, MapPin, Phone } from "lucide-react";
// import Link from "next/link";

// export default function Footer() {
//   return (
//      <>
//      <div className="border-t mt-5">
// <div className="container mx-auto w-[80%] ">
//           <footer className=" flex gap-10 p-5">
//              <div>
//               <div className='flex xl:flex-col xl:gap-4 gap-1 mb-3'>
//                  <span className="flex justify-center items-center rounded-lg w-15 text-white bg-black">S</span>
//                  <h2 className=' font-bold'>ShopMart</h2>
//               </div>
//               <ul>
//                 <li className="w-60 mb-3 text-gray-600">Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.</li>
//                 <li className="w-60 mb-3 text-gray-600 flex">
//                <div className="flex items-center gap-2">
//                   <MapPin className="w-5 h-5" />
//                        <span className="text-sm">123 Shop Street,Octoper City,DC</span>
//               </div>
//                   </li>
//                 <li className="w-60 mb-3 text-gray-600">
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-5 h-5" />
//                     <span>(+20) 01093333333</span>
//                     </div>
//                   </li>
//                 <li className="w-60 mb-3 text-gray-600">
//                   <div className="flex items-center gap-2">
//                         <Mail className="w-5 h-5" />
//                     <span>support@shopmart.com</span>
//                     </div>
//                   </li>
//               </ul>
//              </div>
//              <div>
//               <h2 className=' font-bold mb-3'>SHOP</h2>
//               <ul>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                   <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   Electronics
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                  Fashion
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                 Home & Garden
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   Sports
//                   </Link>
//                 </li>
//                 <li > 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                  Deals
//                   </Link>    
//                 </li>
//               </ul>
//              </div>
//              <div className="ms-15">
//               <h2 className="font-bold mb-3" >CUSTOMER SERVICE</h2>
//               <ul>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                   <Link href='/contactUs' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   Contact Us
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/helpcenter' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                 Help Center
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/TrackYourOrder' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                 Track Your Order
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/ReturnsAndExchanges' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   Returns & Exchanges
//                    </Link>
//                 </li>
//                 <li > 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                  Size Guide
//                   </Link>    
//                 </li>
//               </ul>
//              </div>
//              <div className="ms-15">
//               <h2 className="font-bold mb-3" >ABOUT</h2>
//               <ul>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                   <Link href='/Aboutshopmart' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   About shopmart
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                 Careers
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                 Press
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   Investor Relations
//                    </Link>
//                 </li>
//                 <li > 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                  Sustainability
//                   </Link>    
//                 </li>
//               </ul>
//              </div>
//              <div className="ms-15">
//               <h2 className="font-bold mb-3" >POLICIES</h2>
//               <ul>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                   <Link href='/PrivacyPolicy' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   Privacy Policy
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/TermsofService' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                 Terms of Service
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                 Cookie Policy
//                   </Link>
//                 </li>
//                 <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                   Shipping Policy
//                    </Link>
//                 </li>
//                 <li > 
//                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
//                  Refund Policy
//                   </Link>    
//                 </li>
//               </ul>
//              </div>
//           </footer>
//       </div>
//      </div>
      
//      </>
//   )
// }
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-black flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-black">ShopMart</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>123 Shop Street, Octoper City, DC 12345</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                <span>(+20) 01093333333</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                <span>support@shopmart.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold text-sm mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Electronics</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Fashion</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Home &amp; Garden</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Sports</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Deals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-sm mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/contactUs">Contact Us</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/helpcenter">Help Center</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/TrackYourOrder">Track Your Order</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/ReturnsAndExchanges">Returns &amp; Exchanges</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-sm mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/Aboutshopmart">About shopmart</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Careers</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Press</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Investor Relations</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/categories">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-sm mb-4">POLICIES</h3>
            <ul className="space-y-2">
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/PrivacyPolicy">Privacy Policy</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/TermsofService">Terms of Service</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/cookie-policy">Cookie Policy</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/shipping-policy">Shipping Policy</Link></li>
              <li><Link className="text-gray-600 text-sm hover:text-black transition-colors" href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}