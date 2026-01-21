// import React, { useState } from "react";
// import { FiSend, FiX, FiMic, FiLoader } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function AIAssistant() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "ai", text: "Hi! I'm TourX Assistant. I can help you find tours, destinations like Manali or Goa, book trips, explore categories, and navigate our website. What would you like to know?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Comprehensive AI response handler
//   const getAIResponse = (userMessage) => {
//     const message = userMessage.toLowerCase().trim();

//     // Destination-related queries
//     const destinations = {
//       manali: { name: "Manali", route: "/tours", info: "Manali is a beautiful hill station in the Himalayas. You can find Manali tours in our Tours section. Let me take you there!" },
//       goa: { name: "Goa", route: "/destination/goa-beaches", info: "Goa offers beautiful beaches and vibrant nightlife. Let me show you Goa destinations!" },
//       bali: { name: "Bali", route: "/destination/bali", info: "Bali is a tropical paradise with beaches and temples. Let me show you Bali destinations!" },
//       paris: { name: "Paris", route: "/destination/paris", info: "Paris, the city of love! Let me show you Paris destinations and tours!" },
//       dubai: { name: "Dubai", route: "/destination/dubai", info: "Dubai offers luxury experiences and futuristic attractions. Let me take you there!" },
//       ladakh: { name: "Ladakh", route: "/destination/ladakh", info: "Ladakh has breathtaking mountains and high-altitude adventures. Let me show you!" },
//       rishikesh: { name: "Rishikesh", route: "/tours", info: "Rishikesh is perfect for adventure activities like rafting. Let me show you adventure tours!" },
//       himalayas: { name: "Himalayas", route: "/tours", info: "The Himalayas offer amazing trekking experiences. Let me show you mountain tours!" },
//       "sundarbans": { name: "Sundarbans", route: "/destination/sundarbans", info: "Sundarbans is a unique wildlife destination. Let me show you!" },
//     };

//     // Check for destination queries
//     for (const [key, dest] of Object.entries(destinations)) {
//       if (message.includes(key)) {
//         return {
//           text: dest.info,
//           action: () => setTimeout(() => navigate(dest.route), 1500),
//         };
//       }
//     }

//     // Navigation queries
//     if (message.includes("select") && (message.includes("manali") || message.includes("destination") || message.includes("place"))) {
//       return {
//         text: "To select a destination like Manali or any other place, you can:\n1. Visit our Tours page to browse all destinations\n2. Check the Destinations section on the homepage\n3. Use the search feature in Tours page\n\nLet me take you to the Tours page where you can select any destination!",
//         action: () => setTimeout(() => navigate("/tours"), 1500),
//       };
//     }

//     if (message.includes("tours") || message.includes("show tours") || message.includes("find tours")) {
//       return {
//         text: "Let me show you all available tours! You can filter by category, price, or search for specific destinations.",
//         action: () => setTimeout(() => navigate("/tours"), 1500),
//       };
//     }

//     if (message.includes("booking") || message.includes("book") || message.includes("reserve")) {
//       return {
//         text: "To book a tour, first browse our Tours page, select a tour you like, and then click 'Book Now'. You'll need to be logged in. Let me take you to Tours!",
//         action: () => setTimeout(() => navigate("/tours"), 1500),
//       };
//     }

//     if (message.includes("category") || message.includes("categories") || message.includes("adventure") || message.includes("family") || message.includes("luxury") || message.includes("wellness")) {
//       return {
//         text: "We have amazing categories like Adventure, Family Trips, Luxury Tours, and Wellness retreats! You can explore them on our homepage or browse tours by category. Let me show you!",
//         action: () => setTimeout(() => navigate("/"), 1500),
//       };
//     }

//     if (message.includes("experience") || message.includes("holographic")) {
//       return {
//         text: "We offer unique Holographic Journey experiences! You can preview destinations in 3D. Let me show you this amazing feature!",
//         action: () => setTimeout(() => navigate("/holographic-journey"), 1500),
//       };
//     }

