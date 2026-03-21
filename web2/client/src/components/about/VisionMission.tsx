import { Target, Eye } from "lucide-react";

export default function VisionMission() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-primary">Our Vision</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4" style={{ fontFamily: 'Poppins' }}>
           We envision a learning community where every child discovers their unique potential and grows into a responsible and future-ready individual
          </p>
        </div>
        <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-primary">Our Mission</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4" style={{ fontFamily: 'Poppins' }}>
            To nurture confident, compassionate and competent learners by providing a strong academic foundation rooted in integrity, discipline and moral excellence.
          </p>
          <ul className="space-y-2">
            <li className="text-muted-foreground text-lg leading-relaxed flex items-start" style={{ fontFamily: 'Poppins' }}>
              <span className="mr-2">•</span>
              <span>Spread the light of knowledge through quality education.</span>
            </li>
            <li className="text-muted-foreground text-lg leading-relaxed flex items-start" style={{ fontFamily: 'Poppins' }}>
              <span className="mr-2">•</span>
              <span>Spread the light of values by nurturing honesty and respect.</span>
            </li>
            <li className="text-muted-foreground text-lg leading-relaxed flex items-start" style={{ fontFamily: 'Poppins' }}>
              <span className="mr-2">•</span>
              <span>Spread the light of confidence by encouraging independent thinking.</span>
            </li>
            <li className="text-muted-foreground text-lg leading-relaxed flex items-start" style={{ fontFamily: 'Poppins' }}>
              <span className="mr-2">•</span>
              <span>Spread the light of creativity through joyful learning.</span>
            </li>
            <li className="text-muted-foreground text-lg leading-relaxed flex items-start" style={{ fontFamily: 'Poppins' }}>
              <span className="mr-2">•</span>
              <span>Spread the light of innovation through modern teaching methods and AI-based learning tools.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
