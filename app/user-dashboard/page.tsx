import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const sensors = [
    "temperature-sensor",
    "humidity-sensor",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
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
      {/* <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-10">
        {sensors.map((name, i) => (
          <Link
            href={`/${name}`}
            key={i}
            className="w-[200px] h-[200px] outline-double bg-white border border-emerald-600 rounded-lg shadow flex flex-col items-center justify-center text-center p-4 transition-all ease-in-out hover:shagow-2xl hover:shadow-emerald-800 hover:border-emerald-800 hover:bg-emerald-50 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-800 focus:ring-opacity-50 outline-emerald-800"
          >
            <Image
              src={getSensorIcon(name)}
              // src={`/${name}.png`} | {`/default-sensor.png`}
              width={64}
              height={64}
              alt={`${name} icon`}
              className="mb-10 transition-transform ease-in-out hover:scale-110"
            />
            <p className="text-stone-800 font-medium font-serif hover:text-emerald-800 hover:text-bold">
              {name}
            </p>
          </Link>
        ))}
      </div> */}

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
                    {sensors.length}
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
                    {sensors.length - 5}
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
                    {sensors.length - 10}
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
            {sensors.map((name, i) => (
              <Link
                href={`/${name}`}
                key={i}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:bg-white hover:border-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:border-emerald-400"
              >
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={getSensorIcon(name)}
                        width={32}
                        height={32}
                        alt={`${name} icon`}
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
                    Type: {name.split("-").join(" ")}
                  </h3>

                  <p className="text-sm text-emerald-700 group-hover:text-emerald-800 transition-colors duration-200">
                    Name: {name}
                  </p>

                  <div className="mt-3 pt-3 border-t border-emerald-100">
                    <p className="text-lg font-bold text-emerald-900">
                      {name.includes("temperature")
                        ? "24°C"
                        : name.includes("humidity")
                        ? "65%"
                        : "78"}
                    </p>
                    <p className="text-sm text-emerald-700">Current reading</p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
