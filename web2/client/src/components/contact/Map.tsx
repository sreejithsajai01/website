export default function MapPage() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Map</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Find us at Dr Mar Theophilus Marg, Juhu Nagar, Sector 10A, Vashi, Navi Mumbai. We are easily accessible by road and rail.
      </p>
      <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-96">
        <iframe
          title="School Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2847654321!2d73.00123!3d19.06789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d4f4f4f4f4%3A0x1234567890abcdef!2sDr%20Mar%20Theophilus%20Marg%2C%20Juhu%20Nagar%2C%20Sector%2010A%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        <p className="font-semibold text-primary mb-2">Address:</p>
        <p>Dr Mar Theophilus Marg, Juhu Nagar,</p>
        <p>Sector 10A, Vashi, Navi Mumbai,</p>
        <p>Maharashtra 400703</p>
        <p className="mt-3">Nearest Railway Station: Vashi Station (5 min walk)</p>
        <p>Nearest Bus Stop: Sector 10A Bus Stop (2 min walk)</p>
      </div>
    </div>
  );
}
