import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">DevaGowri</h3>
            <p className="text-gray-300 text-sm">
              Experience the bliss of oceanfront living at our family-run
              homestay. Traditional Kerala hospitality meets modern comfort.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                className="text-white hover:text-ocean-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-white hover:text-ocean-300 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-y-2">
              <Link
                href="/"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/rooms"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Rooms & Tariff
              </Link>
              <Link
                href="/gallery"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  DevaGowri Homestay, Beach Road, Kerala, India - 682XXX
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <p className="text-gray-300 text-sm">info@devagowri.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to get special offers and latest news from DevaGowri.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-300 border-2 border-l-neutral-700 border-t-neutral-700 border-b-neutral-700 border-r-black"
              />
              <button className="bg-sky-500 hover:bg-ocean-600 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevaGowri Oceanview Homestay. All
              rights reserved. Powered by
              <span className="text-blue-700">
                <Link href="https://www.instagram.com/__nymora__"> Nymora</Link>
              </span>
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
