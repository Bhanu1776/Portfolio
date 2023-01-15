import styled from "styled-components";
import tw from "twin.macro";
import Hero from "./components/Hero";
import About from "./components/About";
import { Project } from "./components/Project";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <MainDiv>
        <Hero />
        <About />
        <Project />
        <Work />
        <Blog />
        <Footer />
      </MainDiv>
    </>
  );
};

const MainDiv = styled.main`
  max-width: 115rem;
  ${tw`relative flex flex-col min-h-screen px-6 mx-auto pt-[8rem] bg-white `};
`;

export default App;
