import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

import About from "@/pages/About";
import AboutSub from "@/components/about/About";

import AcademicsSub from "@/components/academics/Academics";
import AdmissionsSub from "@/components/admissions/Admissions";
import InfrastructureSub from "@/components/infrastructure/Infrastructure";
import GallerySub from "@/components/gallery/Gallery";
import DisclosureSub from "@/components/disclosure/Disclosure";
import CareersSub from "@/components/careers/Careers";
import ContactSub from "@/components/contact/Contact";

import Notices from "@/pages/Notices";
import Enquiry from "@/pages/Enquiry";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* About */}
      <Route path="/about" component={About} />
      <Route path="/about/history" component={AboutSub} />
      <Route path="/about/school-motto" component={AboutSub} />
      <Route path="/about/vision-mission" component={AboutSub} />
      <Route path="/about/founder-manager" component={AboutSub} />
      <Route path="/about/managing-trustee" component={AboutSub} />
      <Route path="/about/asst-managing-trustee" component={AboutSub} />
      <Route path="/about/principals-message" component={AboutSub} />
      <Route path="/about/management-board" component={AboutSub} />
      <Route path="/about/school-network" component={AboutSub} />

      {/* Academics */}
      <Route path="/academics" component={AcademicsSub} />
      <Route path="/academics/curriculum" component={AcademicsSub} />
      <Route path="/academics/primary-school" component={AcademicsSub} />
      <Route path="/academics/middle-school" component={AcademicsSub} />
      <Route path="/academics/senior-secondary" component={AcademicsSub} />

      {/* Admissions */}
      <Route path="/admissions" component={AdmissionsSub} />
      <Route path="/admissions/process" component={AdmissionsSub} />
      <Route path="/admissions/eligibility" component={AdmissionsSub} />
      <Route path="/admissions/fee-structure" component={AdmissionsSub} />
      <Route path="/admissions/online-registration" component={AdmissionsSub} />

      {/* Infrastructure */}
      <Route path="/infrastructure" component={InfrastructureSub} />
      <Route path="/infrastructure/library" component={InfrastructureSub} />
      <Route path="/infrastructure/laboratories" component={InfrastructureSub} />
      <Route path="/infrastructure/sports-facilities" component={InfrastructureSub} />

      {/* Gallery */}
      <Route path="/gallery" component={GallerySub} />
      <Route path="/gallery/photos" component={GallerySub} />
      <Route path="/gallery/videos" component={GallerySub} />

      {/* Mandatory Public Disclosure */}
      <Route path="/disclosure" component={DisclosureSub} />
      <Route path="/disclosure/general-information" component={DisclosureSub} />
      <Route path="/disclosure/staff-details" component={DisclosureSub} />
      <Route path="/disclosure/infrastructure-details" component={DisclosureSub} />
      <Route path="/disclosure/academic-results" component={DisclosureSub} />

      {/* Careers */}
      <Route path="/careers" component={CareersSub} />
      <Route path="/careers/open-positions" component={CareersSub} />

      {/* Contact */}
      <Route path="/contact" component={ContactSub} />
      <Route path="/contact/address" component={ContactSub} />
      <Route path="/contact/phone" component={ContactSub} />
      <Route path="/contact/email" component={ContactSub} />
      <Route path="/contact/map" component={ContactSub} />

      <Route path="/notices" component={Notices} />
      <Route path="/enquiry" component={Enquiry} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
