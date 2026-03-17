const videos = [
  { title: "Annual Day 2024", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", url: "#" },
  { title: "Sports Day Highlights", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", url: "#" },
  { title: "Science Exhibition", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", url: "#" },
];

export default function VideoGallery() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Video Gallery</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Watch highlights from our school events, annual day celebrations, sports meets, and more.
      </p>
      <div className="grid sm:grid-cols-3 gap-5">
        {videos.map((video) => (
          <a
            key={video.title}
            href={video.url}
            className="rounded-xl overflow-hidden border border-border shadow-sm group block"
          >
            <div className="relative h-44 overflow-hidden bg-primary/10">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <p className="text-sm font-semibold text-primary">{video.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
