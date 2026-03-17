const points = [
  "Facilities for outdoor sports like football, cricket, and athletics",
  "Indoor games including table tennis and chess",
  "Regular sports events, competitions, and annual sports day",
  "Encouragement for team spirit, discipline, and healthy competition",
];

export default function SportsFacilities() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Sports Activities</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        We strongly believe in the importance of physical fitness and teamwork. Our sports programs help students build discipline, confidence, and leadership skills.
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
