"use client";
import { MapPin, Cloud, CloudSun, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
}

export default function Facilities() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const apiKey = "59b6a3e1f2114d6d8e591947251704";
  const location = "Varkala";

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data: WeatherData) => setWeather(data))
      .catch((error) => console.error("Error fetching weather data: ", error));
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-sky-100 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-950 mb-2">
            Our Location
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Situated along the pristine coastline of Kerala, with easy access to
            local attractions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weather Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6 order-2 lg:order-1">
            <h3 className="font-playfair text-xl font-semibold mb-4 text-indigo-600">
              Current Weather
            </h3>
            <div className="flex flex-col space-y-4">
              {weather ? (
                <>
                  <div className="flex items-center justify-center">
                    <Sun className="h-16 w-16 text-yellow-400 mr-4" />
                    <div>
                      <p className="text-4xl font-semibold text-gray-800">
                        {weather.current.temp_c}°C
                      </p>
                      <p className="text-gray-600">
                        {weather.current.condition.text}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="flex flex-col items-center">
                        <CloudSun className="h-6 w-6 text-gray-500 mb-1" />
                        <p className="text-sm font-medium text-indigo-600">
                          Tomorrow
                        </p>
                        <p className="text-sm text-gray-500">27°C</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <Cloud className="h-6 w-6 text-gray-500 mb-1" />
                        <p className="text-sm font-medium text-indigo-600">
                          Wed
                        </p>
                        <p className="text-sm text-gray-500">26°C</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <Sun className="h-6 w-6 text-gray-500 mb-1" />
                        <p className="text-sm font-medium text-indigo-600">
                          Thu
                        </p>
                        <p className="text-sm text-gray-500">29°C</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-center text-gray-500">Loading weather...</p>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-80 lg:h-full">
              <iframe
                title="DevaGowri Homestay Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.4397647730457!2d76.68804567458405!3d8.756053191294798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ef8549c4cfa5%3A0x587385dba960f27d!2sOcean%20View%20Varkala%20by%20VOYE%20HOMES!5e1!3m2!1sen!2sin!4v1744882045101!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start space-x-3">
            <MapPin className="text-red-500 h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-1 text-indigo-600">
                DevaGowri Oceanview Homestay
              </h3>
              <p className="text-gray-600 mb-2">
                Beach Road, Fort Kochi, Kerala, India - 682001
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <h4 className="font-medium text-indigo-600 mb-1">
                    From Airport:
                  </h4>
                  <p className="text-sm text-gray-600">45 min drive (23 km)</p>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-600 mb-1">
                    From Railway Station:
                  </h4>
                  <p className="text-sm text-gray-600">20 min drive (8 km)</p>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-600 mb-1">
                    From Bus Stand:
                  </h4>
                  <p className="text-sm text-gray-600">15 min drive (5 km)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
