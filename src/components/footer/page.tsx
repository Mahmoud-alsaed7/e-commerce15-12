import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
     <>
     <div className="border-t mt-5">
<div className="container mx-auto w-[80%] ">
          <footer className=" flex gap-10 p-5">
             <div>
              <div className='flex gap-1 mb-3'>
                 <span className="flex justify-center items-center rounded-lg w-15 text-white bg-black">S</span>
                 <h2 className=' font-bold'>ShopMart</h2>
              </div>
              <ul>
                <li className="w-60 mb-3 text-gray-600">Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.</li>
                <li className="w-60 mb-3 text-gray-600 flex">
               <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                       <span className="text-sm">123 Shop Street,Octoper City,DC</span>
              </div>
                  </li>
                <li className="w-60 mb-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>(+20) 01093333333</span>
                    </div>
                  </li>
                <li className="w-60 mb-3 text-gray-600">
                  <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                    <span>support@shopmart.com</span>
                    </div>
                  </li>
              </ul>
             </div>
             <div>
              <h2 className=' font-bold mb-3'>SHOP</h2>
              <ul>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                  <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  Electronics
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                 Fashion
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                Home & Garden
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  Sports
                  </Link>
                </li>
                <li > 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                 Deals
                  </Link>    
                </li>
              </ul>
             </div>
             <div className="ms-15">
              <h2 className="font-bold mb-3" >CUSTOMER SERVICE</h2>
              <ul>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                  <Link href='/contactUs' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  Contact Us
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/helpcenter' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                Help Center
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/TrackYourOrder' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                Track Your Order
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/ReturnsAndExchanges' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  Returns & Exchanges
                   </Link>
                </li>
                <li > 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                 Size Guide
                  </Link>    
                </li>
              </ul>
             </div>
             <div className="ms-15">
              <h2 className="font-bold mb-3" >ABOUT</h2>
              <ul>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                  <Link href='/Aboutshopmart' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  About shopmart
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                Careers
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                Press
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  Investor Relations
                   </Link>
                </li>
                <li > 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                 Sustainability
                  </Link>    
                </li>
              </ul>
             </div>
             <div className="ms-15">
              <h2 className="font-bold mb-3" >POLICIES</h2>
              <ul>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                  <Link href='/PrivacyPolicy' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  Privacy Policy
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/TermsofService' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                Terms of Service
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                Cookie Policy
                  </Link>
                </li>
                <li className="mb-3 text-gray-600 hover:text-black hover:duration-120"> 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                  Shipping Policy
                   </Link>
                </li>
                <li > 
                 <Link href='/categories' className="   mb-3 text-gray-600 hover:text-black hover:duration-120">
                 Refund Policy
                  </Link>    
                </li>
              </ul>
             </div>
          </footer>
      </div>
     </div>
      
     </>
  )
}
