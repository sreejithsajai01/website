export default function PrimarySchool() {
  const subjects = ["English", "Hindi", "Mathematics", "Environmental Science", "Art & Craft", "Physical Education", "Music"];
  
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Primary School (CBSE)</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Our Primary School (Classes I–V) follows the CBSE curriculum and lays the foundation for lifelong learning. We focus on building strong literacy, numeracy, and critical thinking skills in a nurturing and joyful environment.
      </p>

      {/* Subjects */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-primary mb-4">Subjects Offered</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {subjects.map((subject) => (
            <div key={subject} className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 text-center">
              <p className="text-sm font-semibold text-primary">{subject}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-4">Learning Approach</h3>
        <ul className="space-y-3">
          {[
            "Activity-based and experiential learning approach",
            "Strong focus on English, Mathematics, and Environmental Science",
            "Art, Music, and Physical Education integrated into daily schedule",
            "Regular assessments through projects and portfolios",
            "Safe and child-friendly classroom environment",
            "Continuous and Comprehensive Evaluation (CCE)",
            "Emphasis on conceptual understanding over rote learning",
            "Development of life skills and values"
          ].map((point) => (
            <li key={point} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
