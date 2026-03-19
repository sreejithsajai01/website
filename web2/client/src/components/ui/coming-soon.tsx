import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Clock className="w-12 h-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Coming Soon</h1>
        <p className="text-muted-foreground text-lg mb-8">
        </p>
        <Link href="/">
          <a className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
