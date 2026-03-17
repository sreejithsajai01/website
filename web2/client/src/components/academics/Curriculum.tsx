export default function Curriculum() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Curriculum</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        St. Mary's CBSE School follows the Central Board of Secondary Education (CBSE) curriculum, designed to provide a balanced and comprehensive education that prepares students for national and global challenges.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Our curriculum integrates academic rigour with co-curricular activities, ensuring holistic development of every student across all stages of schooling.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        {["Primary School", "Middle School", "Senior Secondary"].map((level) => (
          <div key={level} className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
            <p className="font-bold text-primary">{level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
