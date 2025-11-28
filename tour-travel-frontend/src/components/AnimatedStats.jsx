import React, { useEffect, useState } from "react";

function Counter({ end }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setNum(end); clearInterval(timer); }
      else setNum(start);
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <div className="text-4xl font-bold">{num}</div>;
}

export default function AnimatedStats() {
  const stats = [
    { label: "Destinations", value: 120 },
    { label: "Travelers", value: 50000 },
    { label: "Countries", value: 20 },
    { label: "Reviews", value: 10000 },
  ];

  return (
    <section className="py-16 px-6 bg-[#081827] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="p-6">
            <Counter end={s.value} />
            <div className="mt-2 text-gray-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
