import principalImg from "@/assets/images/WhatsApp Image 2026-03-17 at 3.09.37 PM.jpeg";
import { Quote } from "lucide-react";

export default function PrincipalsMessage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        {/* Image with Yellow and White Ring */}
        <div className="relative w-64 h-72 flex items-center justify-center shrink-0">
          {/* Outer Yellow Ring */}
          <div className="absolute w-64 h-64 rounded-full border-8 border-yellow-400 shadow-lg"></div>
          
          {/* Inner White Ring */}
          <div className="absolute w-56 h-56 rounded-full border-4 border-white shadow-md"></div>
          
          {/* Image Container */}
          <div className="relative w-56 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-md z-10">
            <img src={principalImg} alt="Principal" className="w-full h-full object-cover" style={{ objectPosition: '30% 15%' }} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">Fr. Bijumon K. P. </h3>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-4">Principal, St. Mary's CBSE School</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1 rotate-180" />
            <p className="text-muted-foreground italic leading-relaxed font-sans" style={{ fontFamily: 'Poppins' }}>
              It is with profound pride and a deep sense of responsibility that I address the students, parents, staff, alumni, and well-wishers of St. Mary's Multipurpose High School & Jr. College, Vashi.
            </p>
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
          </div>
        </div>
      </div>
      <div className="space-y-4 text-muted-foreground text-lg leading-relaxed " style={{ fontFamily: 'Poppins' }}>
        <p style={{ fontFamily: 'Poppins' }}>
          Since its inception in 1986, our institution has been steadfast in its pursuit of excellence in education and character formation. Over the decades, St. Mary's has evolved into a dynamic and distinguished centre of learning, presently nurturing more than 6,000 students. Our enduring commitment is guided by our noble motto, <span className="font-semibold text-primary">"Lead me from Darkness to Light.,"</span> which reflects our mission to enlighten minds, cultivate virtues, and prepare young individuals for meaningful participation in society.
        </p>
        <p style={{ fontFamily: 'Poppins' }}>
          We firmly believe that education is not merely the acquisition of knowledge, but the holistic development of the human person. At St. Mary's, we strive to foster intellectual competence, moral integrity, social awareness, and spiritual growth. Through a carefully structured academic curriculum complemented by co-curricular and value-oriented programmes, we endeavour to equip our students with the skills, discipline, and resilience required to meet the demands of a rapidly changing world.
        </p>
        <p style={{ fontFamily: 'Poppins' }}>
          The success and reputation of our institution are the result of the dedicated efforts of our teaching and non-teaching staff, whose professionalism and commitment remain exemplary. We are equally grateful for the trust and cooperation extended by parents, whose partnership plays a vital role in the formative journey of every student.
        </p>
        <p style={{ fontFamily: 'Poppins' }}>
          As we continue to advance, we remain committed to upholding the rich legacy of our institution while embracing innovation and progressive educational practices. It is our earnest aspiration that every student entrusted to our care emerges as a confident, compassionate, and responsible citizen, guided by knowledge and inspired by values.
        </p>
        <p style={{ fontFamily: 'Poppins' }}>
          May the light of wisdom continue to guide our path and strengthen our resolve in fulfilling the noble mission of education.
        </p>
        <p className="font-bold text-primary">Fr. Bijumon K. P. </p>
      </div>
    </div>
  );
}
