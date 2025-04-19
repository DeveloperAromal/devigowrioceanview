import Image from "next/image";
import Link from "next/link";
export default function CTA() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?q=80&w=1920&auto=format&fit=crop"
          alt="Ocean view"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
            Ready for an Unforgettable Coastal Experience?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-900">
            Book your stay at DevaGowri Oceanview Homestay and create memories
            that will last a lifetime. Limited rooms available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking">
              <button className="bg-lime-600 border-2 backdrop-blur-xl border-white text-white px-8 py-4 w-full sm:w-auto rounded-3xl hover:bg-lime-700 transition-all">
                Book Your Stay
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-lime-600 flex text-white border-2  hover:bg-lime-600 px-8 py-4 w-full sm:w-auto rounded-3xl backdrop-blur-xl">
                Contact Us
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
