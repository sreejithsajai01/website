const clubs = [
  { name: "Science Club", desc: "Explore experiments, innovations, and scientific discoveries beyond the classroom." },
  { name: "Literary Club", desc: "Debates, creative writing, poetry, and public speaking for budding wordsmiths." },
  { name: "Art & Craft Club", desc: "Painting, sketching, sculpture, and creative expression for young artists." },
  { name: "Music Club", desc: "Vocal and instrumental training, choir, and performances for music enthusiasts." },
  { name: "Eco Club", desc: "Environmental awareness, gardening, and sustainability initiatives on campus." },
  { name: "Math Club", desc: "Puzzles, olympiad preparation, and logical thinking challenges." },
];

export default function Clubs() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">Clubs</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Our clubs provide students with a platform to explore their passions, develop new skills, and build lasting friendships outside the classroom.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {clubs.map((club) => (
          <div key={club.name} className="bg-primary/5 border border-primary/10 rounded-xl p-5">
            <h3 className="font-bold text-primary mb-2">{club.name}</h3>
            <p className="text-sm text-muted-foreground">{club.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
