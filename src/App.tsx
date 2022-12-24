import styled from "styled-components";
import tw from "twin.macro";

const App = () => {
  return (
    <>
      <MainDiv>
        <div className="container text-red-600 bg-yellow-200 ">Hello Bunny</div>
      </MainDiv>
    </>
  );
};

const MainDiv = styled.main`
  max-width: 115rem;
  ${tw`relative flex flex-col min-h-screen px-6 mx-auto pt-[8rem] bg-violet-100 `};
`;

export default App;
