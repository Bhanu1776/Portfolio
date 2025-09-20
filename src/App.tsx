import styled from "styled-components";
import tw from "twin.macro";
import Hero from "./components/Hero";
import About from "./components/About";
import { Project } from "./components/Project";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useAnalytics } from "./hooks/useAnalytics";
import "./utils/analytics-test";

const App = () => {
  // Initialize analytics for the main app
  useAnalytics({
    trackPageView: true,
    trackScrollDepth: true,
    trackUserEngagement: true,
    sectionName: 'main_app',
    sectionCategory: 'portfolio'
  });

  useEffect(() => {
    AOS.init();
    
    // Set page load time for analytics
    if (typeof window !== 'undefined') {
      (window as any).pageLoadTime = Date.now();
    }
  }, []);

  return (
    <>
      <div className="dark:bg-[#0b1121] transition-all duration-300 ease-in-out ">
        {/* <div className="dark:bg-algolia"> */}
        <MainDiv id="Blur">
          <Hero />
          <About />
          <Project />
          <Work />
          <Blog />
          <Footer />
        </MainDiv>
      </div>

    </>
  );
};

const MainDiv = styled.main`
  max-width: 115rem;
  ${tw`relative flex flex-col min-h-screen px-6 mx-auto pt-[8rem]`};
`;

export default App;
