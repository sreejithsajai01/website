export default function MiddleSchool() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Middle School</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        The Middle School (Classes VI–VIII) bridges primary education and senior secondary, deepening subject knowledge while encouraging independent thinking and collaborative learning.
      </p>
      <ul className="space-y-3 mt-4">
        {[
          "Comprehensive coverage of Science, Mathematics, Social Science, and Languages",
          "Introduction to computer science and digital literacy",
          "Project-based learning and group activities",
          "Continuous and Comprehensive Evaluation (CCE) pattern",
          "Clubs and extracurricular activities to develop diverse talents",
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
