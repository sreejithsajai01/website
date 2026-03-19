const streams = [
  { 
    name: "Science", 
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"],
    color: "blue"
  },
  { 
    name: "Commerce", 
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Informatics Practices"],
    color: "green"
  },
  { 
    name: "Humanities", 
    subjects: ["History", "Political Science", "Geography", "Psychology", "English", "Economics"],
    color: "purple"
  },
];

const colorClasses = {
  blue: "bg-blue-50 border-blue-200",
  green: "bg-green-50 border-green-200",
  purple: "bg-purple-50 border-purple-200"
};

const textColorClasses = {
  blue: "text-blue-700",
  green: "text-green-700",
  purple: "text-purple-700"
};

export default function SeniorSecondary() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Senior Secondary (CBSE)</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Senior Secondary (Classes XI–XII) follows the CBSE curriculum and prepares students for board examinations and higher education. We offer three streams — Science, Commerce, and Humanities — with experienced faculty and dedicated support.
      </p>

      {/* Streams */}
      <div className="grid sm:grid-cols-3 gap-6">
        {streams.map((stream) => (
          <div key={stream.name} className={`${colorClasses[stream.color]} border rounded-xl p-6`}>
            <h3 className={`font-bold text-lg mb-4 ${textColorClasses[stream.color]}`}>{stream.name}</h3>
            <div className="space-y-2">
              {stream.subjects.map((subject) => (
                <div key={subject} className="flex items-start gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${textColorClasses[stream.color]} mt-1.5 shrink-0`} />
                  <p className="text-sm text-muted-foreground">{subject}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Senior Secondary Features</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Experienced and qualified faculty members",
            "Regular board examination preparation",
            "Competitive entrance exam coaching",
            "Laboratory and practical sessions",
            "Personalized mentoring and guidance",
            "Career counseling and subject selection support",
            "Mock tests and performance analysis",
            "Integration of technology and online resources"
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
