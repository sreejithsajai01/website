import kidsImg from "@/assets/images/kids-corner.jpg";
import labChemImg from "@/assets/images/lab-chemistry.jpg";
import labCompImg from "@/assets/images/lab-computer.jpg";
import labPhysImg from "@/assets/images/lab-physics.jpg";
import musicImg from "@/assets/images/music-room.jpg";
import heroImg from "@/assets/images/school-hero.png";

const photos = [
  { src: kidsImg, caption: "Kids Corner" },
  { src: labChemImg, caption: "Chemistry Lab" },
  { src: labCompImg, caption: "Computer Lab" },
  { src: labPhysImg, caption: "Physics Lab" },
  { src: musicImg, caption: "Music Room" },
  { src: heroImg, caption: "School Campus" },
];

export default function PhotoGallery() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Photo Gallery</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        A glimpse into life at St. Mary's — our classrooms, labs, events, and campus.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.caption} className="rounded-xl overflow-hidden border border-border shadow-sm group">
            <div className="h-48 overflow-hidden">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="px-4 py-2 bg-white">
              <p className="text-sm font-medium text-primary">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
