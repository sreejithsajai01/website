import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, Calendar, DollarSign, CheckCircle } from "lucide-react";

export default function Admissions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">Admissions</h1>
            <p className="text-xl opacity-90">Join the St. Mary's CBSE School Family</p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Application Form</h3>
                <p className="text-muted-foreground">Download and submit your application</p>
              </div>
              <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Important Dates</h3>
                <p className="text-muted-foreground">Check admission deadlines</p>
              </div>
              <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fee Structure</h3>
                <p className="text-muted-foreground">View tuition and fees</p>
              </div>
              <div className="text-center p-8 border border-border rounded-lg hover:shadow-lg transition-all">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Eligibility</h3>
                <p className="text-muted-foreground">Check admission criteria</p>
              </div>
            </div>

            {/* Admission Process */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-sans font-bold mb-8 text-center text-primary">Admission Process 2025–26</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Online Registration", desc: "Register through our website with basic details." },
                  { step: 2, title: "Interaction", desc: "Interaction with the parents and the child." },
                  { step: 3, title: "Document Submission", desc: "Submit required documents: Birth certificate, Transfer certificate, etc." },
                  { step: 4, title: "Admission Confirmation", desc: "Payment of admission fees upon selection." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{step}</div>
                    <div className="bg-secondary/10 p-6 rounded-lg flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">{title}</h3>
                      <p className="text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-8 bg-secondary/10 rounded-lg border border-secondary/20">
                <h3 className="font-bold text-primary text-lg mb-2">Age Criteria</h3>
                <p className="text-muted-foreground">Nursery: 3+ years as on 1st April of the academic year.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
