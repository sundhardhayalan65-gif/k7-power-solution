import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Inverters from "./pages/products/Inverters";
import Batteries from "./pages/products/Batteries";
import UPS from "./pages/products/UPS";
import Accessories from "./pages/products/Accessories";

import Blog from "./pages/knowledge/Blog";
import FAQs from "./pages/knowledge/FAQs";
import BuyingGuide from "./pages/knowledge/BuyingGuide";
import Maintenance from "./pages/knowledge/Maintenance";

import Story from "./pages/about/Story";
import Team from "./pages/about/Team";
import Coverage from "./pages/about/Coverage";
import Certifications from "./pages/about/Certifications";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />

      <Route path="/products/inverters" component={Inverters} />
      <Route path="/products/batteries" component={Batteries} />
      <Route path="/products/ups" component={UPS} />
      <Route path="/products/accessories" component={Accessories} />

      <Route path="/knowledge/blog" component={Blog} />
      <Route path="/knowledge/faqs" component={FAQs} />
      <Route path="/knowledge/buying-guide" component={BuyingGuide} />
      <Route path="/knowledge/maintenance" component={Maintenance} />

      <Route path="/about/story" component={Story} />
      <Route path="/about/team" component={Team} />
      <Route path="/about/coverage" component={Coverage} />
      <Route path="/about/certifications" component={Certifications} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
