import { Target, Eye } from "lucide-react";

export default function VisionMission() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">Vision &amp; Mission</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-primary">Our Vision</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            To be a leader in transforming young minds to become global citizens without losing our cultural heritage.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To become the premier institution in Navi Mumbai for nurturing and transforming young minds to become successful citizens of the future keeping our cultural heritage intact.
          </p>
        </div>
        <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-primary">Our Mission</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Facilitate students to achieve academic excellence along with all round personality development.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nurture students to realise their true potential in both academic and extracurricular excess for successful careers.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-primary mb-4">Core Objectives</h3>
        <ul className="space-y-3">
          {[
            "Foster intellectual curiosity and a love for lifelong learning",
            "Instill strong moral values and ethical conduct",
            "Encourage creativity, critical thinking, and innovation",
            "Build a culture of inclusivity, respect, and empathy",
            "Prepare students for national and global challenges",
          ].map((obj) => (
            <li key={obj} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              {obj}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
