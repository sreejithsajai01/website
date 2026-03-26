import { useState, useRef, useEffect } from "react";
import { X, ChevronDown, RotateCcw } from "lucide-react";
import schoolLogo from "@/assets/images/school.png";

const BotAvatar = ({ size = 40 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left antenna */}
    <rect x="28" y="4" width="6" height="22" rx="3" fill="#3B3FD8" />
    {/* Right antenna */}
    <rect x="66" y="4" width="6" height="22" rx="3" fill="#3B3FD8" />
    {/* Left ear */}
    <path d="M10 38 Q4 38 4 48 Q4 62 12 62 Q18 62 20 56" fill="#3B3FD8" />
    {/* Right ear */}
    <path d="M90 38 Q96 38 96 48 Q96 62 88 62 Q82 62 80 56" fill="#3B3FD8" />
    {/* Main head / speech bubble */}
    <path
      d="M20 28 Q20 16 50 16 Q80 16 80 28 L80 62 Q80 74 50 74 Q20 74 20 62 Z"
      fill="#3B3FD8"
    />
    {/* Speech bubble tail */}
    <path d="M38 74 L30 86 L52 74 Z" fill="#3B3FD8" />
    {/* Face plate */}
    <rect x="30" y="30" width="40" height="30" rx="8" fill="white" />
    {/* Left eye */}
    <path d="M38 42 Q40 38 42 42" stroke="#3B3FD8" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Right eye */}
    <path d="M58 42 Q60 38 62 42" stroke="#3B3FD8" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Smile */}
    <path d="M44 52 Q50 57 56 52" stroke="#3B3FD8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

const faqs = [
  {
    id: 1,
    question: "How do I apply for admission?",
    answer:
      "You can apply for admission by visiting our Admissions page and filling out the Online Registration form. Admissions are open for classes Nursery to Grade 9 subject to seat availability. You may also visit the school office during working hours.",
  },
  {
    id: 2,
    question: "What is the fee structure?",
    answer:
      "The fee structure varies by grade. Please visit the Fee Structure page under Admissions for detailed information, or contact the school office at 022-27662725 for the latest fee details.",
  },
  {
    id: 3,
    question: "What board does the school follow?",
    answer:
      "St. Mary's School Vashi is affiliated with the Central Board of Secondary Education (CBSE), New Delhi.",
  },
  {
    id: 4,
    question: "What are the school timings?",
    answer:
      "School timings are Monday to Saturday, 7:30 AM to 1:30 PM. Office hours are 9:00 AM to 4:00 PM on working days.",
  },
  {
    id: 5,
    question: "What facilities does the school offer?",
    answer:
      "The school offers well-equipped Science & Computer Labs, a Library, Music Room, Multi-purpose Hall, Sports facilities, and a Kids' Corner for primary students.",
  },
  {
    id: 6,
    question: "How can I contact the school?",
    answer:
      "You can reach us at:\n📞 022-27662725\n📧 cbsestmarysvashi@gmail.com\n📍 Dr. Mar Theophilus Marg, Sector 10A, Vashi, Navi Mumbai - 400703",
  },
  {
    id: 7,
    question: "What is the eligibility for admission?",
    answer:
      "Age eligibility follows CBSE norms. For Nursery, the child must be 3+ years as of 1st April of the admission year. Please visit the Eligibility page under Admissions for complete details.",
  },
  {
    id: 8,
    question: "Are there any extracurricular activities?",
    answer:
      "Yes! We offer a wide range of activities including Sports, Music, Dance, Art, various Clubs, and Annual events. Visit the Student Life section for more details.",
  },
];

