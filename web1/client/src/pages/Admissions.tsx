import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Calendar, DollarSign, CheckCircle } from "lucide-react";

export default function Admissions() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary">
        <Navbar />
      </div>

      <main className="flex-1">
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Admissions</h1>
            <p className="text-xl opacity-90">Join the St. Mary's CBSE School Family</p>
          </div>
        </section>

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

            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif mb-8 text-center">Admission Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                    <p className="text-muted-foreground">Fill out the admission form with required documents</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Entrance Assessment</h3>
                    <p className="text-muted-foreground">Appear for the entrance test and interview</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Admission Confirmation</h3>
                    <p className="text-muted-foreground">Receive admission letter and complete fee payment</p>
                  </div>
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
