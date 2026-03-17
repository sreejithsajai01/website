export default function MapPage() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Map</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Find us at Sector 15, Vashi, Navi Mumbai. We are easily accessible by road and rail.
      </p>
      <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-96">
        <iframe
          title="School Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d73.0!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmFzaGk!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Nearest Railway Station: Vashi Station (5 min walk)</p>
        <p>Nearest Bus Stop: Sector 15 Bus Stop (2 min walk)</p>
      </div>
    </div>
  );
}