type Message = { from: "bot" | "user"; text: string };

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "👋 Hi! I'm St. Mary's CBSE Assistant. Please select a question below to get started." },
  ]);
  const [showFAQs, setShowFAQs] = useState(true);

  // Drag state
  const [pos, setPos] = useState({ x: window.innerWidth - 88, y: window.innerHeight - 120 });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const hasDragged = useRef(false);
  const btnRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    hasDragged.current = false;
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.preventDefault();
  }

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging.current) return;
      hasDragged.current = true;
      const btnW = btnRef.current?.offsetWidth ?? 72;
      const btnH = btnRef.current?.offsetHeight ?? 88;
      setPos({
        x: Math.min(Math.max(0, e.clientX - dragOffset.current.x), window.innerWidth - btnW),
        y: Math.min(Math.max(0, e.clientY - dragOffset.current.y), window.innerHeight - btnH),
      });
    }
    function onMouseUp() { dragging.current = false; }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Touch drag
  function onTouchStart(e: React.TouchEvent) {
    dragging.current = true;
    hasDragged.current = false;
    dragOffset.current = { x: e.touches[0].clientX - pos.x, y: e.touches[0].clientY - pos.y };
  }

  useEffect(() => {
    function onTouchMove(e: TouchEvent) {
      if (!dragging.current) return;
      hasDragged.current = true;
      const btnW = btnRef.current?.offsetWidth ?? 72;
      const btnH = btnRef.current?.offsetHeight ?? 88;
      setPos({
        x: Math.min(Math.max(0, e.touches[0].clientX - dragOffset.current.x), window.innerWidth - btnW),
        y: Math.min(Math.max(0, e.touches[0].clientY - dragOffset.current.y), window.innerHeight - btnH),
      });
    }
    function onTouchEnd() { dragging.current = false; }
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  function handleClick() {
    if (!hasDragged.current) setOpen((v) => !v);
  }

  function handleSelect(faq: (typeof faqs)[0]) {
    setShowFAQs(false);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: faq.question },
      { from: "bot", text: faq.answer },
    ]);
  }

  function handleReset() {
    setMessages([{ from: "bot", text: "👋 Hi! I'm St. Mary's CBSE Assistant. Please select a question below to get started." }]);
    setShowFAQs(true);
  }

  // Chat panel position: open above/beside the button
  const panelRight = window.innerWidth - pos.x - (btnRef.current?.offsetWidth ?? 72);
  const panelBottom = window.innerHeight - pos.y;

  return (
    <>
      {/* Draggable Floating Button */}
      <div
        ref={btnRef}
        style={{ position: "fixed", left: pos.x, top: pos.y, zIndex: 50, cursor: dragging.current ? "grabbing" : "grab", userSelect: "none" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onClick={handleClick}
        className="flex flex-col items-center gap-1 group select-none"
      >
        <div className="relative w-14 h-14 rounded-full shadow-lg border-2 border-[#3B3FD8] bg-white flex items-center justify-center transition-transform group-hover:scale-110">
          <BotAvatar size={44} />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
        </div>
        <span className="text-xs font-semibold text-[#3B3FD8] bg-white/95 px-2 py-0.5 rounded-full shadow border border-[#3B3FD8]/20">
          Ask St Mary's CBSE Bot
        </span>
      </div>

      {/* Chat Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: Math.max(8, panelRight),
            bottom: Math.max(8, panelBottom + 8),
            zIndex: 50,
          }}
          className="w-80 sm:w-96 flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-border bg-white"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#3B3FD8] px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white/40 shrink-0">
              <BotAvatar size={32} />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-tight">St. Mary's CBSE Assistant</p>
            </div>
            <button onClick={handleReset} title="Restart" className="text-white/70 hover:text-white transition-colors mr-1">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={() => setOpen(false)} title="Close" className="text-white/70 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="overflow-y-auto px-4 py-3 space-y-3 max-h-72 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} gap-2`}>
                {msg.from === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-white border border-[#3B3FD8]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <BotAvatar size={22} />
                  </div>
                )}
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                  msg.from === "bot"
                    ? "bg-white border border-border text-gray-800 rounded-tl-none shadow-sm"
                    : "bg-[#3B3FD8] text-white rounded-tr-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* FAQ Options */}
          <div className="border-t border-border bg-white px-3 py-3">
            {showFAQs ? (
              <div className="space-y-1.5">
                <p className="text-xs text-gray-500 font-medium mb-2">Select a question:</p>
                {faqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleSelect(faq)}
                    className="w-full text-left text-xs px-3 py-2 rounded-lg border border-[#3B3FD8]/20 bg-[#3B3FD8]/5 hover:bg-[#3B3FD8] hover:text-white text-[#3B3FD8] font-medium transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 text-xs text-[#3B3FD8] font-semibold py-2 rounded-lg border border-[#3B3FD8]/30 hover:bg-[#3B3FD8]/5 transition-colors"
              >
                <ChevronDown className="w-3.5 h-3.5" />
                Ask another question
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
