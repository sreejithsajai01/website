import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, BookOpen, Music, Star, Award } from "lucide-react";

import kidsImg from "@/assets/images/kids-corner.jpg";
import computerImg from "@/assets/images/lab-computer.jpg";
import musicImg from "@/assets/images/music-room.jpg";

const classOptions = ["NURSERY", "L.K.G.", "U.K.G.", "CLASS 1", "CLASS 2"];
const lastClassOptions = ["PRE-NURSERY / PLAY GROUP", "NURSERY", "L.K.G", "U.K.G", "CLASS 1"];

const highlights = [
  { icon: Users, title: "Expert Teachers", desc: "Highly qualified and experienced faculty dedicated to every student's growth.", img: kidsImg },
  { icon: Star, title: "Holistic Development", desc: "Balanced focus on academics, sports, arts and character building for every student.", img: kidsImg },
  { icon: BookOpen, title: "Smart Classrooms", desc: "Technology-enabled classrooms that make learning interactive and engaging.", img: computerImg },
  { icon: Music, title: "Arts & Culture", desc: "Music, dance and arts programs that nurture creativity and expression.", img: musicImg },
];

const stats = [
  { value: "New", label: "CBSE Institution" },
  { value: "1986", label: "Legacy Since" },
  { value: "Expert", label: "Dedicated Faculty" },
  { value: "Holistic", label: "Development Focus" },
];

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ parentName: "", studentName: "", classApplying: "", lastSchool: "", lastClass: "", email: "", phone: "", address: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-primary text-white py-32 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/5"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4" /> Admissions Open 2025–2026
              </div>
              <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">Admission Enquiry</h1>
              <p className="text-xl text-white/80 leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                Take the first step towards a world-class education. Fill in the form and our team will reach out to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-secondary py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-primary">{s.value}</p>
                  <p className="text-sm text-primary/70 font-medium mt-1" style={{ fontFamily: 'Poppins' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-4">Why Choose St. Mary's CBSE School?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Poppins' }}>
                A nurturing environment where every child is inspired to learn, grow and lead.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map(({ icon: Icon, title, desc, img }) => (
                <div key={title} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 bg-white">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Side Info */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left — Info */}
              <div>
                <h2 className="text-4xl font-sans font-bold text-primary mb-6">Begin Your Journey With Us</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8" style={{ fontFamily: 'Poppins' }}>
                  St. Mary's CBSE School (proposed CBSE) is a newly established sister institution of St. Mary's Multipurpose High School & Junior College, Vashi, founded in 1986. Guided by our motto "Spreading Light", we are committed to shaping confident, curious, and compassionate learners for the future.
                </p>
                <div className="space-y-4 mb-10" style={{ fontFamily: 'Poppins' }}>
                  {[
                    "Proposed CBSE curriculum with experienced faculty",
                    "Nurturing and forward-thinking learning environment",
                    "Inquiry-based learning and real-world application",
                    "Balanced focus on academics and co-curricular activities",
                    "Values-based education and leadership development",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground" style={{ fontFamily: 'Poppins' }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={kidsImg} alt="School atmosphere" className="w-full h-56 object-cover" />
                  <div className="bg-primary px-6 py-4">
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins' }}>
                      "Spreading Light" — Our guiding motto for the future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-border">
                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-sans font-bold text-primary mb-3">Thank You!</h2>
                    <p className="text-muted-foreground text-lg">Your enquiry has been submitted. We will contact you within 24 hours.</p>
                    <Button className="mt-8 bg-primary text-white" onClick={() => setSubmitted(false)}>Submit Another</Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-sans font-bold text-primary mb-2">Enquiry Form</h3>
                    <p className="text-muted-foreground text-sm mb-8" style={{ fontFamily: 'Poppins' }}>
                      Fill in the details below and we'll get back to you shortly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Name of the Parent <span className="text-red-500">*</span></label>
                        <input
                          name="parentName" type="text" required value={form.parentName} onChange={handleChange}
                          placeholder="Enter parent name"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Name of the Student <span className="text-red-500">*</span></label>
                        <input
                          name="studentName" type="text" required value={form.studentName} onChange={handleChange}
                          placeholder="Enter student name"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Class - Applying for ? <span className="text-red-500">*</span></label>
                        <select
                          name="classApplying" required value={form.classApplying} onChange={handleChange}
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white"
                        >
                          <option value="">Select a class</option>
                          {classOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">LAST SCHOOL ATTENDED :</label>
                        <input
                          name="lastSchool" type="text" value={form.lastSchool} onChange={handleChange}
                          placeholder="Enter last school name"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">LAST CLASS ATTENDED</label>
                        <select
                          name="lastClass" value={form.lastClass} onChange={handleChange}
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white"
                        >
                          <option value="">Select last class</option>
                          {lastClassOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Email <span className="text-red-500">*</span></label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="Enter email address"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Phone number <span className="text-red-500">*</span></label>
                        <input
                          name="phone" type="tel" required value={form.phone} onChange={handleChange}
                          placeholder="Enter phone number"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Address of the student <span className="text-red-500">*</span></label>
                        <textarea
                          name="address" rows={3} required value={form.address} onChange={handleChange}
                          placeholder="Enter student address"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-base rounded-xl">
                        Submit Enquiry
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
