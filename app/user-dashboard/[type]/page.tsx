"use client";
import { useParams } from "next/navigation";
import LineChart from "@/app/ui/user-dashboard/LineChart";

export default function Page() {
  const params = useParams();
  const sensorType = params.type;

  return (
    <div>
      {sensorType === "temperature-sensor" && (
        <>
          <LineChart />
        </>
      )}

      {sensorType === "humidity-sensor" && (
        <>
          <LineChart />
        </>
      )}
    </div>
  );
}
