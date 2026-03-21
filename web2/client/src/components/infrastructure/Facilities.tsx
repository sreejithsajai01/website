import { Monitor, Palette, Shield, Dumbbell, Sparkles, MessageCircle, Baby } from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Smart Classrooms",
    description: "Our classrooms are spacious, well-ventilated and equipped with modern digital teaching tools that make learning interactive, engaging, and easy to understand.",
    icon: Monitor,
  },
  {
    id: 2,
    name: "Early Childhood Learning Spaces",
    description: "We have specially designed learning areas for Nursery, LKG and UKG focus on activity-based learning, creativity and exploration, helping young learners develop curiosity and confidence.",
    icon: Baby,
  },
  {
    id: 3,
    name: "Digital Learning & Computer Education",
    description: "Students are introduced to technology from an early age through guided computer education and digital learning resources that build essential 21st-century skills.",
    icon: Monitor,
  },
  {
    id: 4,
    name: "Creative Arts & Activity Programs",
    description: "Students participate in a variety of co-curricular activities including art, music, dance, storytelling and creative expression to nurture their talents and confidence.",
    icon: Palette,
  },
  {
    id: 5,
    name: "Safe & Secure Campus",
    description: "We prioritize the safety of our students and thus our campus is monitored and maintained with strict safety measures to ensure a secure and child-friendly environment.",
    icon: Shield,
  },
  {
    id: 6,
    name: "Sports & Play Areas",
    description: "Our well-maintained indoor and outdoor play spaces encourage physical activity, teamwork and healthy development.",
    icon: Dumbbell,
  },
  {
    id: 7,
    name: "Clean & Hygienic Environment",
    description: "We maintain high standards of cleanliness and hygiene across the campus to ensure the well-being of every child.",
    icon: Sparkles,
  },
  {
    id: 8,
    name: "Parent-School Communication",
    description: "In the spirit of partnership with parents, our communication channels ensure that they stay informed about their child's progress and school activities.",
    icon: MessageCircle,
  },
];

export default function Facilities() {
  return (
    <div>
      
      <p className="text-muted-foreground text-lg leading-relaxed mb-8" style={{ fontFamily: 'Poppins' }}>
        We believe that a child's environment plays a vital role in shaping their learning journey. Hence we have thoughtfully designed our campus to provide a safe, stimulating, and future-ready learning space that supports both academic excellence and holistic development. As a branch of St. Mary's Multipurpose High School, we combine trusted educational values with modern facilities suited for today's learners.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {facilities.map((facility) => {
          const Icon = facility.icon;
          return (
            <div
              key={facility.id}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {facility.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans" style={{ fontFamily: 'Poppins' }}>
                {facility.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
        <p className="text-muted-foreground text-base leading-relaxed font-sans" style={{ fontFamily: 'Poppins' }}>
          At St. Mary's CBSE School, every facility is designed with one goal in mind — to create an environment where children can learn with curiosity, grow with confidence, and move from darkness to light through knowledge and values.
        </p>
      </div>
    </div>
  );
}
