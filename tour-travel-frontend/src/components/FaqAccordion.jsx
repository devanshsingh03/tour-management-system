import React, { useState } from "react";

const faqs = [
  { q:"What is included?", a:"Guided tours, accommodation, breakfasts; specifics vary per package." },
  { q:"Can I customize?", a:"Yes — choose add-ons or request a bespoke itinerary." },
  { q:"Payment options?", a:"Cards, UPI, and bank transfers supported (Stripe integration available)." },
];

export default function FaqAccordion(){
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">FAQs</h2>
        <div className="space-y-3">
          {faqs.map((f,i)=>(
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <button className="w-full text-left flex justify-between items-center" onClick={()=>setOpen(open===i?null:i)}>
                <span className="font-semibold">{f.q}</span>
                <span>{open===i? "−":"+"}</span>
              </button>
              {open===i && <div className="mt-3 text-gray-300">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
