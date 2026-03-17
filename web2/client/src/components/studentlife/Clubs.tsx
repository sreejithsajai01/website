import creativeArtsImg from "@/assets/images/WhatsApp Image 2026-03-17 at 4.18.40 PM.jpeg";
import techInnovationImg from "@/assets/images/WhatsApp Image 2026-03-17 at 4.19.08 PM.jpeg";

const clubs = [
  { name: "Science Club", desc: "Explore experiments, innovations, and scientific discoveries beyond the classroom." },
  { name: "Literary Club", desc: "Debates, creative writing, poetry, and public speaking for budding wordsmiths." },
  { name: "Art & Craft Club", desc: "Painting, sketching, sculpture, and creative expression for young artists." },
  { name: "Music Club", desc: "Vocal and instrumental training, choir, and performances for music enthusiasts." },
  { name: "Eco Club", desc: "Environmental awareness, gardening, and sustainability initiatives on campus." },
  { name: "Math Club", desc: "Puzzles, olympiad preparation, and logical thinking challenges." },
];

const featuredClubs = [
  {
    name: "Creative Arts Club",
    desc: "The Creative Arts Club nurtures students' imagination and artistic expression. From painting and sketching to drama and stage performances, students are encouraged to explore their creative potential.",
    benefits: [
      "Enhances creativity and self-expression",
      "Opportunities for art exhibitions and cultural programs",
      "Builds confidence through performances and presentations",
    ],
    img: creativeArtsImg,
  },
  {
    name: "Tech & Innovation Club",
    desc: "The Tech & Innovation Club introduces students to the world of technology, coding, and problem-solving. It prepares them for the future through hands-on learning and collaborative projects.",
    benefits: [
      "Exposure to coding, robotics, and digital tools",
      "Encourages innovation and critical thinking",
      "Participation in tech competitions and projects",
    ],
    img: techInnovationImg,
  },
];

export default function Clubs() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Clubs</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Our clubs provide students with a platform to explore their passions, develop new skills, and build lasting friendships outside the classroom.
      </p>
      
      {/* Featured Clubs */}
      <div className="space-y-8 mb-10">
        {featuredClubs.map((club) => (
          <div key={club.name} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-64 md:h-auto overflow-hidden">
                <img src={club.img} alt={club.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3">{club.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{club.desc}</p>
                <ul className="space-y-2">
                  {club.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Clubs */}
      <h3 className="text-xl font-bold text-primary mb-4">Other Clubs</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {clubs.map((club) => (
          <div key={club.name} className="bg-primary/5 border border-primary/10 rounded-xl p-5">
            <h3 className="font-bold text-primary mb-2">{club.name}</h3>
            <p className="text-sm text-muted-foreground">{club.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
