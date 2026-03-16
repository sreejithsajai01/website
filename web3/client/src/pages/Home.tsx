import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { HeroScene } from "@/components/3d/HeroScene";
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Trophy, 
  Globe, 
  Send,
  GraduationCap,
  Microscope,
  Palette
} from "lucide-react";
import type { z } from "zod";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

type FormData = z.infer<typeof insertInquirySchema>;

export default function Home() {
  const { mutate: createInquiry, isPending } = useCreateInquiry();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(insertInquirySchema),
  });

  const onSubmit = (data: FormData) => {
    createInquiry(data, {
      onSuccess: () => reset()
    });
  };

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
        {/* School Image Background with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/school.jpg" 
            alt="St. Mary's School" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-primary/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="text-white pt-12 lg:pt-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/50 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
                Excellence in Education
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance drop-shadow-lg">
                Achieve the <span className="text-accent italic font-normal">Extraordinary</span> at St. Mary's
              </h1>
              <p className="text-lg sm:text-xl text-white mb-10 max-w-lg leading-relaxed text-balance drop-shadow-md">
                St. Mary's CBSE School, Vashi is part of The Malankara Orthodox Church Council of Bombay (MOCCB), dedicated to nurturing young minds with quality education.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#about" className="px-8 py-4 rounded-xl bg-accent text-primary font-bold hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  Discover Our Story
                </a>
                <a href="#academics" className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:border-accent hover:bg-accent/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  Academics <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* School Image - Clear and Visible */}
            <div className="order-first lg:order-last relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/school.jpg" 
                  alt="St. Mary's School Building" 
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 text-background">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-current">
            <path d="M0,120L1440,120L1440,60C1100,120,340,120,0,60L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. WELCOME / ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image Composition */}
            <motion.div variants={FADE_UP} className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl transform rotate-3 z-0"></div>
              {/* school students walking campus building */}
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                alt="Students walking on campus" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl z-20 hidden sm:block">
                <div className="font-display text-2xl text-accent font-bold mb-2">Est. 2026</div>
                <div className="font-medium text-sm">CBSE Affiliated</div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={FADE_UP} className="space-y-6">
              <h2 className="font-display text-accent text-xl font-medium uppercase tracking-widest">Welcome to St. Mary's</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
                St. Mary's CBSE School, Vashi
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                St. Mary's CBSE School, Vashi is part of The Malankara Orthodox Church Council of Bombay (MOCCB). We are dedicated to providing quality education that nurtures young minds and builds future leaders through academic excellence and character development.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-primary">CBSE Affiliated</h4>
                  <p className="text-sm text-muted-foreground">Quality education following CBSE curriculum standards.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-primary">Holistic Development</h4>
                  <p className="text-sm text-muted-foreground">Focus on academic, spiritual, and personal growth.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ACADEMICS / CURRICULUM */}
      <section id="academics" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-accent text-xl font-medium uppercase tracking-widest mb-4">Academic Programs</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              Rigorous Curriculum meets Innovative Thinking
            </h3>
            <p className="text-white/70 text-lg">
              Our multidisciplinary approach connects classical foundations with modern technology, preparing students for high school and beyond.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={FADE_UP} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="font-display text-2xl font-bold mb-4">Humanities</h4>
              <p className="text-white/70 leading-relaxed mb-6">
                Exploring literature, history, and social sciences to build strong communicators and empathetic global citizens.
              </p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={FADE_UP} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
              <div className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="w-7 h-7" />
              </div>
              <h4 className="font-display text-2xl font-bold mb-4">STEM</h4>
              <p className="text-white/70 leading-relaxed mb-6">
                Hands-on science, mathematics, and robotics labs that foster analytical thinking and creative problem-solving.
              </p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={FADE_UP} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-7 h-7" />
              </div>
              <h4 className="font-display text-2xl font-bold mb-4">Arts & Expression</h4>
              <p className="text-white/70 leading-relaxed mb-6">
                Comprehensive visual and performing arts programs that nurture creativity, confidence, and self-discovery.
              </p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CAMPUS LIFE */}
      <section id="campus" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="lg:w-1/2"
            >
              <h2 className="font-display text-accent text-xl font-medium uppercase tracking-widest mb-4">Campus Life</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                More Than Just A Classroom
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                St. Mary's offers a vibrant, inclusive community where students discover their passions. From diverse clubs to competitive athletics and community service, campus life is dynamic and engaging.
              </p>
            </motion.div>
            
            <div className="lg:w-1/2 flex justify-end">
              <a href="#" className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
                Explore Student Life
              </a>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]"
          >
            {/* students in lab classroom */}
            <motion.div variants={FADE_UP} className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Students in science lab" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Science</span>
                <h4 className="font-display text-2xl font-bold">Innovation Labs</h4>
              </div>
            </motion.div>

            {/* students playing sports field */}
            <motion.div variants={FADE_UP} className="col-span-2 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Athletics" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-display text-xl font-bold">Athletics</h4>
              </div>
            </motion.div>

            {/* students theater performance */}
            <motion.div variants={FADE_UP} className="col-span-2 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1514525253344-a8130a43af44?q=80&w=1974&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Theater arts" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-display text-xl font-bold">Performing Arts</h4>
              </div>
            </motion.div>

            {/* students library reading */}
            <motion.div variants={FADE_UP} className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Library study" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-display text-xl font-bold">Library & Media Center</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. CONTACT / INQUIRY FORM */}
      <section id="contact" className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Info Side */}
            <div className="bg-white p-12 lg:w-5/12 flex flex-col justify-center border-r border-border/50">
              <h2 className="font-display text-4xl font-bold text-primary mb-4">Take the Next Step.</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                We'd love to hear from you. Fill out the form to request more information, schedule a campus tour, or speak directly with our admissions team.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Admissions Office</h5>
                    <p className="text-sm text-muted-foreground">admissions@stmarys.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Campus Location</h5>
                    <p className="text-sm text-muted-foreground">123 Academic Way, Education City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-background/50 p-12 lg:w-7/12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Student or Parent Name</label>
                  <input 
                    id="name"
                    {...register("name")}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-white text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                  <input 
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-white text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">How can we help you?</label>
                  <textarea 
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-white text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="I am interested in enrolling my child for 7th grade..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isPending ? "Sending..." : "Submit Inquiry"} <Send className="w-5 h-5" />
                </button>
                
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
