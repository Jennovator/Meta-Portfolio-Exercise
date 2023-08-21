import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
      </main>
    </ChakraProvider>
  );
}

export default App;