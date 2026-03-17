import { Heart } from "lucide-react";

export default function SchoolMotto() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">School Motto</h2>
      <div className="flex items-center gap-4 bg-primary/5 border-l-4 border-primary rounded-xl p-6 mb-8">
        <Heart className="w-10 h-10 text-primary shrink-0" />
        <p className="text-2xl font-sans font-bold text-primary italic">"To Work and Serve in Love"</p>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Our motto encapsulates the very spirit of St. Mary's — a commitment to diligent work, selfless service, and unconditional love for one another and the community.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Every student, teacher, and staff member is encouraged to embody this motto in their daily lives — working hard with purpose, serving others with humility, and doing so with love and compassion.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed">
        This guiding principle has been the cornerstone of our institution since its inception and continues to inspire generations of students to become responsible, caring citizens of the world.
      </p>
    </div>
  );
}