//     if (message.includes("blog") || message.includes("articles") || message.includes("travel tips")) {
//       return {
//         text: "Check out our Blog section for travel guides, tips, and stories! Let me take you there!",
//         action: () => setTimeout(() => navigate("/blog"), 1500),
//       };
//     }

//     if (message.includes("contact") || message.includes("help") || message.includes("support")) {
//       return {
//         text: "You can reach us through our Contact page. We're here to help with any questions about tours, bookings, or destinations!",
//         action: () => setTimeout(() => navigate("/contact"), 1500),
//       };
//     }

//     if (message.includes("about") || message.includes("who are you") || message.includes("what is tourx")) {
//       return {
//         text: "TourX is your complete travel management platform! We offer tours to amazing destinations, holographic experiences, easy booking, and travel guides. Let me show you more about us!",
//         action: () => setTimeout(() => navigate("/about"), 1500),
//       };
//     }

//     if (message.includes("login") || message.includes("sign in")) {
//       return {
//         text: "You can login to access your dashboard, view bookings, and manage your account. Let me take you to the login page!",
//         action: () => setTimeout(() => navigate("/login"), 1500),
//       };
//     }

//     if (message.includes("signup") || message.includes("register") || message.includes("create account")) {
//       return {
//         text: "Create an account to book tours, manage bookings, and get exclusive offers! Let me take you to sign up!",
//         action: () => setTimeout(() => navigate("/signup"), 1500),
//       };
//     }

//     if (message.includes("dashboard") || message.includes("my account")) {
//       return {
//         text: "Your dashboard lets you manage bookings, view your tour history, and update your profile. Let me take you there!",
//         action: () => setTimeout(() => navigate("/dashboard"), 1500),
//       };
//     }

//     if (message.includes("my bookings") || message.includes("bookings")) {
//       return {
//         text: "View all your bookings and their status! Let me take you to My Bookings!",
//         action: () => setTimeout(() => navigate("/my-bookings"), 1500),
//       };
//     }

//     if (message.includes("home") || message.includes("homepage")) {
//       return {
//         text: "Taking you back to the homepage!",
//         action: () => setTimeout(() => navigate("/"), 1500),
//       };
//     }

//     // Price and budget queries
//     if (message.includes("price") || message.includes("cost") || message.includes("budget") || message.includes("cheap") || message.includes("affordable")) {
//       return {
//         text: "We have tours at various price ranges! Visit our Tours page where you can filter tours by price range. We have options from budget-friendly to luxury experiences!",
//         action: () => setTimeout(() => navigate("/tours"), 1500),
//       };
//     }

//     // Adventure-related
//     if (message.includes("adventure") || message.includes("trekking") || message.includes("rafting") || message.includes("mountain")) {
//       return {
//         text: "We have amazing adventure tours including mountain trekking, whitewater rafting, and more! Let me show you our adventure tours!",
//         action: () => setTimeout(() => navigate("/tours"), 1500),
//       };
//     }

//     // Beach-related
//     if (message.includes("beach") || message.includes("coastal") || message.includes("sea")) {
//       return {
//         text: "Love beaches? We have beautiful beach destinations like Goa, Bali, and more! Let me show you beach tours!",
//         action: () => setTimeout(() => navigate("/tours"), 1500),
//       };
//     }

//     // General help
//     if (message.includes("what can you do") || message.includes("help me") || message.includes("capabilities")) {
//       return {
//         text: "I can help you:\n• Find tours and destinations (Manali, Goa, Bali, etc.)\n• Navigate to different pages\n• Book tours\n• Explore categories\n• Find adventure, beach, or luxury tours\n• Access your dashboard and bookings\n• Get travel information\n\nJust ask me anything about TourX!",
//         action: null,
//       };
//     }

//     // Default response
//     return {
//       text: "I understand you're asking about: '" + userMessage + "'. Here's how I can help:\n\n• Search for destinations (Manali, Goa, Bali, etc.)\n• Browse tours and categories\n• Book a trip\n• Explore experiences\n• Access your dashboard\n\nTry asking something like 'Show me Manali tours' or 'Take me to destinations'. How can I assist you?",
//       action: null,
//     };
//   };

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMessage = input;
//     setMessages([...messages, { sender: "user", text: userMessage }]);
//     setInput("");
//     setLoading(true);

