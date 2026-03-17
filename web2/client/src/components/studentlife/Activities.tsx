const activities = [
  { title: "Annual Day", desc: "A grand celebration of talent featuring cultural performances, drama, dance, and music by students." },
  { title: "Science Exhibition", desc: "Students showcase innovative projects and experiments, fostering scientific thinking and creativity." },
  { title: "Field Trips", desc: "Educational excursions to museums, historical sites, and nature parks to enrich classroom learning." },
  { title: "Cultural Festivals", desc: "Celebrations of national and cultural festivals that promote unity, diversity, and heritage." },
  { title: "Community Service", desc: "Students participate in outreach programs, cleanliness drives, and charity events to serve the community." },
  { title: "Inter-School Competitions", desc: "Participation in debates, quizzes, art competitions, and sports events at district and state levels." },
];

export default function Activities() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Activities</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Life at St. Mary's is vibrant and full of opportunities. Our calendar is packed with events and activities that nurture every dimension of a student's personality.
      </p>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.title} className="flex gap-4 items-start bg-primary/5 border border-primary/10 rounded-xl p-5">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <h3 className="font-bold text-primary mb-1">{activity.title}</h3>
              <p className="text-sm text-muted-foreground">{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
