"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Mumbai, India",
    image: "https://i.pravatar.cc/100?img=1",
    stars: 5,
    text: "Our stay at DevaGowri was nothing short of magical. The ocean views from our room were breathtaking, and the hosts made us feel like family. The food was exquisite and authentic.",
  },
  {
    name: "Jessica Miller",
    location: "London, UK",
    image: "https://i.pravatar.cc/100?img=2",
    stars: 5,
    text: "I've traveled all over the world, but the hospitality at DevaGowri was remarkable. The sound of waves crashing while you sleep is therapeutic. Will definitely return!",
  },
  {
    name: "Robert Chen",
    location: "Singapore",
    image: "https://i.pravatar.cc/100?img=3",
    stars: 4,
    text: "A perfect blend of traditional Kerala architecture and modern amenities. The hosts arranged a wonderful backwater tour for us. The home-cooked meals were a delight.",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our Guest Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our guests have to say about their stay at DevaGowri
            Oceanview Homestay
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Testimonial Cards */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                      <div className="sm:mr-4 mb-4 sm:mb-0">
                        <Image
                          src={testimonial.image}
                          width={100}
                          height={100}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-ocean-200"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.stars
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      &quote;{testimonial.text}&quote;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  active === index ? "bg-green-500" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
