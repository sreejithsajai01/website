import principalImg from "@/assets/images/WhatsApp Image 2026-03-17 at 3.09.37 PM.jpeg";
import { Quote } from "lucide-react";

export default function PrincipalsMessage() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-8">Principal's Message</h2>
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
        <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg shrink-0">
          <img src={principalImg} alt="Principal" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-sans font-bold text-primary">Fr. Bijumon K.P.</h3>
          <p className="text-muted-foreground font-medium mt-1">(Fr. K.P. Varghese)</p>
          <p className="text-secondary font-bold text-sm tracking-widest uppercase mt-1 mb-4">Principal, St. Mary's CBSE School</p>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground italic leading-relaxed">
              "It is with profound pride and a deep sense of responsibility that I address the students, parents, staff, alumni, and well-wishers of St. Mary's Multipurpose High School & Jr. College, Vashi."
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
        <p>
          Since its inception in 1986, our institution has been steadfast in its pursuit of excellence in education and character formation. Over the decades, St. Mary's has evolved into a dynamic and distinguished centre of learning, presently nurturing more than 6,000 students. Our enduring commitment is guided by our noble motto, <span className="font-semibold text-primary">"Lead me from darkness to light,"</span> which reflects our mission to enlighten minds, cultivate virtues, and prepare young individuals for meaningful participation in society.
        </p>
        <p>
          We firmly believe that education is not merely the acquisition of knowledge, but the holistic development of the human person. At St. Mary's, we strive to foster intellectual competence, moral integrity, social awareness, and spiritual growth. Through a carefully structured academic curriculum complemented by co-curricular and value-oriented programmes, we endeavour to equip our students with the skills, discipline, and resilience required to meet the demands of a rapidly changing world.
        </p>
        <p>
          The success and reputation of our institution are the result of the dedicated efforts of our teaching and non-teaching staff, whose professionalism and commitment remain exemplary. We are equally grateful for the trust and cooperation extended by parents, whose partnership plays a vital role in the formative journey of every student.
        </p>
        <p>
          As we continue to advance, we remain committed to upholding the rich legacy of our institution while embracing innovation and progressive educational practices. It is our earnest aspiration that every student entrusted to our care emerges as a confident, compassionate, and responsible citizen, guided by knowledge and inspired by values.
        </p>
        <p>
          May the light of wisdom continue to guide our path and strengthen our resolve in fulfilling the noble mission of education.
        </p>
        <p className="font-bold text-primary">Fr. Bijumon K.P. (Fr. K.P. Varghese)</p>
      </div>
    </div>
  );
}
