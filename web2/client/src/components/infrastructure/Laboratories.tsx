const points = [
  "Well-maintained Physics, Chemistry, and Biology labs",
  "Advanced Computer Lab with updated systems",
  "Focus on experiments, innovation, and real-world application",
  "Safe and supervised environment for all practical sessions",
];

export default function Laboratories() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Laboratories</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Our laboratories are equipped with modern tools to provide practical, hands-on learning experiences.
      </p>
      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
