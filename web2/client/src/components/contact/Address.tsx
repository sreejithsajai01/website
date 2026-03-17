import { MapPin } from "lucide-react";

export default function Address() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Address</h2>
      <div className="flex items-start gap-4 bg-primary/5 border border-primary/10 rounded-xl p-6 mb-6">
        <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
        <div>
          <p className="font-bold text-primary text-lg">St. Mary's CBSE School</p>
          <p className="text-muted-foreground mt-1">Dr Mar Theophilus Marg, Juhu Nagar,</p>
          <p className="text-muted-foreground">Sector 10A, Vashi, Navi Mumbai,</p>
          <p className="text-muted-foreground">Maharashtra – 400703</p>
          <p className="text-muted-foreground">India</p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden border border-border h-64">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2847654321!2d73.00123!3d19.06789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d4f4f4f4f4%3A0x1234567890abcdef!2sDr%20Mar%20Theophilus%20Marg%2C%20Juhu%20Nagar%2C%20Sector%2010A%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
