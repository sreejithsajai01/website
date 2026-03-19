const levels = [
  { 
    title: "Mary Dale Pre-Primary School", 
    detail: "Nursery, Jr.K.G, Sr.K.G.",
    description: "Early childhood education focusing on play-based learning and foundational skills development."
  },
  { 
    title: "Primary School", 
    detail: "Std. 1 to Std. 2 ",
    description: "Strong foundation in English, Mathematics, and Environmental Science with integrated art, music, and physical education."
  },
];

const cbseSubjects = {
  primary: {
    title: "Primary School (Std. 1-4)",
    subjects: ["English", "Hindi", "Mathematics", "Environmental Science", "Art & Craft", "Physical Education", "Music"]
  },
  secondary: {
    title: "Secondary School (Std. 5-10)",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Science", "Art", "Physical Education", "Music"]
  },
  seniorScience: {
    title: "Senior Secondary - Science (Std. XI-XII)",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"]
  },
  seniorCommerce: {
    title: "Senior Secondary - Commerce (Std. XI-XII)",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Informatics Practices"]
  },
  seniorHumanities: {
    title: "Senior Secondary - Humanities (Std. XI-XII)",
    subjects: ["History", "Political Science", "Geography", "Psychology", "English", "Economics"]
  }
};

export default function Curriculum() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-sans font-bold text-primary mb-4">CBSE Curriculum</h2>
        <p className="text-muted-foreground leading-relaxed">
          St. Mary's CBSE School follows the Central Board of Secondary Education (CBSE) curriculum, which is recognized nationally and provides a strong foundation for students from pre-primary through senior secondary levels. Our curriculum emphasizes conceptual understanding, holistic development, and prepares students for competitive examinations and higher education.
        </p>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Academic Levels</h3>
        <div className="space-y-3">
          {levels.map((level) => (
            <div key={level.title} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <div>
                <span className="font-semibold text-foreground">{level.title}</span>
                <span className="text-muted-foreground text-sm ml-2">({level.detail})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
