export default function Library() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Library</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Our well-stocked library is a haven for curious minds. With over 10,000 books spanning fiction, non-fiction, reference materials, and periodicals, it serves as the intellectual heart of the school.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {[
          { label: "Total Books", value: "10,000+" },
          { label: "Periodicals & Journals", value: "50+" },
          { label: "Digital Resources", value: "Available" },
          { label: "Reading Capacity", value: "80 Students" },
        ].map((item) => (
          <div key={item.label} className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex justify-between items-center">
            <p className="text-muted-foreground font-medium">{item.label}</p>
            <p className="font-bold text-primary">{item.value}</p>
          </div>
        ))}
      </div>
      <ul className="space-y-3 mt-6">
        {[
          "Dedicated reading room with comfortable seating",
          "Digital catalogue for easy book search",
          "Regular book fairs and reading competitions",
          "Newspaper and magazine section for current affairs",
        ].map((point) => (
          <li key={point} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />{point}
          </li>
        ))}
      </ul>
    </div>
  );
}
