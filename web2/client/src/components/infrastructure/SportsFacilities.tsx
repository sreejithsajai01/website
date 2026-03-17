const sports = ["Cricket", "Football", "Basketball", "Volleyball", "Badminton", "Table Tennis", "Athletics", "Chess"];

export default function SportsFacilities() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Sports Facilities</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        We believe in the holistic development of every student. Our sports facilities are designed to nurture athletic talent, build teamwork, and promote a healthy lifestyle.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {sports.map((sport) => (
          <div key={sport} className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-center text-sm font-semibold text-primary">
            {sport}
          </div>
        ))}
      </div>
      <ul className="space-y-3">
        {[
          "Large outdoor playground and sports ground",
          "Indoor sports hall for badminton and table tennis",
          "Qualified physical education teachers",
          "Annual sports day and inter-school competitions",
          "Yoga and fitness sessions for all grades",
        ].map((point) => (
          <li key={point} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />{point}
          </li>
        ))}
      </ul>
    </div>
  );
}
