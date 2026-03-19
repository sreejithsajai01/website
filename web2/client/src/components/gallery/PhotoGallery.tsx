import campusImg from "@/assets/images/school-hero.png";

const photos = [
  
  { src: campusImg },
];

export default function PhotoGallery() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Photo Gallery</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="rounded-xl overflow-hidden border border-border shadow-sm group">
            <div className="h-48 overflow-hidden">
              <img
                src={photo.src}
                alt="Gallery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
