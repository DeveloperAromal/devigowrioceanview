import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black dark:bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2023-04-06.jpg"
            alt="Ocean view"
            width={600}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 dark:from-black/80 dark:via-black/60 dark:to-black/90"></div>
        </div>

        {/* Wave Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-48 z-10 pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="fill-white"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,192C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-4 animate-fade-in">
            Escape to Serenity
          </h1>
          <p
            className="text-white dark:text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the bliss of oceanfront living at DevaGowri – where every
            moment feels like a vacation.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/booking">
              <div className="flex items-center justify-center">
                <button className="bg-lime-500 flex hover:bg-lime-600 transition-all duration-300 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105">
                  Book Your Escape{" "}
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
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
