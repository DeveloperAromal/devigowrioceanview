import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-lime-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/2023-04-06.jpg"
                alt="DevaGowri Interior"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 hidden md:block rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/IMG_9121.jpg"
                alt="Ocean View"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
              Discover DevaGowri
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Nestled by the waves of Kerala’s coast, DevaGowri Homestay blends
              timeless heritage with modern elegance. Since 2005, we’ve welcomed
              guests into our ocean-kissed sanctuary filled with warmth and
              tranquility.
            </p>

            <Link href="/about">
              <button className="bg-lime-500 flex hover:bg-lime-600 text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg">
                Learn More About Us
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="lucide mt-0.5 lucide-arrow-right-icon lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
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
