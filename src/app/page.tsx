/** @format */

import dynamic from "next/dynamic";
import Image from "next/image";

const NoSSR = dynamic(() => import("@/components/Navbar"), { ssr: false });

// https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=3a6361e0b290e5b3a9cdd6928941a73c&cnt=56
export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <NoSSR />
    </div>
  );
}
