import { Monitor, Palette, Shield, Dumbbell, Sparkles, Users, Baby, MessageCircle } from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Smart Classrooms",
    description: "Our classrooms are spacious, well-ventilated, and equipped with modern digital teaching tools that make learning interactive, engaging, and easy to understand.",
    icon: Monitor,
  },
  {
    id: 2,
    name: "Early Childhood Learning Spaces",
    description: "We have specially designed learning areas for Nursery, LKG, and UKG focus on activity-based learning, creativity, and exploration, helping young learners develop curiosity and confidence.",
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
    description: "Students participate in a variety of co-curricular activities including art, music, dance, storytelling, and creative expression to nurture their talents and confidence.",
    icon: Palette,
  },
  {
    id: 5,
    name: "Safe & Secure Campus",
    description: "We prioritize the safety of our students; and thus our campus is monitored and maintained with strict safety measures to ensure a secure and child-friendly environment.",
    icon: Shield,
  },
  {
    id: 6,
    name: "Sports & Play Areas",
    description: "Our well-maintained indoor and outdoor play spaces encourage physical activity, teamwork, and healthy development.",
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
    description: "In the spirit of partnership with the parents, our communication channels ensure they stay informed about their child's progress and school activities.",
    icon: MessageCircle,
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-muted/30" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-secondary"></div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Campus</h4>
            <div className="w-12 h-1 bg-secondary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Facilities
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe that a child's environment plays a vital role in shaping their learning journey. Hence we have thoughtfully designed our campus to provide a safe, stimulating, and future-ready learning space that supports both academic excellence and holistic development. As a branch of St. Mary's Multipurpose High School, we combine trusted educational values with modern facilities suited for today's learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {facility.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-8 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            At St. Mary's School, every facility is designed with one goal in mind — to create an environment where children can learn with curiosity, grow with confidence, and move from darkness to light through knowledge and values.
          </p>
        </div>

      </div>
    </section>
  );
}
