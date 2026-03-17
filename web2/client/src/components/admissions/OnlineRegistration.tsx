export default function OnlineRegistration() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold text-primary mb-6">Online Registration / Enquiry Form</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Interested in admitting your child to St. Mary's CBSE School? Fill out our online enquiry form and our admissions team will get in touch with you within 24 hours.
      </p>
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
        <p className="text-muted-foreground mb-6 text-lg">Click below to access the online admission enquiry form.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScAFnsEDCHib5d6f3cN1YQKhHTHGsiLW9CDPNz0DupKaDWzsw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors"
        >
          Go to Enquiry Form
        </a>
      </div>
      <div className="mt-8 space-y-3">
        <h3 className="font-bold text-primary">Documents Required at the Time of Registration</h3>
        {[
          "Birth Certificate of the child",
          "Aadhar Card of child and parents",
          "Previous school Transfer Certificate (for lateral admissions)",
          "Last year's Report Card",
          "Passport-size photographs (4 copies)",
          "Proof of residence",
        ].map((doc) => (
          <div key={doc} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            {doc}
          </div>
        ))}
      </div>
    </div>
  );
}
