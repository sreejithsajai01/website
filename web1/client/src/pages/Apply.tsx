import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! We will contact you soon.");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary">
        <Navbar />
      </div>

      <main className="flex-1">
        <section className="bg-primary text-white py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Apply Now</h1>
            <p className="text-xl opacity-90">Start Your Journey at St. Mary's CBSE School</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Student Name *</label>
                  <Input 
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    placeholder="Enter student's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Date of Birth *</label>
                  <Input 
                    required
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Grade Applying For *</label>
                <select 
                  required
                  value={formData.grade}
                  onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="">Select Grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Parent/Guardian Name *</label>
                <Input 
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  placeholder="Enter parent/guardian name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Email *</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number *</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Address *</label>
                <Textarea 
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Enter complete address"
                  className="min-h-[80px]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Additional Information</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Any additional information you'd like to share"
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
