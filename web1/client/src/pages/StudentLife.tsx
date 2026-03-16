import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Music, Palette, Trophy, Heart } from "lucide-react";

export default function StudentLife() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary">
        <Navbar />
      </div>

      <main className="flex-1">
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Student Life</h1>
            <p className="text-xl opacity-90">Experience Life at St. Mary's CBSE School</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-8 bg-muted rounded-lg">
                <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Music & Dance</h3>
                <p className="text-muted-foreground">Express yourself through various performing arts programs</p>
              </div>
              <div className="text-center p-8 bg-muted rounded-lg">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Arts & Crafts</h3>
                <p className="text-muted-foreground">Explore creativity through visual arts and craft activities</p>
              </div>
              <div className="text-center p-8 bg-muted rounded-lg">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Sports</h3>
                <p className="text-muted-foreground">Participate in various sports and athletic competitions</p>
              </div>
              <div className="text-center p-8 bg-muted rounded-lg">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Service</h3>
                <p className="text-muted-foreground">Make a difference through social service initiatives</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif mb-8 text-center">Clubs & Activities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Academic Clubs</h3>
                  <p className="text-muted-foreground">Science Club, Math Club, Debate Society, Quiz Club</p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Cultural Activities</h3>
                  <p className="text-muted-foreground">Annual Day, Cultural Fest, Drama, Music Competitions</p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Sports Teams</h3>
                  <p className="text-muted-foreground">Cricket, Football, Basketball, Athletics, Swimming</p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Special Events</h3>
                  <p className="text-muted-foreground">Sports Day, Science Exhibition, Art Exhibition, Field Trips</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
