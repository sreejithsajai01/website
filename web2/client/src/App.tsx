import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Admissions from "@/pages/Admissions";
import Infrastructure from "@/pages/Facilities";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Notices from "@/pages/Notices";
import Enquiry from "@/pages/Enquiry";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/academics" component={Academics}/>
      <Route path="/admissions" component={Admissions}/>
      <Route path="/infrastructure" component={Infrastructure}/>
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