export default function MiddleSchool() {
  const subjects = ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Science", "Art", "Physical Education", "Music"];
  
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Middle School (CBSE)</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        The Middle School (Classes VI–VIII) follows the CBSE curriculum and bridges primary education and senior secondary, deepening subject knowledge while encouraging independent thinking and collaborative learning.
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
            "Comprehensive coverage of Science, Mathematics, Social Science, and Languages",
            "Introduction to computer science and digital literacy",
            "Project-based learning and group activities",
            "Continuous and Comprehensive Evaluation (CCE) pattern",
            "Clubs and extracurricular activities to develop diverse talents",
            "Hands-on laboratory experiments and practical learning",
            "Development of research and analytical skills",
            "Focus on environmental awareness and sustainability",
            "Integration of technology in classroom teaching"
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
