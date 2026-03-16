import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import Admissions from "@/pages/Admissions";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Facilities from "@/pages/Facilities";
import Apply from "@/pages/Apply";
import Placeholder from "@/pages/Placeholder";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/academics" component={Academics} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/programs" component={Programs} />
      <Route path="/apply" component={Apply} />
      {/* Fallback to 404 */}
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
