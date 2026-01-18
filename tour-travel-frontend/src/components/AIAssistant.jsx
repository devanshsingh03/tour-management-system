import React, { useState } from "react";
import { FiSend, FiX, FiMic, FiLoader } from "react-icons/fi";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi — say something like: 'Find beach tours in Bali'" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "Got it! Let me help you with that." }
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
     
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full z-[9999]
          bg-gradient-to-r from-[#00F2FE] to-[#4FACFE]
          shadow-2xl cursor-pointer flex items-center justify-center
          animate-pulse hover:scale-110 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="AI"
            className="w-9 animate-spin-slow"
          />
        </div>
      )}

      
      {open && (
        <div
          className="fixed z-[9999] bottom-8 right-8 w-[380px] h-[560px]
          bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-2xl 
          border border-white/30 rounded-2xl shadow-2xl
          flex flex-col animate-fadeIn overflow-hidden"
        >
          
          <div className="p-4 flex justify-between items-center bg-white/10 border-b border-white/20">
            <h2 className="text-black font-semibold text-lg">TourX Assistant</h2>
            <FiX
              onClick={() => setOpen(false)}
              className="text-black text-2xl cursor-pointer hover:text-red-600 transition"
            />
          </div>

          <div className="flex justify-center py-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
              className="w-20 opacity-90 drop-shadow-[0_0_18px_#00F2FE] animate-float"
              alt="AI Avatar"
            />
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-3 rounded-xl text-sm shadow 
                ${msg.sender === "ai"
                  ? "bg-white/70 text-black self-start"
                  : "bg-blue-600 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-black/70">
                <FiLoader className="animate-spin" />
                AI is typing…
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white/20 border-t border-white/30 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message or press mic"
              className="flex-1 bg-transparent outline-none text-black placeholder-black/50"
            />

            {/* Mic */}
            <FiMic className="text-black text-xl cursor-pointer hover:text-blue-700 transition" />

            {/* Send */}
            <FiSend
              onClick={sendMessage}
              className="text-black text-xl cursor-pointer hover:text-blue-700 transition"
            />
          </div>
        </div>
      )}
    </>
  );
}
