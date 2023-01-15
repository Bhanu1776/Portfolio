import styled from "styled-components";
import tw from "twin.macro";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Project } from "./components/Project";
import Work from "./components/Work";

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
  /* ${tw`border-2 border-black`}; */
`;

export default App;
