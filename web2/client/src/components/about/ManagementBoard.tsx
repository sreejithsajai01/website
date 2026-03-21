import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import moccb1 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.14.49 PM.jpeg";
import moccb2 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.15.10 PM.jpeg";
import moccb3 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.15.46 PM.jpeg";
import moccb4 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.16.12 PM.jpeg";
import moccb5 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.16.55 PM.jpeg";
import moccb6 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.18.05 PM.jpeg";
import moccb7 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.18.33 PM.jpeg";
import moccb8 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.19.14 PM.jpeg";
import moccb9 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.20.11 PM.jpeg";
import moccb10 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.20.59 PM.jpeg";
import moccb11 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.21.41 PM.jpeg";
import moccb12 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.22.19 PM.jpeg";
import moccb13 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.23.50 PM.jpeg";
import moccb14 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.24.29 PM.jpeg";
import vashi1 from "@/assets/images/Vashi School Committee Members1.jpeg";
import vashi2 from "@/assets/images/Vashi School Committe Members2.jpeg";
import vashiVicePrincipal from "@/assets/images/WhatsApp Image 2026-03-17 at 7.07.58 PM.jpeg";
import vashiMem1 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.06.47 PM.jpeg";
import vashiMem2 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.05.48 PM.jpeg";
import vashiMem3 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.05.33 PM.jpeg";
import vashiMem4 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.05.17 PM.jpeg";
import vashiMem5 from "@/assets/images/WhatsApp Image 2026-03-17 at 7.05.06 PM.jpeg";
import headmasterPrimary from "@/assets/images/headmasterprimary.jpeg";
import chiefExecutive1 from "@/assets/images/chiefexecutiveofficer1.jpeg";
import presidentImg from "@/assets/images/H.G.Geevarghese Mar Coorilos Metropolitan crop.jpg";
import vicePresidentImg from "@/assets/images/H.G. Dr. Geevarghese Mar Theophilos Metropolitan crop.JPG";
import chiefExecutive from "@/assets/images/Rev Fr. Abraham Joseph.jpg";
import secretaryImg from "@/assets/images/Fr. Thomas K Chacko.jpeg";
import boardPresident from "@/assets/images/boardpresident.jpeg";
import boardmem1 from "@/assets/images/boardmem1.jpeg";
import boardmem2 from "@/assets/images/boardmem2.jpeg";
import boardmem3 from "@/assets/images/boardmem3.jpeg";
import boardmem4 from "@/assets/images/boardmem4.jpeg";
import boardmem5 from "@/assets/images/boardmem5.jpeg";
import boardmem6 from "@/assets/images/boardmem6.jpeg";
import boardmem7 from "@/assets/images/boardmem7.jpeg";
import boardmem8 from "@/assets/images/boardmem8.jpeg";
import boardmem9 from "@/assets/images/boardmem9.jpeg";
import boardmem10 from "@/assets/images/boardmem10.jpeg";
import boardmem11 from "@/assets/images/boardmem11.jpeg";
import boardmem12 from "@/assets/images/boardmem12.jpeg";
import boardmem13 from "@/assets/images/boardmem13.jpeg";

const moccbMembers = [
  { img: presidentImg, name: "H.G Geevarghese Mar Coorilos", role: "President" },
  { img: secretaryImg, name: "Rev. Fr. Thomas K Chacko", role: "Secretary" },
  { img: moccb3, name: "Rev. Fr. Santhosh Varghese", role: "Member" },
  { img: moccb4, name: "Rev. Fr. Shaji Chacko", role: "Member" },
  { img: moccb5, name: "Mr. R T Thomas", role: "Member" },
  { img: moccb6, name: "Mr. K. Thomas", role: "Member" },
  { img: moccb7, name: "Mr. K A Thomas", role: "Member" },
  { img: moccb8, name: "Dr. Peter Philip", role: "Member" },
  { img: moccb9, name: "Mr. Sajeev P Rajan", role: "Member" },
  { img: moccb10, name: "Mr. Thomas Philip", role: "Member" },
  { img: moccb11, name: "Mr. Joseph Abraham", role: "Member" },
  { img: moccb12, name: "Mr. A G Babu", role: "Member" },
  { img: moccb13, name: "Mr. P V Varghese", role: "Member" },
  { img: moccb14, name: "Mr. Blesson Oomen", role: "Member" },
];

const vashiMembers = [
  { img: chiefExecutive1, name: "Rev Fr. Abraham Joseph", role: "Chief Executive Officer" },
  { img: vashiVicePrincipal, name: "Mrs. Sailatha Sudhir", role: "Vice Principal" },
  { img: headmasterPrimary, name: "Rev. Fr. K.P Varghese", role: "Headmaster Primary" },
  { img: vashi1, name: "Dr. Peter Philip", role: "Member" },
  { img: vashi2, name: "Fr. Thomas K Chacko", role: "Member" },
  { img: vashiMem1, name: "Mrs. Gracy Mathew", role: "Member" },
  { img: vashiMem2, name: "Mr. M C Sunny", role: "Member" },
  { img: vashiMem3, name: "Mr. Santhosh Mathai", role: "Member" },
  { img: vashiMem4, name: "Mr. Abraham Easo", role: "Member" },
  { img: vashiMem5, name: "Mr. John Mathai", role: "Member" },
];

const educationBoardMembers = [
  { img: presidentImg, name: "H. G. Geevarghese Mar Coorilos", role: "President" },
  { img: vicePresidentImg, name: "H. G. Geevarghese Mar Theophilos", role: "Vice-President" },
    { img: secretaryImg, name: "Rev. Fr. Thomas K Chacko", role: "Secretary" },
  { img: chiefExecutive, name: "Rev. Fr. Abraham Joseph", role: "Chief Executive Officer" },
];

const VISIBLE = 5;

function MemberCarousel({ title, members }: { title: string; members: { img: string; name: string; role: string }[] }) {
  const [start, setStart] = useState(0);
  const visibleCount = Math.min(VISIBLE, members.length);
  const visible = members.slice(start, start + visibleCount);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-sans font-bold text-primary">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={start === 0}
            className="w-9 h-9 rounded border border-border flex items-center justify-center hover:bg-primary/10 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setStart((s) => Math.min(members.length - visibleCount, s + 1))}
            disabled={start >= members.length - visibleCount}
            className="w-9 h-9 rounded border border-border flex items-center justify-center hover:bg-primary/10 disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {visible.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-indigo-100 mb-4">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800 text-base">{m.name}</p>
              {m.role && <p className="text-gray-500 text-sm mt-1">{m.role}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ManagementBoard() {
  return (
    <div>
      <MemberCarousel  members={educationBoardMembers} />
    </div>
  );
}
