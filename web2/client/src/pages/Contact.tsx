import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-12 text-center">Contact Us</h1>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-sans font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="text-secondary shrink-0" />
                    <p>Vashi, Navi Mumbai - 400703 (Maharashtra)</p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-secondary shrink-0" />
                    <p>+91 98765 43210, +91 98765 43211</p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-secondary shrink-0" />
                    <p>info@stmarys.edu</p>
                  </div>
                </div>
              </div>
              
              <div className="h-64 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
                Map Placeholder
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl font-sans font-bold text-primary mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}