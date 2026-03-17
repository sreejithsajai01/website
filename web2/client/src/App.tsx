import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/components/about/About";
import Academics from "@/pages/Academics";
import Admissions from "@/pages/Admissions";
import Facilities from "@/pages/Facilities";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Notices from "@/pages/Notices";
import Enquiry from "@/pages/Enquiry";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/about/history" component={About}/>
      <Route path="/about/school-motto" component={About}/>
      <Route path="/about/vision-mission" component={About}/>
      <Route path="/about/founder-manager" component={About}/>
      <Route path="/about/managing-trustee" component={About}/>
      <Route path="/about/asst-managing-trustee" component={About}/>
      <Route path="/about/principals-message" component={About}/>
      <Route path="/about/management-board" component={About}/>
      <Route path="/about/school-network" component={About}/>
      <Route path="/academics" component={Academics}/>
      <Route path="/admissions" component={Admissions}/>
      <Route path="/facilities" component={Facilities}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/notices" component={Notices}/>
      <Route path="/enquiry" component={Enquiry}/>
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