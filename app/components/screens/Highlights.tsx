import { Bed, Waves, UtensilsCrossed, Car } from "lucide-react";
const highlights = [
  {
    icon: <Bed className="w-8 h-8 text-green-500" />,
    title: "Cozy Rooms",
    description:
      "Comfortable accommodations with modern amenities and traditional touches.",
  },
  {
    icon: <Waves className="w-8 h-8 text-green-500" />,
    title: "Ocean View",
    description:
      "Breathtaking views of the Arabian Sea from your private balcony.",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-green-500" />,
    title: "Local Cuisine",
    description:
      "Authentic Kerala dishes prepared with fresh local ingredients.",
  },
  {
    icon: <Car className="w-8 h-8 text-green-500" />,
    title: "Free Parking",
    description: "Complimentary on-site parking for all our guests.",
  },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-sand-50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-green-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
