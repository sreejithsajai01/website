import { Heart, Music } from "lucide-react";

export default function SchoolMotto() {
  return (
    <div>
      {/* Motto */}
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Motto of the School</h2>
      <div className="flex items-center gap-4 bg-primary/5 border-l-4 border-primary rounded-xl p-6 mb-8">
        <Heart className="w-10 h-10 text-primary shrink-0" />
        <p className="text-2xl font-sans font-bold text-primary italic">Spreading Light.</p>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        Our motto encapsulates the very spirit of St. Mary's — a commitment to diligent work, selfless service, and unconditional love for one another and the community.
      </p>

      {/* Anthem */}
      <div className="border-t border-border pt-10">
        <div className="flex items-center gap-3 mb-6">
          <Music className="w-7 h-7 text-primary shrink-0" />
          <h2 className="text-3xl font-sans font-bold text-primary">School Anthem</h2>
        </div>
        <div className="bg-primary/5 border-l-4 border-primary rounded-xl p-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            We the Marians have the light,<br />
            To touch every soul with warmth and delight,<br />
            In this garden of learning,<br />
            We sow the seeds of yearning,<br />
            To keep the fire burning,<br />
            Of wisdom and truth.
          </p>
          <p>
            March ahead, March ahead, every drop of the sweat,<br />
            Will set a path of courage,<br />
            To lead mankind to a life divine.<br />
            High, High Raise the Marian Banner high!<br />
            Of Hope, Peace, Compassion,<br />
            Our selfless service shall build a strong nation.
          </p>
          <p>
            Our Father in Heaven, give our ambition – wings!<br />
            To be honest and loving,<br />
            To cure human suffering<br />
            We shall make our land worth<br />
            A Heaven on Earth.
          </p>
        </div>
      </div>
    </div>
  );
}