//     setTimeout(() => {
//       const response = getAIResponse(userMessage);
//       setMessages(prev => [
//         ...prev,
//         { sender: "ai", text: response.text }
//       ]);
//       setLoading(false);
      
//       // Execute navigation action if present
//       if (response.action) {
//         response.action();
//       }
//     }, 1000);
//   };

//   return (
//     <>
     
//       {!open && (
//         <div
//           onClick={() => setOpen(true)}
//           className="fixed bottom-8 right-8 w-16 h-16 rounded-full z-[9999]
//           bg-gradient-to-r from-[#00F2FE] to-[#4FACFE]
//           shadow-2xl cursor-pointer flex items-center justify-center
//           animate-pulse hover:scale-110 transition"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
//             alt="AI"
//             className="w-9 animate-spin-slow"
//           />
//         </div>
//       )}

      
//       {open && (
//         <div
//           className="fixed z-[9999] bottom-8 right-8 w-[380px] h-[560px]
//           bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-2xl 
//           border border-white/30 rounded-2xl shadow-2xl
//           flex flex-col animate-fadeIn overflow-hidden"
//         >
          
//           <div className="p-4 flex justify-between items-center bg-white/10 border-b border-white/20">
//             <h2 className="text-black font-semibold text-lg">TourX Assistant</h2>
//             <FiX
//               onClick={() => setOpen(false)}
//               className="text-black text-2xl cursor-pointer hover:text-red-600 transition"
//             />
//           </div>

//           <div className="flex justify-center py-4">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
//               className="w-20 opacity-90 drop-shadow-[0_0_18px_#00F2FE] animate-float"
//               alt="AI Avatar"
//             />
//           </div>

//           {/* Chat Area */}
//           <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-4">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`max-w-[85%] p-3 rounded-xl text-sm shadow whitespace-pre-line
//                 ${msg.sender === "ai"
//                   ? "bg-white/70 text-black self-start"
//                   : "bg-blue-600 text-white self-end"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {loading && (
//               <div className="flex items-center gap-2 text-black/70">
//                 <FiLoader className="animate-spin" />
//                 AI is typing…
//               </div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="p-3 bg-white/20 border-t border-white/30 flex items-center gap-2">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               placeholder="Type a message or press mic"
//               className="flex-1 bg-transparent outline-none text-black placeholder-black/50"
//             />

//             {/* Mic */}
//             <FiMic className="text-black text-xl cursor-pointer hover:text-blue-700 transition" />

