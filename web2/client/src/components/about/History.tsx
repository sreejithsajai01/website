const bullets = [
  "Late Lamented Arch Bishop Dr. Philipose Mar Theophilus, Founder Manager of our institution, was a multifaceted personality and a visionary. He registered Charitable Trusts, to promote education and relief work among the sick, the poor and the victims of natural calamities. One such Trust is the Malankara Orthodox Church Council of Bombay (MOCCB) which in later years promoted many educational institutions. Today, after four decades of the formation of Bombay Diocese, MOCCB has become a great educational hub running several schools and Junior Colleges in Maharashtra and Gujarat covering State Board, ICSE, CBSE boards. The first of the schools established by His Grace, St. Mary's Multipurpose School, holds its sway in Navi Mumbai as the topmost educational institution with about 5900 students on the roll.",
  "The school's motto Spreading Light in a nutshell explains the long term vision of the school.",
  "In addition to academics, the School offers various activities and classes, such as skating, music, band, Sports, Abacus classes and many more including several sports activities.",
  "St. Mary's has a good reputation among students, parents, and staff, and is considered one of the most preferred and best schools in Navi Mumbai.",
];

export default function History() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-4">History</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Founded in 1986, St. Mary's Multipurpose High School & Junior College in Vashi is a well-regarded educational institution with a long history.
      </p>
      <ul className="space-y-4">
        {bullets.map((point, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground text-base leading-relaxed">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
