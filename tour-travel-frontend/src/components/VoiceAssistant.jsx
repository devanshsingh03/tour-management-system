// src/components/VoiceAssistant.jsx
import React, { useEffect, useRef, useState } from "react";

// Floating Chat Bubble + Voice + Suggestions
// Uses Web Speech API for recognition + synthesis (fallbacks gracefully)
// Placeholder assistant icon: use uploaded file path below (will be transformed by environment)
const assistantIcon = "/mnt/data/Screenshot (1745).png";

export default function VoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([
    { from: "assistant", text: "Hi — say something like: 'Find beach tours in Bali'" },
  ]);
  const [input, setInput] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Setup Speech Recognition if available
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onerror = (e) => {
      console.warn("Speech recognition error", e);
      setListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      addUserMessage(transcript);
      // Here you would send `transcript` to your AI backend or Alan/other SDK
      // For demo we call simpleLocalReply
      setTimeout(() => simpleLocalReply(transcript), 400);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    const r = recognitionRef.current;
    if (!r) {
      alert("Speech recognition not available on this browser.");
      return;
    }
    try {
      r.start();
    } catch (e) {
      // sometimes start throws if called multiple times quickly
      console.warn(e);
    }
  };

  const stopListening = () => {
    const r = recognitionRef.current;
    if (r) r.stop();
  };

  const addUserMessage = (text) => {
    setMessages((m) => [...m, { from: "user", text }]);
  };

  const addAssistantMessage = (text) => {
    setMessages((m) => [...m, { from: "assistant", text }]);
    // speak the reply
    speakText(text);
  };

  const simpleLocalReply = (text) => {
    // Very simple rule-based demo replies. Replace with real AI call.
    const t = text.toLowerCase();
    if (t.includes("beach")) {
      addAssistantMessage("I found 12 beach tours in Bali. Do you want to filter by price or dates?");
    }
    else if (t.includes("admin") || t.includes("admin panel")) {
  addAssistantMessage("Opening admin login…");
  window.location.href = "/admin/login";
}
else if (t.includes("create admin") || t.includes("admin signup")) {
  addAssistantMessage("Opening admin signup…");
  window.location.href = "/admin/signup";
}
 else if (t.includes("price") || t.includes("cheap")) {
      addAssistantMessage("Showing affordable options under ₹30,000. Want to book one?");
    } else if (t.includes("book")) {
      addAssistantMessage("Great — I can open the booking page for the selected tour. Shall I proceed?");
    } else if (t.includes("help") || t.includes("what can you do")) {
      addAssistantMessage("I can search tours, open booking, show popular places, and give travel tips.");
    } else {
      addAssistantMessage("Nice! I heard: '" + text + "'. Tell me if you want to search tours, book, or filter results.");
    }
  };

  const speakText = (text) => {
    if (!window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  const handleManualSend = () => {
    if (!input.trim()) return;
    addUserMessage(input.trim());
    setInput("");
    setTimeout(() => simpleLocalReply(input.trim()), 300);
  };

  const suggestionList = [
    "Show beach tours in Bali",
    "Find romantic getaways",
    "Budget trips under 30000",
    "Book a 5-day mountain tour"
  ];

  return (
    <div>
      {/* Floating button */}
      <div className="fixed right-6 bottom-6 z-50">
        <div className="flex items-end flex-col gap-3">

          {/* Suggestion quick buttons (small) */}
          {open && (
            <div className="mb-2 flex flex-col gap-2">
              {suggestionList.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { addUserMessage(s); simpleLocalReply(s); }}
                  className="text-sm px-3 py-2 rounded-full bg-white/7 hover:bg-white/10 transition backdrop-blur" 
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Chat bubble */}
          {open && (
            <div className="w-80 md:w-96 bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-lg shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img src={assistantIcon} alt="assistant" className="w-8 h-8 rounded-md object-cover" />
                  <div>
                    <div className="text-sm font-semibold">TourX Assistant</div>
                    <div className="text-xs text-gray-300">Voice & chat support</div>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="text-sm px-2 py-1 hover:bg-white/5 rounded">Close</button>
              </div>

              <div className="max-h-64 overflow-auto space-y-2 mb-3">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`${m.from === "user" ? "bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black" : "bg-white/6 text-white"} p-2 rounded-xl max-w-[80%]`}>{m.text}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleManualSend(); }}
                  placeholder="Type a message or press mic"
                  className="flex-1 p-2 rounded-xl bg-transparent border border-white/10 outline-none px-3"
                />
                <button onClick={handleManualSend} className="px-3 py-2 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black">Send</button>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                <button
                  onMouseDown={startListening}
                  onMouseUp={stopListening}
                  onTouchStart={startListening}
                  onTouchEnd={stopListening}
                  className={`px-3 py-2 rounded-full border ${listening ? 'bg-red-500/30 border-red-500' : 'bg-white/5'} transition`}
                >
                  {listening ? 'Listening...' : 'Hold to Speak'}
                </button>
                <div className="text-xs">Press and hold to speak (Web Speech API)</div>
              </div>
            </div>
          )}

          {/* Floating round quick button */}
          <button
            onClick={() => setOpen((o) => !o)}
            title="Open Travel Assistant"
            className="w-14 h-14 rounded-full flex items-center justify-center p-1 shadow-2xl border border-white/10 bg-gradient-to-br from-[#00F2FE] to-[#7C4CFF] hover:scale-105 transition"
          >
            <img src={assistantIcon} alt="assistant" className="w-10 h-10 rounded-full object-cover" />
          </button>
        </div>
      </div>
    </div>
  );
}