//             {/* Send */}
//             <FiSend
//               onClick={sendMessage}
//               className="text-black text-xl cursor-pointer hover:text-blue-700 transition"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiX, FiMic, FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AIAssistant() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! I'm TourX Assistant. I can help you find tours, destinations like Manali or Goa, book trips, explore categories, and navigate our website. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Setup Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (e) => {
      console.warn("Speech recognition error", e);
      setListening(false);
      if (e.error === "no-speech") {
        alert("No speech detected. Please try again.");
      } else if (e.error === "not-allowed") {
        alert("Microphone permission denied. Please allow microphone access in your browser settings.");
      }
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      setInput(transcript);
      // Automatically send the voice command
      setTimeout(() => {
        handleVoiceMessage(transcript);
      }, 100);
    };

    recognitionRef.current = recognition;

    // Cleanup on unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  // Handle voice message
  const handleVoiceMessage = (transcript) => {
    const userMessage = transcript;
    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: response.text }
      ]);
      setLoading(false);
      
      // Execute navigation action if present
      if (response.action) {
        response.action();
      }
    }, 1000);
  };

  // Toggle listening
  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      alert("Speech recognition not available on this browser. Please use Chrome, Edge, or another supported browser.");
      return;
    }

    try {
      if (listening) {
        recognition.stop();
        setListening(false);
      } else {
        recognition.start();
      }
    } catch (e) {
      // If already started, try stopping first
      if (e.message && e.message.includes("already started")) {
        recognition.stop();
        setTimeout(() => recognition.start(), 100);
      } else {
        console.warn("Error toggling recognition:", e);
        recognition.start();
      }
    }
  };

  // Comprehensive AI response handler
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();

    // Destination-related queries
    const destinations = {
      manali: { name: "Manali", route: "/tours", info: "Manali is a beautiful hill station in the Himalayas. You can find Manali tours in our Tours section. Let me take you there!" },
      goa: { name: "Goa", route: "/destination/goa-beaches", info: "Goa offers beautiful beaches and vibrant nightlife. Let me show you Goa destinations!" },
      bali: { name: "Bali", route: "/destination/bali", info: "Bali is a tropical paradise with beaches and temples. Let me show you Bali destinations!" },
      paris: { name: "Paris", route: "/destination/paris", info: "Paris, the city of love! Let me show you Paris destinations and tours!" },
      dubai: { name: "Dubai", route: "/destination/dubai", info: "Dubai offers luxury experiences and futuristic attractions. Let me take you there!" },
      ladakh: { name: "Ladakh", route: "/destination/ladakh", info: "Ladakh has breathtaking mountains and high-altitude adventures. Let me show you!" },
      rishikesh: { name: "Rishikesh", route: "/tours", info: "Rishikesh is perfect for adventure activities like rafting. Let me show you adventure tours!" },
      himalayas: { name: "Himalayas", route: "/tours", info: "The Himalayas offer amazing trekking experiences. Let me show you mountain tours!" },
      "sundarbans": { name: "Sundarbans", route: "/destination/sundarbans", info: "Sundarbans is a unique wildlife destination. Let me show you!" },
    };

    // Check for destination queries
    for (const [key, dest] of Object.entries(destinations)) {
      if (message.includes(key)) {
        return {
          text: dest.info,
          action: () => setTimeout(() => navigate(dest.route), 1500),
        };
      }
    }

    // Navigation queries
    if (message.includes("select") && (message.includes("manali") || message.includes("destination") || message.includes("place"))) {
      return {
        text: "To select a destination like Manali or any other place, you can:\n1. Visit our Tours page to browse all destinations\n2. Check the Destinations section on the homepage\n3. Use the search feature in Tours page\n\nLet me take you to the Tours page where you can select any destination!",
        action: () => setTimeout(() => navigate("/tours"), 1500),
      };
    }

    if (message.includes("tours") || message.includes("show tours") || message.includes("find tours")) {
      return {
        text: "Let me show you all available tours! You can filter by category, price, or search for specific destinations.",
        action: () => setTimeout(() => navigate("/tours"), 1500),
      };
    }

    if (message.includes("booking") || message.includes("book") || message.includes("reserve")) {
      return {
        text: "To book a tour, first browse our Tours page, select a tour you like, and then click 'Book Now'. You'll need to be logged in. Let me take you to Tours!",
        action: () => setTimeout(() => navigate("/tours"), 1500),
      };
    }

    if (message.includes("category") || message.includes("categories") || message.includes("adventure") || message.includes("family") || message.includes("luxury") || message.includes("wellness")) {
      return {
        text: "We have amazing categories like Adventure, Family Trips, Luxury Tours, and Wellness retreats! You can explore them on our homepage or browse tours by category. Let me show you!",
        action: () => setTimeout(() => navigate("/"), 1500),
      };
    }

    if (message.includes("experience") || message.includes("holographic")) {
      return {
        text: "We offer unique Holographic Journey experiences! You can preview destinations in 3D. Let me show you this amazing feature!",
        action: () => setTimeout(() => navigate("/holographic-journey"), 1500),
      };
    }

    if (message.includes("blog") || message.includes("articles") || message.includes("travel tips")) {
      return {
        text: "Check out our Blog section for travel guides, tips, and stories! Let me take you there!",
        action: () => setTimeout(() => navigate("/blog"), 1500),
      };
    }

    if (message.includes("contact") || message.includes("help") || message.includes("support")) {
      return {
        text: "You can reach us through our Contact page. We're here to help with any questions about tours, bookings, or destinations!",
        action: () => setTimeout(() => navigate("/contact"), 1500),
      };
    }

    if (message.includes("about") || message.includes("who are you") || message.includes("what is tourx")) {
      return {
        text: "TourX is your complete travel management platform! We offer tours to amazing destinations, holographic experiences, easy booking, and travel guides. Let me show you more about us!",
        action: () => setTimeout(() => navigate("/about"), 1500),
      };
    }

    if (message.includes("login") || message.includes("sign in")) {
      return {
        text: "You can login to access your dashboard, view bookings, and manage your account. Let me take you to the login page!",
        action: () => setTimeout(() => navigate("/login"), 1500),
      };
    }

    if (message.includes("signup") || message.includes("register") || message.includes("create account")) {
      return {
        text: "Create an account to book tours, manage bookings, and get exclusive offers! Let me take you to sign up!",
        action: () => setTimeout(() => navigate("/signup"), 1500),
      };
    }

    if (message.includes("dashboard") || message.includes("my account")) {
      return {
        text: "Your dashboard lets you manage bookings, view your tour history, and update your profile. Let me take you there!",
        action: () => setTimeout(() => navigate("/dashboard"), 1500),
      };
    }

    if (message.includes("my bookings") || message.includes("bookings")) {
      return {
        text: "View all your bookings and their status! Let me take you to My Bookings!",
        action: () => setTimeout(() => navigate("/my-bookings"), 1500),
      };
    }

    if (message.includes("home") || message.includes("homepage")) {
      return {
        text: "Taking you back to the homepage!",
        action: () => setTimeout(() => navigate("/"), 1500),
      };
    }

    // Price and budget queries
    if (message.includes("price") || message.includes("cost") || message.includes("budget") || message.includes("cheap") || message.includes("affordable")) {
      return {
        text: "We have tours at various price ranges! Visit our Tours page where you can filter tours by price range. We have options from budget-friendly to luxury experiences!",
        action: () => setTimeout(() => navigate("/tours"), 1500),
      };
    }

    // Adventure-related
    if (message.includes("adventure") || message.includes("trekking") || message.includes("rafting") || message.includes("mountain")) {
      return {
        text: "We have amazing adventure tours including mountain trekking, whitewater rafting, and more! Let me show you our adventure tours!",
        action: () => setTimeout(() => navigate("/tours"), 1500),
      };
    }

    // Beach-related
    if (message.includes("beach") || message.includes("coastal") || message.includes("sea")) {
      return {
        text: "Love beaches? We have beautiful beach destinations like Goa, Bali, and more! Let me show you beach tours!",
        action: () => setTimeout(() => navigate("/tours"), 1500),
      };
    }

    // General help
    if (message.includes("what can you do") || message.includes("help me") || message.includes("capabilities")) {
      return {
        text: "I can help you:\n• Find tours and destinations (Manali, Goa, Bali, etc.)\n• Navigate to different pages\n• Book tours\n• Explore categories\n• Find adventure, beach, or luxury tours\n• Access your dashboard and bookings\n• Get travel information\n\nJust ask me anything about TourX!",
        action: null,
      };
    }

    // Default response
    return {
      text: "I understand you're asking about: '" + userMessage + "'. Here's how I can help:\n\n• Search for destinations (Manali, Goa, Bali, etc.)\n• Browse tours and categories\n• Book a trip\n• Explore experiences\n• Access your dashboard\n\nTry asking something like 'Show me Manali tours' or 'Take me to destinations'. How can I assist you?",
      action: null,
    };
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: response.text }
      ]);
      setLoading(false);
      
      // Execute navigation action if present
      if (response.action) {
        response.action();
      }
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
                className={`max-w-[85%] p-3 rounded-xl text-sm shadow whitespace-pre-line
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
            <FiMic 
              onClick={toggleListening}
              className={`text-xl cursor-pointer transition ${
                listening 
                  ? "text-red-600 animate-pulse" 
                  : "text-black hover:text-blue-700"
              }`}
              title={listening ? "Listening... Click to stop" : "Click to start voice command"}
            />

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