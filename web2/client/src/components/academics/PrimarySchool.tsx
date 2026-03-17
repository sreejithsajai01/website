export default function PrimarySchool() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Primary School</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Our Primary School (Classes I–V) lays the foundation for lifelong learning. We focus on building strong literacy, numeracy, and critical thinking skills in a nurturing and joyful environment.
      </p>
      <ul className="space-y-3 mt-4">
        {[
          "Activity-based and experiential learning approach",
          "Strong focus on English, Mathematics, and Environmental Science",
          "Art, Music, and Physical Education integrated into daily schedule",
          "Regular assessments through projects and portfolios",
          "Safe and child-friendly classroom environment",
        ].map((point) => (
          <li key={point} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
