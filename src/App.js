import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Alert />
      </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;