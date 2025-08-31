import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const sensorsType = [
    "temperature-sensor",
    "humidity-sensor",
  ];

  const getSensorIcon = (name: string) => {
    if (name.includes("temperature")) {
      return "/temperature-sensor.png";
    }
    if (name.includes("humidity")) {
      return "/humidity-sensor.png";
    }
    return "/default-sensor.png";
  };

  return (
    <div
      className={`${lusitana.className} min-h-screen bg-gradient-to-br p-4 bg-stone-50`}
    >
      <div className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">
              ~. MY SENSORS .~
            </h1>
            <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
              Monitor and manage your connected sensors from this central
              dashboard
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-700 mb-1">Total Sensors</p>
                  <p className="text-2xl font-bold text-emerald-800">
                    {sensorsType.length}
                  </p>
                </div>

                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-700 mb-1">Active</p>
                  <p className="text-2xl font-bold text-emerald-800">
                    {sensorsType.length - 5}
                  </p>
                </div>

                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-700 mb-1">Alert</p>
                  <p className="text-2xl font-bold text-emerald-800">
                    {sensorsType.length - 10}
                  </p>
                </div>

                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-amber-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {sensorsType.map((type, i) => (
              <Link
                href={`/user-dashboard/${type}`}
                key={i}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:bg-white hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500"
              >
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={getSensorIcon(type)}
                        width={32}
                        height={32}
                        alt={`${type} icon`}
                        className="transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-900 border border-emerald-300">
                      Online
                    </span>
                  </div>

                  <h3 className="font-semi-bold text-emerald-900 mb-1 group-hover:text-emerald-600 transition-colors duration-200">
                    Type: {type.split("-").join(" ")}
                  </h3>

                  <p className="text-sm text-emerald-700 group-hover:text-emerald-800 transition-colors duration-200">
                    Name: {type}
                  </p>

                  <div className="mt-3 pt-3 border-t border-emerald-100">
                    <p className="text-lg font-bold text-emerald-900">
                      {type.includes("temperature")
                        ? "24°C"
                        : type.includes("humidity")
                        ? "65%"
                        : "78"}
                    </p>
                    <p className="text-sm text-emerald-700">Current reading</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2x opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
