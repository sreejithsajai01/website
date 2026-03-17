const points = [
  "Wide collection of academic books, reference materials, and storybooks",
  "Access to newspapers, magazines, and digital resources",
  "Promotes independent learning and critical thinking",
];

export default function Library() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Library</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Our school library serves as a knowledge hub, encouraging students to develop a lifelong love for reading and research.
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
