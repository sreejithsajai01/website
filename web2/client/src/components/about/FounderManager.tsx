import founderImg from "@/assets/images/founder.jpg";

const paragraphs = [
  "Established in 1986, St. Mary's Multipurpose High School & Junior College has been a beacon of quality education and holistic development for nearly four decades.",
  `Guided by the inspiring motto "Lead Us from Darkness to Light", the institution embodies a commitment to nurturing young minds and shaping a brighter future for its students.`,
  "Beyond academics, St. Mary's offers a vibrant array of extracurricular activities, including skating, music, band, Abacus classes, and a wide range of sports. These programs are thoughtfully designed to foster creativity, discipline, and physical fitness, ensuring the all-round development of every student.",
  "Renowned for its dedicated faculty, supportive environment, and strong community ties, St. Mary's has earned its reputation as one of the most sought-after schools in Navi Mumbai, trusted by students, parents, and educators alike.",
];

export default function FounderManager() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      {/* Left: text */}
      <div className="flex-1">
        <h2 className="text-3xl font-sans font-bold text-primary mb-6">
          Welcome to St. Mary's CBSE School, Vashi
        </h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground text-base leading-relaxed text-justify">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Right: photo + caption */}
      <div className="flex flex-col items-center shrink-0 w-64">
        <img
          src={founderImg}
          alt="His Grace Dr. Philipose Mar Theophilos"
          className="w-full rounded-sm object-cover shadow-md"
        />
        <p className="mt-3 text-sm text-muted-foreground">Founder Manager</p>
        <p className="text-sm font-semibold text-primary text-center tracking-wide">
          HIS GRACE DR. PHILIPOSE MAR THEOPHILOS
        </p>
      </div>
    </div>
  );
}
